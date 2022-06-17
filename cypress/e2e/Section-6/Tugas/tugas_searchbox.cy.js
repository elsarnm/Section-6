/// <reference types="cypress" />

describe('Tugas Searchbox Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    });

    it('Should Show search result page', () => {
        cy.get('a')
          .should('have.contain', 'Zero - Free Access to Online Banking')
          .should('have.contain', 'Zero - Online Statements')
          .and('have.attr', 'href')
          .and('include', 'index.html')
    });
});