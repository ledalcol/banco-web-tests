describe('Transferencias', () => {
    beforeEach(() => {

    //Acesso ao site
    cy.visit('/')
    
    //Login
    cy.fazerLoginComCredenciaisValidas()

    //Verificação
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })

  //Transferência abaixo de R$5000,00
  it('Deve apresentar uma mensagem de erro quando for houver a tentativa de transferências com valores acima de R$ 5.000,00', () => {

    //Transação e verificação
    cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '10','Transferência realizada!')
  })

  //Transferência acima de R$5000,00 sem token
  it('Deve apresentar uma mensagem de erro quando for houver a tentativa de transferências com valores acima de R$ 5.000,00', () => {

    //Transação e verificação
    cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '6000', 'Autenticação necessária para transferências acima de R$5.000,00.')

  })
  
})