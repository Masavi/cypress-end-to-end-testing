describe('Visiting a website with Cypress', () => {
  it('Visit the google homepage', () => {
    cy.visit('https://www.google.com/');
  });
});
