// Describe is a logical block called a test suite, 
// a test suite can hold multiple test cases
describe('Add to Cart', () => {

    // Each it block describes a test case 
    it('Should add iPhone 12 to the cart', () => {

        // cy denotes the interface to access cypress
        // visit the site
        cy.visit('https://bstackdemo.com/')

        // Check if the site contains the term BrowserStack, test fails if
        // cypress couldn't find the term BrowserStack
        cy.contains('Not BrowserStack')

        // Check if the site contains title StackDemo, test fails if the title
        // is something other than StackDemo
        cy.get('title').contains('Not StackDemo')
    })
})
