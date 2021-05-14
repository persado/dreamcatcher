'use strict';

const opentelemetry = require('@opentelemetry/api');
const { NodeTracerProvider } = require('@opentelemetry/node');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { SimpleSpanProcessor } = require('@opentelemetry/tracing');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');
module.exports = (serviceName) => {
  opentelemetry.diag.setLogger(new opentelemetry.DiagConsoleLogger(), opentelemetry.DiagLogLevel.ALL)
  const provider = new NodeTracerProvider()
  provider.register();
  registerInstrumentations({
    instrumentations: [
      {
        plugins: {
          express: {
            enabled: true,
            path: '@opentelemetry/plugin-express',
          },
          http: {
            enabled: true,
            path: '@opentelemetry/plugin-http',
          },
        },
      }
    ],
    traceProvider: provider,
  });

  const exporter = new JaegerExporter({serviceName,  host: 'jaeger'});

  provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

  // Initialize the OpenTelemetry APIs to use the NodeTracerProvider bindings
  provider.register();

  return opentelemetry.trace.getTracer('express-example');
};
