const { defineConfig } = require('cypress')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify')

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on)
  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  on('file:preprocessor', browserify.default(config))

  return config
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents,
    // specPattern: 'cypress/integration/examples/*.js', 
    specPattern: 'cypress/integration/examples/BDD/*.feature', 
  },
  env: {
    url: 'https://magento.softwaretestingboard.com/',
  },
})
