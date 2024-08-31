class CheckOutPage {
  get_page_title() {
    return cy.get('#shipping .step-title')
  }
  get_emailInput() {
    return cy.get('#customer-email')
  }
  get_firstNameInput() {
    return cy.get("input[name = 'firstname']")
  }
  get_lastNameInput() {
    return cy.get("input[name = 'lastname']")
  }
  get_companyNameInput() {
    return cy.get("input[name = 'company']")
  }
  get_addressInput() {
    return cy.get("input[name = 'street[0]']")
  }
  get_cityInput() {
    return cy.get("input[name = 'city']")
  }
  get_regionSelect() {
    return cy.get('select[name="region_id"]')
  }
  get_zipCode() {
    return cy.get('input[name="postcode"]')
  }
 get_countrySelect() {
  return cy.get("select[name='country_id']")
 }
 get_phoneInput() {
  return cy.get("input[name='telephone']")
 }
 shipping_method_Tbl = '.table-checkout-shipping-method';
 get_continueBtn(){
  return cy.get('.continue')
 }
  get_orderSummary_title() {
    return cy.get('.opc-block-summary span.title')
  }
  get_orderSummary() {
    return cy.get('.block .title')
  }
  get_cartItems() {
    return cy.get('.product-item')
  }
  get_productItemName() {
    return cy.get('.product-item-name')
  }
  get_toggleElem() {
    return cy.get('span.toggle')
  }
  get_productSize() {
    return cy.get('.label:first-of-type')
  }
  get_productColor() {
    return cy.get('.label:nth-of-type(2)')
  }

}


export default CheckOutPage