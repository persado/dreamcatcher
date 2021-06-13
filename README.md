Node-based service providing a lightweight API for generating JPEG/PNG and PDF representations of a web page, using headless Chrome and [Puppeteer](https://pptr.dev/).

# Installation and Use

## Docker

Clone this repository, `docker build . -t dreamcatcher`, and `docker run dreamcatcher`.

To install additional fonts in the built image, place them in a top-level `fonts` directory in this repo before building.

## Standalone

To run without Docker, simply `npm install && npm start`. Requires Node `8.12.0` (LTS) or newer.

**Troubleshooting Tips**
- When testing Dreamcatcher locally using Docker and a locally-served target site, be sure to use your machine's external-facing IP address in the `url` parameter (rather than `localhost`).
- If your generated image files seem to be twice as large as the requested dimensions, it's because Dreamcatcher sets by default the `deviceScaleFactor` property of the Chromium viewport to `2`, so as to generate images suitable for high-resolution "retina" displays. To override, pass the `scaleFactor` parameter (e.g. `scaleFactor: 1`).
