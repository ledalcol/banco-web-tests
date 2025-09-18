describe('Login', () => {
  beforeEach(()=> {

    //Acesso ao site
    cy.visit('/')

  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {

    //Login
    cy.fazerLoginComCredenciaisValidas()

    //Verificação
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })

   it('Login com dados inválidos devem não permitir entrada no sistema', () => {
   
    //Login com senha incorreta
    cy.fazerLoginComCredenciaisInvalidas()

    //Verificação
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')  
  })
})