---
sidebar_position: 3
title: Configuration
slug: configuration
id: configuration
---

## Environment Variables

The following optional environment variables are available for configuration:

### General Settings

- **PUPPETEER_ARGS:** (Default: `--no-sandbox,--disable-setuid-sandbox,--disable-dev-shm-usage`) Comma-separated arguments to pass to puppeteer's launch command.
- **CONCURRENCY:** (Default: `20`) The maximum number of puppeteer-cluster workers, or roughly concurrent requests. Requests over the limit will be added to a queue. Decrease this if you experience performance problems during peak load.
- **PORT:** (Default: `8080`) The port Dreamcatcher will listen to for requests.
- **ALLOW_PRIVATE_NETWORKS:** (Default: `undefined`) Dreamcatcher blocks any requests (e.g. images, CSS) to private networks / IPs by default. Pass this env var with value `true` in order to allow such requests. (This only applies to IPv4 IP addresses; hostnames that resolve to local addresses will still pass through)
- **MONITOR** (default: `undefined`) If defined, logging to stdout is suppressed and instead you get the monitoring provided by `puppeteer-cluster`. Try with `MONITOR=1 npm run start`.
- **TIMEOUT** (default: `30000`) The maximum time Puppeteer will run before timing out

### Sentry Integration

- **SENTRY_DSN:** (Default: `undefined`) Dreamcatcher can integrate with Sentry for error reporting. To use Sentry, provide the DSN identifying your Sentry project and host.
- **SENTRY_EXPRESS** (Default: `undefined`) Set to true to enable performance tracing for all express requests. Otherwise, only PDF and Image generation code blocks will be reported.
- **SENTRY_TRACES_SAMPLE_RATE:** (Default: `0`) A number between 0 and 1 that controls the percentage chance a transaction will report to Sentry for performance monitoring.
