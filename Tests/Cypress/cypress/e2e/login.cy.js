/// <reference types="cypress" />

const url = "/";

describe("Cenário de Login", () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it("1. Login com sucesso (credenciais válidas)", () => {
    cy.fixture('users').then((users) => {
      cy.login(users.sucesso.email, users.sucesso.password);
      cy.url().should('include', '/home'); // Verifica se foi redirecionado para a home
    });
  });

  it("2. Login com email correto e senha incorreta", () => {
    cy.fixture('users').then((users) => {
      cy.login(users.sucesso.email, 'senhaerrada');
      cy.get('[data-testid="login-error"]').should('have.text', 'Credenciais inválidas');
    });
  });

  it("3. Login com email incorreto e senha correta", () => {
    cy.fixture('users').then((users) => {
      cy.login('emailinvalido@email.com', users.sucesso.password);
      cy.get('[data-testid="login-error"]').should('have.text', 'Credenciais inválidas');
    });
  });

  it("4. Login com ambos email e senha incorretos", () => {
    cy.login('emailinvalido@email.com', 'senhaerrada');
    cy.get('[data-testid="login-error"]').should('have.text', 'Credenciais inválidas');
  });

  it("5. Login com campos vazios", () => {
    // Tenta submeter o formulário sem preencher os campos
    cy.get('[data-testid="login-submit"]').click();
    // Verifica se o campo de email está inválido e exibe a mensagem nativa
    cy.get('[data-testid="login-email"]').then(($input) => {
      expect($input[0].validationMessage).to.eq('Preencha este campo.');
    });
  });
});
