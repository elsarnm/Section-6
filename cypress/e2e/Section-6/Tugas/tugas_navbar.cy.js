/// <reference types="cypress" />

describe('Tugas Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        
    });

    it('Should display and type into searchbox', () => {
        cy.get('#searchTerm').should('be.visible')
        cy.get('#searchTerm').type('online')
    });

    it('Should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        
    });

    it('Should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    });

    it('Should display sign in button', () => {
        cy.get('#signin_button').should('be.visible')
        cy.get('#signin_button').click()
    });
});