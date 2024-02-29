describe('display the API results', () => {
  it('can display Daft Punk after searching for it', () => {
    // visit the homepage
    cy.visit('/');

    // Intercept any outgoing GET request and respond with hardcoded data
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('dataFetching');

    // type "Daft Punk" into the input field
    cy.get('.radius')
      .type('Daft Punk');

    // wait untill the data is loaded
    cy.wait('@dataFetching');

    // look in the page for an specific album
    cy.contains('Discovery');
  })
})