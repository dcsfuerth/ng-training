it('loads examples', () => {
  cy.visit('/');
  cy.contains('welcome works!');
});
