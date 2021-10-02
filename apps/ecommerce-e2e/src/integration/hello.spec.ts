
describe('ecommerce', () => {
  beforeEach(() => cy.visit('/hello'));

  it('should display welcome message', () => {
    cy.get('[data-cy=hello]').should('exist')
  });
});
