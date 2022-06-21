const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  expect(myConfig).to.have.property('pageLoadTimeout', 60000)
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
