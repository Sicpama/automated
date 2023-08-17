## How I created this project

```shell
npm init playwright@latest
```

and this was setup:

```shell
Need to install the following packages:
  create-playwright@1.17.129
Ok to proceed? (y) y
Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
✔ Do you want to use TypeScript or JavaScript? · TypeScript
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (y/N) · true
✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
Initializing NPM project (npm init -y)…
Wrote to /Users/chrishewison/GIT/automated/package.json:

{
  "name": "automated",
  "version": "1.0.0",
  "description": "Automated end to end testing",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


Installing Playwright Test (npm install --save-dev @playwright/test)…

added 4 packages, and audited 5 packages in 939ms

found 0 vulnerabilities
Downloading browsers (npx playwright install)…
Downloading Chromium 116.0.5845.82 (playwright build v1076) from https://playwright.azureedge.net/builds/chromium/1076/chromium-mac-arm64.zip
124.8 Mb [====================] 100% 0.0s
Chromium 116.0.5845.82 (playwright build v1076) downloaded to /Users/chrishewison/Library/Caches/ms-playwright/chromium-1076
Downloading FFMPEG playwright build v1009 from https://playwright.azureedge.net/builds/ffmpeg/1009/ffmpeg-mac-arm64.zip
1 Mb [====================] 100% 0.0s
FFMPEG playwright build v1009 downloaded to /Users/chrishewison/Library/Caches/ms-playwright/ffmpeg-1009
Downloading Firefox 115.0 (playwright build v1422) from https://playwright.azureedge.net/builds/firefox/1422/firefox-mac-13-arm64.zip
71.1 Mb [====================] 100% 0.0s
Firefox 115.0 (playwright build v1422) downloaded to /Users/chrishewison/Library/Caches/ms-playwright/firefox-1422
Downloading Webkit 17.0 (playwright build v1883) from https://playwright.azureedge.net/builds/webkit/1883/webkit-mac-13-arm64.zip
60.4 Mb [====================] 100% 0.0s
Webkit 17.0 (playwright build v1883) downloaded to /Users/chrishewison/Library/Caches/ms-playwright/webkit-1883
Writing playwright.config.ts.
Writing .github/workflows/playwright.yml.
Writing tests/example.spec.ts.
Writing tests-examples/demo-todo-app.spec.ts.
Writing package.json.
✔ Success! Created a Playwright Test project at /Users/chrishewison/GIT/automated

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - ./tests/example.spec.ts - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - ./playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭
```
