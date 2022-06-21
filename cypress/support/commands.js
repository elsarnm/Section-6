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
// Cypress.Commands.add('login', (email, password) => { ... })
//
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

Cypress.Commands.add('login', (namaakun, sandi) => { 
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(namaakun)
    cy.get('#user_password').clear()
    cy.get('#user_password').type(sandi)
    cy.get('input[name="submit"]').click()
    
});

Cypress.Commands.add('loginsauce', (username, password) => { 
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username)
    cy.get('#password').clear()
    cy.get('#password').type(password)
    cy.get('#login-button.submit-button.btn_action').click()
    
});

Cypress.Commands.add('information', (username, password) => { 
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#first-name').type('Elsa')
    cy.get('#last-name').type('Sarah')
    cy.get('#postal-code').type('13810')
    cy.get('#continue').click()
});

