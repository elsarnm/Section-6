/// <reference types="cypress" />

describe('Tugas All Process in Web Saucedemo', () => {
    it('As a user, I can login to the web app', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')

    // Login dengan username dan password yang salah    
    cy.fixture("user").then(user => {
        const username = user.locked_out_user.username
        const password = user.locked_out_user.password
        cy.loginsauce(username, password)
        cy.get('.error-message-container.error').should('be.visible', 'Epic sadface: Sorry, this user has been locked out.')
    })
    // Login dengan username dan password yang salah
        cy.fixture("user").then(user => {
            const username = user.standard_user.username
            const password = user.standard_user.password
            cy.loginsauce(username, password)
        })
        cy.get('#shopping_cart_container').should('be.visible')
        });


    it('As a user, I can view all the product on the web app', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
        cy.fixture("user").then(user => {
            const username = user.standard_user.username
            const password = user.standard_user.password
            cy.loginsauce(username, password)
        })
        cy.get('#item_4_img_link').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#back-to-products').click()
        cy.get('#shopping_cart_container').should('be.visible')
        });
    
        
    it('As a user, I can logout from the web app', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
        cy.fixture("user").then(user => {
            const username = user.standard_user.username
            const password = user.standard_user.password
            cy.loginsauce(username, password)
        })
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link' ).click()
        });

    it('As a user, I can view my chart in the web app', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
        cy.fixture("user").then(user => {
            const username = user.standard_user.username
            const password = user.standard_user.password
            cy.loginsauce(username, password)
        })
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container').click()
        cy.get('.cart_quantity').should('be.visible')
        });
    
    it('As as user, I can fill the information colums', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
        cy.fixture("user").then(user => {
            const username = user.standard_user.username
            const password = user.standard_user.password
            cy.loginsauce(username, password)      
        })
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container').click()
        cy.get('#checkout').click()
        cy.fixture("user").then(user => {
            const firstname = user.standard_user.firstname
            const lastname = user.standard_user.lastname
            const zip = user.standard_user.zip
            cy.information(firstname, lastname, zip)
        })
    });

    it('As a user, I can akses the payment page', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
        cy.fixture("user").then(user => {
            const username = user.standard_user.username
            const password = user.standard_user.password
            cy.loginsauce(username, password)      
        })
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container').click()
        cy.get('#checkout').click()
        cy.fixture("user").then(user => {
            const firstname = user.standard_user.firstname
            const lastname = user.standard_user.lastname
            const zip = user.standard_user.zip
        cy.get('#first-name').type('Elsa')
        cy.get('#last-name').type('Sarah')
        cy.get('#postal-code').type('13810')
        cy.get('#continue').click()
        })
        cy.get('#finish').click()
    });
});
