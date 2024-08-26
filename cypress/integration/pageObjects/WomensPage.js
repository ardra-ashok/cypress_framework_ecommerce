class WomensPage {
 get_search() {
  return cy.get('#search')
 }
 get_searchOptions() {
  return cy.get('ul[role="listbox"] li[role="option"] span')
 }
 get_searchTitle() {
  return cy.get('.page-title-wrapper h1')
 }
 get_productName() {
  return cy.get('.product-item-info .product-item-name .product-item-link')
 }
 get_cartButton() {
  return cy.get('.minicart-wrapper')
 }
 get_proceedToCheckOut() {
  return cy.get('#top-cart-btn-checkout')
 }
}

export default WomensPage