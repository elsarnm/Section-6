/// <reference types="cypress" />

describe('Login/ Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.contains('Sign in').click()
    });

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    });

    it('Should login to application with invalid data', () => {
        cy.fixture("user").then(user1 => {
            const username = user1.username
            const password = user1.password

            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()

            cy.get('h2').should('contain.text', 'Cash Accounts')
        })
    });

    it('Should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('strong').should('contain.text', 'Home')
    });
});