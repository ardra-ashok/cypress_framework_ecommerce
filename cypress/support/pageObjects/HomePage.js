class HomePage {
  get_logo() {
    return cy.get('.logo img')
  }
  get_title() {
    return cy.get('.info:first-child')
  }
  get_mainTitle() {
    return cy.get('.home-main .content strong.title')
  }
  get_Footer() {
    return cy.get('footer')
  }
  get_whatsNew() {
    return cy.get('#ui-id-3')
  }
  get_womens() {
    return cy.get('#ui-id-4 :nth-child(2)')
  }
  navItems = [
    { selector: '#ui-id-3 > span', text: "What's New" },
    { selector: '#ui-id-4 span:nth-child(2)', text: 'Women' },
    { selector: '#ui-id-5 span:nth-child(2)', text: 'Men' },
    { selector: '#ui-id-6 span:nth-child(2)', text: 'Gear' },
    { selector: '#ui-id-7 span:nth-child(2)', text: 'Training' },
    { selector: '#ui-id-8 span:nth-child(1)', text: 'Sale' },
  ]
}

export default HomePage
