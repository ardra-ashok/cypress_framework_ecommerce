class CartPage{
 get_page_title() {
  return cy.get('.page-title span')
 }
}

export default CartPage