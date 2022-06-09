---
sidebar_position: 4
title: Tips & Troubleshooting
slug: tips
id: tips
---

# Tips & Troubleshooting

- If your generated image files seem to be twice as large as the requested dimensions, it's because Dreamcatcher sets by default the `deviceScaleFactor` property of the Chromium viewport to `2`, so as to generate images suitable for high-resolution "retina" displays. To override, pass the `scaleFactor` parameter (e.g. `scaleFactor: 1`).
