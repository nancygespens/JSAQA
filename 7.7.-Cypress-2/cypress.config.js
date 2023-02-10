const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7f24qw",
  e2e: {
    baseUrl: 'http://qamid.tmweb.ru/',
    viewportWidth: 1080,
    viewportHeight: 1080,
    specPattern : 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
