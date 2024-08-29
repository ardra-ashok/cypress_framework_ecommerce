afterEach(() => {
  cy.log('All tests are done. ')
  Cypress.runner.stop()
})
