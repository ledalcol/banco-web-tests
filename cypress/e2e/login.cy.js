describe('Login', () => {
  it('Login com dados válidos deve permitir entrada no sistema', () => {
   
    //Site
    cy.visit('http://localhost:4000')

    //Login
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    //Verificação
    cy.contains('h4','Realizar Transferência').should('be.visible')

  })
})