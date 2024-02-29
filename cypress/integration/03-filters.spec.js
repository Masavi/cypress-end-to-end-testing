describe('Testing the filter checkboxes', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('can uncheck the explicit checkbox', () => {
    cy.get('.filters__form-group')
      // .contains('Explicit') This gives us access to the label "Explicit", but not to the checkbox itself
      .first()
      .find('input')
      // .trigger('click')
      .click()
      .should('not.be.checked')
  });

  it("can uncheck the 1900's checkbox", () => {
    cy.get('.filters__form > :nth-child(2)')
      .find('input')
      .click()
      .should('not.be.checked')
  })
});
