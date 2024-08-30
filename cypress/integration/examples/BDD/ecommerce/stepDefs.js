import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../../../support/pageObjects/HomePage'
import WomensPage from '../../../../support/pageObjects/WomensPage'
import CheckOutPage from '../../../../support/pageObjects/CheckOutPage'
import PaymentsPage from '../../../../support/pageObjects/PaymentsPage'

const homePage = new HomePage()
const womensPage = new WomensPage()
const checkoutPage = new CheckOutPage()
const paymentsPage = new PaymentsPage()
let itemPrices = []

Given('I open Ecommerce Page and verified homepage elements', () => {
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
  homePage.get_mainTitle().then(($el) => {
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
  homePage.get_womens().click()
})

When('I add items to cart', function()  {
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
});

Then('I add the shipping details for delivery', function () {
  womensPage.get_proceedToCheckOut().click()
  cy.wait(1000)
  cy.url().should('include', 'checkout')
  checkoutPage.get_page_title().should('have.text', 'Shipping Address')
  checkoutPage.get_emailInput().type(this.data.purchaser_details.email)
  checkoutPage.get_firstNameInput().type(this.data.purchaser_details.first_name)
  checkoutPage.get_lastNameInput().type(this.data.purchaser_details.last_name)
  checkoutPage.get_companyNameInput().type(this.data.purchaser_details.company)
  checkoutPage.get_addressInput().type(this.data.purchaser_details.address)
  checkoutPage.get_cityInput().type(this.data.purchaser_details.city)
  checkoutPage.get_regionSelect().select(this.data.purchaser_details.region)
  checkoutPage.get_zipCode().type(this.data.purchaser_details.zip_code)
  checkoutPage.get_countrySelect().select(this.data.purchaser_details.country)
  checkoutPage.get_phoneInput().type(this.data.purchaser_details.phone)
  cy.wait(1000)
  checkoutPage.get_orderSummary_title().should('have.text', 'Order Summary')
  checkoutPage.get_orderSummary().click()
  this.data.products.forEach((product, index) => {
    checkoutPage
      .get_cartItems()
      .eq(index)
      .within(() => {
        checkoutPage.get_productItemName().should('have.text', product.name)
        checkoutPage.get_toggleElem().click({ force: true })
        checkoutPage
          .get_productSize()
          .contains('Size')
          .next()
          .should('have.text', product.size)
        checkoutPage
          .get_productColor()
          .contains('Color')
          .next()
          .should('have.text', product.color)
      })
  })
  checkoutPage.get_shippingCost().check()
  checkoutPage.get_continueBtn().click()
})

Then('I proceed to checkout and verify purchase successful', function () {
  cy.url().should('include', 'payment')
  paymentsPage.get_paymenentsPage_title().should('have.text', 'Payment Method')
  paymentsPage
    .get_billingDetails()
    .should('contain', this.data.purchaser_details.first_name)
  paymentsPage
    .get_billingDetails()
    .should('contain', this.data.purchaser_details.address)
  paymentsPage.get_cartSection_title('have.text', 'Order Summary')
  paymentsPage.get_PlaceOrderBtn().click()
  paymentsPage.get_PaymentSuccess_msg(
    'have.text',
    'Thank you for your purchase!'
  )
  paymentsPage
    .get_emailAddress()
    .should('have.text', this.data.purchaser_details.email)
})

Then('I verified the total price for Items and Shipping',() => {
    paymentsPage
      .get_cartItemPrice()
      .each(($el) => {
        const priceText = $el.text().trim().replace('$', '')
        itemPrices.push(parseFloat(priceText))
      })
      .then(() => {
        const expectedItemsTotal = itemPrices.reduce(
          (acc, price) => acc + price,0)
        paymentsPage.get_shippingAmount().then(($shipping) => {
          const shippingText = $shipping.text().trim().replace('$', '')
          const shippingCost = parseFloat(shippingText)
          const expectedTotalWithShipping = expectedItemsTotal + shippingCost
          paymentsPage.get_totalPrice().then(($total) => {
            const totalText = $total.text().trim().replace('$', '')
            const actualTotal = parseFloat(totalText)
            expect(actualTotal).to.eq(expectedTotalWithShipping)
          })
        })
      })
  }
)
