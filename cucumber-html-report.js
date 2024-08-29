const report = require('multiple-cucumber-html-reporter')

report.generate({
  jsonDir: './cypress/CucumberReports',
  reportPath: './cypress/CucumberReports/cucumber-htmlreport.html',
  metadata: {
    browser: {
      name: 'chrome',
      version: '60',
    },
    device: 'Local test machine',
    platform: {
      name: 'ubuntu',
      version: '16.04',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Cypress Framework' },
      
    ],
  },
})
