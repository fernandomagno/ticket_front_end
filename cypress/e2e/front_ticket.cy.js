/// <reference types="Cypress" />

describe('Ticket VR', function() {
    beforeEach(function(){
        cy.visit('https://loja.vr.com.br/')
    })

    it('Validar proposta Ticket VR', function() {    
        cy.preencher_formulario()
        cy.validar_carrinho()
        cy.validar_proposta()        
    })
})