const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7f24qw',
  e2e: {
    baseUrl: "http://qamid.tmweb.ru/admin/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
