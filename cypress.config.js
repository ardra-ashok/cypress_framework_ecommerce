const { defineConfig } = require("cypress");
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify')

async function setupNodeEvents(on, config) {

  // require('cypress-mochawesome-reporter/plugin')(on)
  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  on('file:preprocessor', browserify.default(config))
  return config
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/BDD/*.feature',
    // specPattern: 'cypress/integration/examples/*.js',
  },
  env: {
    url: 'https://magento.softwaretestingboard.com/',
  },
})
