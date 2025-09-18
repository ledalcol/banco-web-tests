//Tranferência de valores 
Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor, mensagem) => {
    cy.selecionarOpcaoNaCombobox('conta-origem',contaOrigem)
    cy.selecionarOpcaoNaCombobox('conta-destino',contaDestino)  
    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()
    cy.verificarMensagemNoToast(mensagem)
})

