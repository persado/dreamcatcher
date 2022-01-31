## [unreleased]

 * Updated puppeteer from 10.4.0 to 13.1.3. Brings bundled chromium from v93 up to v98.
 * Update package-lock lockfileVersion to 2 from 1

## [2.0.1]

 * Fix parsing of env var CONCURRENCY.
 * Disable CORS by default. Fixes an issue with some requests randomly timing out
   while a webfont could not be loaded due to CORS.
 * Certain pages can randomly crash the browser instance. For these cases we,
   retry a screenshot task up to a total of 3 times, before responding with an
   error message.

## [2.0.0]

 * Initial tag after some years of in-house development.

## Pre-2.0

 * We used to rely on a homegrown solution instead of puppeteer-cluster.
