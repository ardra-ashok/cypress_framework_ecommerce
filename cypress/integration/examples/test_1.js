import HomePage from '../pageObjects/HomePage'
import UpdatesPage from '../pageObjects/UpdatesPage'
import WomensPage from '../pageObjects/WomensPage'

describe('Home Page Functionality', function () {
  it('Verify Home Page Functionality', function () {
    const homePage = new HomePage()
    const updatesPage = new UpdatesPage()
    const womensPage = new WomensPage()
    cy.visit(Cypress.env('url'))
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/')
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
    cy.url().should('include', 'what-is-new')
    updatesPage
      .get_newCollection_sideHeading()
      .should('have.text', 'New Luma Yoga Collection')
    updatesPage.get_newCollection_title().contains('The very latest yoga')
    cy.visit(Cypress.env('url'))
    homePage.get_womens().click()
    cy.url().should('include', 'women')
    womensPage.get_search().type('tee')
    womensPage.get_searchOptions().should('be.visible').each(($el) => {
      if ($el.text().trim() === 'tees and tops') {
        cy.wrap($el).click()
        cy.url().should('match', /\?q=\+tees\+and\+tops/)
        womensPage.get_searchTitle().invoke('text').should((text) => {
          expect(text.trim()).to.match(/Search results for:\s*'tees and tops'/i)
        })
        }
      })
  })
})
