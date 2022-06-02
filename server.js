const express = require("express");
const logger = require("morgan");
const Url = require("url");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const retry = require('async-retry');
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const { Cluster } = require('puppeteer-cluster');
const {
  log,
  prepareOptions,
  handleError,
  prepareContent,
  measureContent,
  capturePdf,
  captureImage,
  isPrivateNetwork,
} = require("./helpers");


const MAX_RETRIES_WHEN_ERROR = 3;

const commonSetup = async (page, options) => {
  if (process.env.ALLOW_PRIVATE_NETWORKS !== 'true') {
    await page.setRequestInterception(true);
    page.on('request', interceptedRequest => {
      const url = interceptedRequest.url();
      const hostname = Url.parse(url).hostname;
      if (isPrivateNetwork(hostname)) {
        log(`Warning: Aborting request to ${url}`);
        interceptedRequest.abort();
      } else {
        interceptedRequest.continue();
      }
    });
  }

  await page.setExtraHTTPHeaders(options.headers);
};

const screenshotTask = async ({ page, data: {options, format}}) => {
  var transaction;
  if (useSentry) {
    transaction = Sentry.startTransaction({
      op: 'screenshot',
      name: `screenshot-${format}`,
    });
  }
  result = await captureImage(page, options);
  if (useSentry) transaction.finish();
  return result;
};

const pipeStream = async (input, output) => {
  return new Promise(resolve => {
      input.pipe(output);
      output.on('finish', () => resolve);
  });
};

const pdfStreamTask = async ({ page, data: {options, response}}) => {
  await commonSetup(page, options);
  await prepareContent(page, options);

  const pdfStream = await capturePdf(page, options);
  response.type('application/pdf');
  return await pipeStream(pdfStream, response);
};

const performanceTask = async ({ page, data: {options}}) => {
  await commonSetup(page, options);
  await prepareContent(page, options, true);
  return await measureContent(page, options);
};

const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};

const app = express();

const useSentry = !!process.env.SENTRY_DSN;
if (useSentry) {
  const useSentryExpress = !!process.env.SENTRY_EXPRESS;
  const sentryIntegrations = useSentryExpress ? [new Tracing.Integrations.Express({app})] : [];
  const tracesSampleRate = process.env.SENTRY_TRACES_SAMPLE_RATE ? parseFloat(process.env.SENTRY_TRACES_SAMPLE_RATE) : 0;
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: sentryIntegrations,
    tracesSampleRate,
  });
  console.log(`Sentry enabled, ${useSentryExpress ? 'with' : 'without'} express integration, sample rate: ${tracesSampleRate}`);
}

(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: process.env.CONCURRENCY ? parseInt(process.env.CONCURRENCY) : 15,
    monitor: process.env.MONITOR ? true : false,
    puppeteerOptions: {
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-web-security",
      ],
    },
  });

  if (useSentry) app.use(Sentry.Handlers.requestHandler());

  if (!process.env.MONITOR) {
    app.use(logger('[:date[iso]] :remote-addr ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms', {
      skip: (req, res) => req.path === '/status'
    }));
  }
  app.use(bodyParser.json({ limit: '5mb' }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(allowCrossDomain);

  if (useSentry) app.use(Sentry.Handlers.tracingHandler());

  app.get("/status", function(req, res) {
    res.type("text/plain");
    res.status(200).send("Dreamcatcher is running.");
  });

  app.post("/export/pdf", async (req, res) => {
    try {
      const options = prepareOptions(req.body);

      await retry(
        async () => {
          await cluster.execute(
            {options, response: res},
            pdfStreamTask
          );
          return true;
        },
        {
          retries: MAX_RETRIES_WHEN_ERROR,
          onRetry: (error) => {
            log('Error during screenshot task:')
            log(error.stack);
            if (useSentry) Sentry.captureException(error);
          }
        }
      );
    } catch (e) {
      log('Error during pdf task, bailed:')
      if (useSentry) Sentry.captureException(e);
      handleError(e, res, Sentry);
    }
  });


  app.post("/export/image", async (req, res) => {
    try {
      const options = prepareOptions(req.body);
      const payload = await retry(
        async () => {
          return await cluster.execute(
            {options, format: req.params.format},
            screenshotTask
          );
        },
        {
          retries: MAX_RETRIES_WHEN_ERROR,
          onRetry: (error) => {
            log('Error during screenshot task:')
            log(error.stack);
            if (useSentry) Sentry.captureException(error);
          }
        }
      );

      if (options.imageType == 'png') {
        res.type("image/png");
      } else if (options.imageType == 'webp') {
        res.type('image/webp');
      } else {
        res.type('image/jpeg');
      }
      res.send(payload);
    } catch (e) {
      log('Error during screenshot task, bailed:')
      if (useSentry) Sentry.captureException(e);
      handleError(e, res, Sentry);
    }
  });

  app.post('/performance', async (req, res) => {
    try {
      const options = prepareOptions(req.body);
      const result = await cluster.execute(
        {options, format: req.params.format},
        performanceTask
      );

      res.type("application/json");
      res.send(`{"navigation": ${result.navigation}, "resource": ${result.resource}}`);
    } catch (e) {
      if (useSentry) Sentry.captureException(e);
      handleError(e, res, Sentry);
    }
  });

  if (useSentry) app.use(Sentry.Handlers.errorHandler());

})();

module.exports = app;
