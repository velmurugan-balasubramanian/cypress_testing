describe('Login', () => {
  // beforeEach hook in cypress will execute the function defined inside the 
  // hook before every test
  beforeEach(() => {
    cy.visit('https://bstackdemo.com/')
  })

  it('Should sign in to Demo app', () => {

    // Click sign-in in the homepage
    cy.get('#signin').click()

    // Fill username, Password from the dropdown values and Login
    cy.get('#username').click().then(elem => {

      // select the 'demouser' username from the dropdown
      cy.get('#react-select-2-option-0-0').click()

    })

    cy.get('#password').click().then(elem => {

      // select the password from the dropdpown
      cy.get('#react-select-3-option-0-0').click()

    })

    // Click on the login button 
    cy.get('#login-btn').click()

    // Check if the login is successful. 
    cy.url().should('include', 'signin=true')

    // Logout after the test is completed
    cy.get('#logout').click()
  })

  it('Should not sign in to Demo app', () => {

    // Click sign-in in the homepage
    cy.get('#signin').click()

    // Type username, Password that is not in the drop down and Login
    cy.get('#username').click().then(elem => {
      cy.get('#react-select-2-input').type('username{enter}')
    })
    cy.get('#password').click().then(elem => {
      cy.get('#react-select-3-input').type('password{enter}')
    })
    cy.get('#login-btn').click()

    // Check if the login failed and error is thrown. 
    cy.get('body').should('contain.text', 'Invalid Username')
    cy.url().should('not.include', 'signin=true')
  })
})