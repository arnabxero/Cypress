const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    env: {
      email: "cegiy54303@anawalls.com",
      password: "cegiy54303@anawalls.comA",
    },
  },
});
