describe('Login', () => {
  beforeEach(()=> {

    //Acesso ao site
    cy.visit('http://localhost:4000')
    cy.screenshot('apos-visitar-pagina')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {

    //Login
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    }) 
    cy.screenshot('apos-preencher-dados-validos')
    cy.get('#login-section > .btn').click()
    cy.screenshot('apos-clicar-no-botao-entrar')

    //Verificação
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })

   it('Login com dados inválidos devem não permitir entrada no sistema', () => {
   
    //Login com senha incorreta
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })  
    cy.get('#login-section > .btn').click()

    //Verificação
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')   
  })
})