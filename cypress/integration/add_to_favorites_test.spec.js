describe('Add to Favourites', () => {

    beforeEach(() => {

        cy.visit('https://bstackdemo.com/')

        // Cypress reuses browser session, the below code logs out, if a user is logged in
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


    // Tests if we can Add Iphone 12 to favourites 
    it('Should add iPhone 12 to the Favorites', () => {

        // click the iphone 12 favorite button 
        cy.get('#1 button').click()

        // visit the favorites page
        cy.get('#favourites').click()

        // Check if the phone is added successfully to favorites
        cy.get('#1 .shelf-item__buy-btn').click().then(() => {
            cy.get('.float-cart--open .shelf-item__details .title').should('have.text', 'iPhone 12')
        })

        // cypress runs in a asynchronous fashion, and sometimes runs tests parallely, cy.wait() will wait 
        // for the defined time, so some of the task are completed
        cy.wait(500)

        // logout from the site once we are done with the tests
        cy.get('#logout').click()
    })

    // Tests if the app redirects us to signin page if the user is not logged in
    it('should redirect to signin page when adding to favorites, if the user is not logged In', () => {

        // Logout if the user is already logged in 
        cy.get('#logout').click()

        // add iphone 12 to favorites
        cy.get('#1 button').click()

        // check if the site redirects us to the siginin page
        cy.url().should('include', 'signin')

    })


})