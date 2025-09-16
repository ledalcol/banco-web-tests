describe('Transferencias', () => {
    beforeEach(() => {

    //Acesso ao site
    cy.visit('/')
    
    //Login
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    }) 

    cy.get('#login-section > .btn').click()

    //Verificação
    cy.contains('h4','Realizar Transferência').should('be.visible')
})

    it('Deve transferir quando informo dados de valor válidos', () => {
    
    //Seleção de conta origem    
    cy.get('label[for ="conta-origem"]').parent().as('campo-conta-origem')
    cy.get('@campo-conta-origem').click()
    cy.get('@campo-conta-origem').contains('João da Silva').click()

    //Seleção de conta destino   
    cy.get('label[for ="conta-destino"]').parent().as('campo-conta-destino')
    cy.get('@campo-conta-destino').click()
    cy.get('@campo-conta-destino').contains('Maria Oliveira').click()

    //Valores
    cy.get('#valor').click().type('50')
    cy.contains('button', 'Transferir').click()

    //Verificação
    cy.get('.toast').should('have.text', 'Transferência realizada!') 

  })
})