describe('Contracts manager', () => {
  it('Creates a new contract', () => {
    cy.visit('/contracts')
      .get('[data-cy=add-contract-button]')
      .click()
      .get('#company')
      .type('Cypress Inc')
      .get('#periodStart')
      .click()
      .get(':nth-child(1) > .react-datepicker__day--001')
      .click()
      .get('#periodEnd')
      .click()
      .get(':nth-child(1) > .react-datepicker__day--002')
      .click()
      .get('#scheduledForRenewal')
      .click()
      .get('#negotiationRenewalDate')
      .click()
      .get(':nth-child(1) > .react-datepicker__day--002')
      .click()
      .get('[data-cy=submit-contract-form]')
      .click()
      .get(':nth-child(3) > :nth-child(1)')
      .should('contain', 'Cypress Inc');
  });

  it('Updates an existing contract', () => {
    cy.visit('/contracts')
      .get('[data-cy=edit-contract-button-0]')
      .click()
      .get('#company')
      .clear()
      .type('Cypress Inc')
      .get('[data-cy=submit-contract-form]')
      .click()
      .get('[data-cy=contract-company-cell-0]')
      .should('contain', 'Cypress Inc');
  });
});
