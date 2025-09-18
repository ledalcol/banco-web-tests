//Verificação de mensagens
Cypress.Commands.add('verificarMensagemNoToast', mensagem => {
    cy.get('.toast').should('have.text', mensagem)
})

//Seleção de contas 
Cypress.Commands.add('selecionarOpcaoNaCombobox', (labelDoCampo, opcao) => {
    cy.get(`label[for="${labelDoCampo}"]`).parent().as(`campo-${labelDoCampo}`)
    cy.get(`@campo-${labelDoCampo}`).click()
    cy.get(`@campo-${labelDoCampo}`).contains(opcao).click()
})
    