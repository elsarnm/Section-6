/// <reference types="cypress" />

describe('Tugas Login and Logout Web ZeroBank', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    it('Should try to login with invalid data', () => {
        cy.fixture("data").then(data => {
            const username = data.invaliduser.namaakun
            const password = data.invaliduser.sandi
            cy.login(username, password)
            })
            cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    });

    it('Should login to application with valid data', () => {
        cy.fixture("data").then(data => {
            const username = data.validuser.namaakun
            const password = data.validuser.sandi
            cy.login(username, password)
            })
            cy.get('h2').should('contain.text', 'Cash Accounts')
    });

    it('Should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('strong').should('contain.text', 'Home')
    });
});