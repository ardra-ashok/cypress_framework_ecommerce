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
 get_shippingCost() {
  return cy.get('input[value="flatrate_flatrate"]')
 }
 get_continueBtn(){
  return cy.get('.continue')
 }
}


export default CheckOutPage