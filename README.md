# Banco Web Tests

## Objetivo

Este projeto tem como objetivo automatizar testes end-to-end da aplicação **Banco Web** utilizando Cypress e JavaScript. Os testes garantem a qualidade das funcionalidades principais do sistema bancário, como login e transferências, além de gerar relatórios detalhados das execuções.

## Componentes do Projeto

- **Cypress**: Framework de automação de testes.
- **Custom Commands**: Comandos personalizados para facilitar e organizar a automação.
- **cypress-mochawesome-reporter**: Geração de relatórios em HTML das execuções dos testes.
- **Estrutura de pastas**:
  - `cypress/e2e/`: Testes automatizados.
  - `cypress/fixtures/`: Dados mockados para os testes.
  - `cypress/support/commands/`: Implementação dos Custom Commands.
  - `cypress/reports/`: Relatórios gerados.
  - `cypress/screenshots/` e `cypress/videos/`: Evidências das execuções.

## Pré-requisitos

- Node.js instalado.
- Clonar e executar as aplicações:
  - [banco-api](https://github.com/juliodelimas/banco-api)
  - [banco-web](https://github.com/juliodelimas/banco-web)

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/ledalcol/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

## Execução dos Testes

- Para rodar todos os testes em modo headless:
  ```sh
  npm test
  ```
- Para abrir o Cypress em modo interativo:
  ```sh
  npm run cy:open
  ```
- Para rodar os testes com interface (headed):
  ```sh
  npm run cy:headed
  ```

Os relatórios em HTML serão gerados em `cypress/reports/html/index.html`.

## Testes Automatizados

- **Login**: Testa login com credenciais válidas e inválidas.
- **Transferências**: Testa transferências entre contas, incluindo validações de valor e autenticação.

Os testes estão em:
- [`cypress/e2e/login.cy.js`](cypress/e2e/login.cy.js)
- [`cypress/e2e/transferencia.cy.js`](cypress/e2e/transferencia.cy.js)

## Custom Commands

Os comandos personalizados estão implementados em [`cypress/support/commands/`](cypress/support/commands/):

- [`fazerLoginComCredenciaisValidas`](cypress/support/commands/login.js): Realiza login com dados válidos do fixture.
- [`fazerLoginComCredenciaisInvalidas`](cypress/support/commands/login.js): Realiza login com dados inválidos.
- [`verificarMensagemNoToast`](cypress/support/commands/common.js): Valida mensagens exibidas em toast.
- [`selecionarOpcaoNaCombobox`](cypress/support/commands/common.js): Seleciona opções em campos combobox.
- [`realizarTransferencia`](cypress/support/commands/transferencias.js): Realiza transferência entre contas e valida mensagem de retorno.

## Dados de Teste

Os dados de login estão em [`cypress/fixtures/credenciais.json`](cypress/fixtures/credenciais.json).

---

Para dúvidas ou sugestões, abra uma issue no [GitHub](https://github.com/ledalcol/banco-web-tests/issues).