---
sidebar_position: 3
title: Configuration
slug: configuration
id: configuration
---

## Environment Variables

The following optional environment variables are available for configuration:

- **CONCURRENCY:** (Default: `20`) The maximum number of requests to process concurrently. Requests over the limit will be added to a queue. Decrease this if you experience performance problems during peak load.
- **BROWSER_REGEN_INTERVAL:** (Default: `100`) To maximize performance, requests share a common browser instance (running in effect as separate tabs). However, to avoid the impact of memory leaks in Chromium, the shared browser is refreshed after the number of requests specified here. Try lowering this if you notice cyclical performance degradation.
- **PORT:** (Default: `8080`) The port on which the Dreamcatcher server will run. Only relevant for non-Docker installs; with Docker, simply map 8080 to the desired outward-facing port.
- **SENTRY_DSN:** (Default: `undefined`) Dreamcatcher can integrate with Sentry for error reporting. To use Sentry, provide the DSN identifying your Sentry project and host.
- **ALLOW_PRIVATE_NETWORKS:** (Default: `undefined`) Dreamcatcher blocks any requests (e.g. images, CSS) to private networks / IPs by default. Pass this env var with value `true` in order to allow such requests. (This only applies to IPv4 IP addresses; hostnames that resolve to local addresses will still pass through)
