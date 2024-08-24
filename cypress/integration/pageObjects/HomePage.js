class HomePage {
  get_logo() {
    return cy.get('.logo > img')
  }
  get_title() {
    return cy.get('.home-main .content .info')
  }
  get_navTitle() {
    return cy.get('#ui-id-3 span')
  }
  get_mainTitle() {
    return cy.get('.home-main .content strong.title')
  }
  get_navTitle_1() {
    return cy.get('#ui-id-4 span:nth-child(2)')
  }
  get_navTitle_2() {
    return cy.get('#ui-id-5 span:nth-child(2)')
  }
  get_navTitle_3() {
    return cy.get('#ui-id-6 span:nth-child(2)')
  }
  get_navTitle_4() {
    return cy.get('#ui-id-7 span:nth-child(2)')
  }
  get_navTitle_5() {
    return cy.get('#ui-id-8 span:nth-child(1)')
  }
  get_Footer(){
    return cy.get('footer')
  }
  get_whatsNew() {
    return cy.get('#ui-id-3');
  }
  get_womens() {
    return cy.get('#ui-id-4 > :nth-child(2)')
  }
}

export default HomePage
