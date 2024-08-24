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
}

export default WomensPage