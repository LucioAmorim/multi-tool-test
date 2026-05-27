// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- Comando customizado de login --
Cypress.Commands.add('login', (email, password) => {
	cy.get('[data-testid="login-email"]').clear();
	if (email) {
		cy.get('[data-testid="login-email"]').type(email);
	}
	cy.get('[data-testid="login-password"]').clear();
	if (password) {
		cy.get('[data-testid="login-password"]').type(password);
	}
	cy.get('[data-testid="login-submit"]').click();
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })