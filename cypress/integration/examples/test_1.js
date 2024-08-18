import HomePage from '../pageObjects/HomePage'

describe('Shopping Cart', function () {
 it('Verify shopping cart function', function () {
  const homePage = new HomePage()
  cy.visit(Cypress.env('url'))
  homePage.get_logo().should('exist')

 })

})