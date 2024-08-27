import HomePage from '../pageObjects/HomePage'
import UpdatesPage from '../pageObjects/UpdatesPage'
import WomensPage from '../pageObjects/WomensPage'
import CartPage from '../pageObjects/CartPage'
import CheckOutPage from '../pageObjects/CheckOutPage'
import PaymentsPage from '../pageObjects/PaymentsPage'

describe('Home Page Functionality', function () {
   before(function () {
     cy.fixture('example').then(function (data) {
       this.data = data
     })
   })
  it('Verify Home Page Functionality', function () {
    const homePage = new HomePage()
    const updatesPage = new UpdatesPage()
    const womensPage = new WomensPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckOutPage()
    const paymentsPage = new PaymentsPage()

    cy.visit(Cypress.env('url'))
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/')
    homePage.get_logo().should('exist')
    cy.wait(1000)
    homePage
      .get_title()
      .should('be.visible')
      .and(($el) => {
        expect($el.text().trim()).to.equal('New Luma Yoga Collection')
      })
    // homePage.get_mainTitle().should('be.visible').contains('Get fit and')

    homePage
      .get_mainTitle()
      .then(($el) => {
        cy.log($el.text())
        expect($el.text().trim()).to.include('Get fit and')
      })

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
    womensPage
      .get_searchOptions()
      .should('be.visible')
      .each(($el) => {
        if ($el.text().trim() === 'tees and tops') {
          cy.wrap($el).click()
        }
      })
    cy.url().should('match', /\?q=\+tees\+and\+tops/)
    womensPage
      .get_searchTitle()
      .invoke('text')
      .should((text) => {
        expect(text.trim()).to.match(/Search results for:\s*'tees and tops'/i)
      })
    this.data.products.forEach((prod) => {
       cy.selectProduct(prod)
    })
    womensPage.get_cartButton().click()
    womensPage.get_proceedToCheckOut().click()
    cy.url().should('include','checkout')
    checkoutPage.get_page_title().should('have.text', 'Shipping Address')
    checkoutPage.get_emailInput().type('test@automation.com')
    checkoutPage.get_firstNameInput().type('Test')
    checkoutPage.get_lastNameInput().type('Name')
    checkoutPage.get_companyNameInput().type('Test company')
    checkoutPage.get_addressInput().type('Test Address')
    checkoutPage.get_cityInput().type('Test City')
    checkoutPage.get_regionSelect().select('Georgia')
    checkoutPage.get_zipCode().type('234421')
    checkoutPage.get_countrySelect().select('United States')
    checkoutPage.get_phoneInput().type('12345671') // ---------------
    checkoutPage.get_shippingCost().check()
    checkoutPage.get_continueBtn().click()
    cy.url().should('include','payment')
    paymentsPage.get_paymenentsPage_title().should('have.text', 'Payment Method')
    paymentsPage.get_cartSection_title('have.text', 'Order Summary')
    paymentsPage.get_PlaceOrderBtn().click()
    paymentsPage.get_PaymentSuccess_msg('have.text', 'Thank you for your purchase!')
  })
})
