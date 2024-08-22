import HomePage from '../pageObjects/HomePage'
import UpdatesPage from '../pageObjects/UpdatesPage'

describe('Home Page Functionality', function () {
  it('Verify Home Page Functionality', function () {
    const homePage = new HomePage()
    const updatesPage = new UpdatesPage()
    cy.visit(Cypress.env('url'))
    homePage.get_logo().should('exist')
    homePage.get_title().should('have.text', 'New Luma Yoga Collection')
    homePage.get_mainTitle().contains('Get fit and')
    homePage.get_navTitle().should('have.text', "What's New")
    homePage.get_navTitle_1().should('have.text', 'Women')
    homePage.get_navTitle_2().should('have.text', 'Men')
    homePage.get_navTitle_3().should('have.text', 'Gear')
    homePage.get_navTitle_4().should('have.text', 'Training')
    homePage.get_navTitle_5().should('have.text', 'Sale')
    homePage.get_navTitle().click()
    homePage.get_Footer().should('exist')
    homePage.get_whatsNew().click()
    updatesPage
      .get_newCollection_sideHeading()
      .should('have.text', 'New Luma Yoga Collection')
    updatesPage.get_newCollection_title().contains('The very latest yoga')
    
  })
})
