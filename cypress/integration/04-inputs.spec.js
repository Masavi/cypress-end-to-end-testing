describe('Testing for the input field', () => {

  beforeEach(() => {
    cy.visit('/')

    cy.get('.radius') // Gets the input field to search for an artist
      .as('inputField')
  })

  it('can type into the input field', () => {
    cy.get('@inputField')
      .type('Queen', { delay: 200 })
  });

  it('can handle backspaces when searching', () => {
    cy.get('@inputField')
      .type('Beeee{backspace}{backspace} Gees', { delay: 200 })
      .should('have.value', 'Bee Gees');
  });
});
