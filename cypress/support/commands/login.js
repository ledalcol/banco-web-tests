Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {
    
    //Login com credenciais válidas
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    }) 
    cy.get('#login-section > .btn').click() 

})

Cypress.Commands.add('fazerLoginComCredenciaisInvalidas', () => {
    
    //Login com credenciais inválidas
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })  
    cy.get('#login-section > .btn').click()
    
})