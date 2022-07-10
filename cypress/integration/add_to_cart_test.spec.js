describe('Add to Cart', () => {

    before(() => {
        cy.visit('https://bstackdemo.com/')

        cy.get("body").then($body => {
            if ($body.find('#logout').length > 0) {
                cy.get('#logout').click()
            }
        });

        cy.get('#signin').click()

        // Fill username, Password from the dropdown values and Login
        cy.get('#username').click().then(elem => {
            cy.get('#react-select-2-option-0-0').click()
        })
        cy.get('#password').click().then(elem => {
            cy.get('#react-select-3-option-0-0').click()
        })
        cy.get('#login-btn').click()
    })

    // Test to check if the user can checkout after adding the phone to cart
    it('Should add iPhone 12 to the cart', () => {

        // click the add to cart button to add Iphone 12 to cart
        cy.get('#1 .shelf-item__buy-btn').click().then(() => {

            // Verify if the phone is successfully added to the cart
            cy.get('.float-cart--open .shelf-item__details .title').should('have.text', 'iPhone 12')

            // Click on the buy button to place order
            cy.get('.buy-btn').click();

            // Verify if the site takes us to chekout page
            cy.url().should('include', 'checkout')
        })
    })


    // Tests if the site redirects to the signin page during checkout if the user is not logged in 
    it('Should add iPhone 12 to the cart', () => {
    
        // Go to homepage and logout if the site is already logged in 
        cy.visit('https://bstackdemo.com/') 
        cy.get('#logout').click()

        // click the add to cart button to add Iphone 12 to cart
        cy.get('#1 .shelf-item__buy-btn').click().then(() => {
        
            // Verify if the phone is successfully added to the cart
            cy.get('.float-cart--open .shelf-item__details .title').should('have.text', 'iPhone 12')
            
            // Click on the buy button to place order
            cy.get('.buy-btn').click();

            // Verify if the site takes us to signin page, as the user is not logged in
            cy.url().should('include', 'signin')
        })
    })

})