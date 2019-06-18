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
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('enterLoginPage', (loginflag) => {
    cy.contains(loginflag).click()
  })

Cypress.Commands.add('login', (email, usernameV, password, passwordV, loginForm, loginText) => {
    cy.get(email).should('be.visible').wait(1000).type(usernameV)
    cy.get(password).should('be.visible').wait(500).type(passwordV)
    cy.get(loginForm).contains(loginText).click()
  })
  
Cypress.Commands.add('checkValue', (value, valueText, expectText) => {
    cy.get(value)
      .find(valueText)
      .should('have.text',expectText)
  })