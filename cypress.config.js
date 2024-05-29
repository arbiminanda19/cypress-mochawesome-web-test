const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "scenarios/**/*.test.js",
  },
  env: {
    base_url: "https://app.smartfarm.id",
    base_url_api: "https://api.smartfarm.id",
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/screenshots",
});
