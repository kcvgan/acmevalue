describe('Contracts manager', () => {
  it('Creates a new contract', () => {
    cy.visit('/')
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
      .get(':nth-child(1) > .react-datepicker__day--001')
      .click()
      .get('#scheduledForRenewal')
      .click()
      .get('#negotiationRenewalDate')
      .click()
      .get(':nth-child(1) > .react-datepicker__day--001')
      .click()
      .get('[data-cy=submit-contract-form]')
      .click()
      .get(':nth-child(3) > :nth-child(1)')
      .should('contain', 'Cypress Inc');
  });

  it('Updates an existing contract', () => {
    cy.visit('/')
      .get('[data-cy=edit-contract-button-0]')
      .click()
      .get('#company')
      .clear()
      .type('Cypress Inc')
      .get('#periodStart')
      .click()
      .get(':nth-child(1) > .react-datepicker__day--001')
      .click()
      .get('#periodEnd')
      .click()
      .get(':nth-child(1) > .react-datepicker__day--001')
      .click()
      .get('#scheduledForRenewal')
      .click()
      .get('#negotiationRenewalDate')
      .click()
      .get(':nth-child(1) > .react-datepicker__day--001')
      .click()
      .get('[data-cy=submit-contract-form]')
      .click()
      .get('.sc-hKgJUU > :nth-child(1) > :nth-child(1)')
      .should('contain', 'Cypress Inc');
  });
});
