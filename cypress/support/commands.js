Cypress.Commands.add('preencher_formulario', function(){
    cy.get('[data-testid="terms-consent"]').should('be.visible').click()
    cy.get('[data-testid="link-cliente-rh"] > .lojavr-style-c-fHHJCv > img').should('be.visible').click()
    cy.get('#btn-selecionar-modalidade-avulso').should('be.visible').click()
    cy.get(':nth-child(4) > :nth-child(2) > .input-styled__input-holder > .plus-button').should('be.visible').click()
    cy.get('#produto-auto-valor').should('be.visible').focus().type('15000')
})
Cypress.Commands.add('validar_carrinho', function(){
    cy.get('#btn-adicionar-carrinho-auto').should('be.visible').click()
    cy.get('#btn-meu-carrinho > .fa-light').should('be.visible').click()
    cy.get('[data-testid="btn-modal-carrinho-seguir-compra"]').should('be.visible').click()
})
Cypress.Commands.add('validar_proposta', function(){
    cy.get('.content > h2').should('be.visible').should("have.text", "Criando sua proposta")
    cy.get('.content > .lojavr-style-c-kFqMqW > .input-styled__input-holder > .input-styled__input > fieldset > input').should('be.visible').focus().type('50.591.354/0001-26')
    cy.get('.information-box > p').should('be.visible').should("have.text", "Você é novo por aqui, seja bem-vindo! Conte um pouco mais de você para ver a proposta que simulamos para sua empresa:")  
})
