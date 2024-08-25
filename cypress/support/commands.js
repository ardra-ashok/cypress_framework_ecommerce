Cypress.Commands.add('selectProduct', (product) => {
  // cy.get('.product-item-info .product-item-name .product-item-link').each((el, index, $list) => {
  //  if (el.text().includes(productName)) {
  //   cy.log(productName)
  //  }
  // })
  cy.contains('.product-item-info', product.name).within(() => {
    cy.wait(1000)
    cy.get('div[aria-describedby^="option-label-size"]')
      .contains(product.size)
      .click()
    cy.get('div[aria-label="Color"]')
      .find(`div[aria-label="${product.color}"]`)
      .click()
    cy.get('button[type="submit"][title="Add to Cart"]')
      .scrollIntoView()
      .click({ force: true })
  })

  cy.get('.message-success').should(
    'contain',
    `You added ${product.name} to your shopping cart.`)
})
