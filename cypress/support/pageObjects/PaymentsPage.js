class PaymentsPage{
 get_paymenentsPage_title() {
  return cy.get('.payment-group .step-title')
 }
 get_cartSection_title() {
  return cy.get('.opc-block-summary .title')
 }
 get_PlaceOrderBtn() {
  return cy.get('.primary .checkout')
 }
 get_PaymentSuccess_msg() {
  return cy.get('.base')
 }
 get_emailAddress() {
  return cy.get('span[data-bind="text: getEmailAddress()"]')
 }
 get_billingDetails() {
  return cy.get('.billing-address-details')
 }
 get_cartItemPrice() {
  return cy.get('.cart-price .price')
 }

 get_totalPrice() {
  return cy.get('.grand.totals .price')
 }
 get_shippingAmount() {
  return cy.get('.shipping .amount .price')
 }

}

export default PaymentsPage