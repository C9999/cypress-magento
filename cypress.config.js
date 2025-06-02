const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 't9ec12',
  video: true,
  fixturesFolder: false,
  scrollBehavior: 'center',
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 110000,
  chromeWebSecurity: false,
  electronPath: 'electron/dist/electron',
  retries: {
    runMode: 1,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://magento.softwaretestingboard.com/',
  },
})