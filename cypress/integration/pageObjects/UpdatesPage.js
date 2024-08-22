class UpdatesPage {
  get_newCollection_sideHeading() {
    return cy.get('a.new-main .content .info')
  }
 get_newCollection_title() {
   return cy.get('a.new-main .content .title')
  }
}

export default UpdatesPage