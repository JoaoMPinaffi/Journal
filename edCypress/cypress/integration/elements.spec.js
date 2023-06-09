/// <reference types="cypress" />


describe('work with basic elements', () => {
    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() =>{
        cy.reload()
    })

    it('Text', () =>{
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

    })

    it("textFilds",  ()=> {
        cy.get('#formNome').type('Cypress test')
        cy.get('#formNome').should('have.value', 'Cypress test')

        cy.get('#elementosForm\\:sugestoes')
        .type('textArea')
        .should('have.value', 'textArea')

    })

    it('radioButton', () => {
        cy.get('#formSexoFem')
        .click()
        .should('be.checked')
        
        cy.get('#formSexoMasc')
        .should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length',2)

    })

    it('checkBox', () => {
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')

        cy.get('[name=formComidaFavorita]')
        .click({multiple: true})

        cy.get('#formComidaPizza')
        .should('be.not.checked')

        cy.get('#formComidaCarne')
        .should('be.checked')

    })

    it('comboBox', () =>{
        cy.get('[data-test=dataEscolaridade]')
        .select('2o grau completo')
        .should('have.value', '2graucomp')

        cy.get('[data-test=dataEscolaridade]')
        .select('2graucomp')
        .should('have.value', '2graucomp')
    })
        
})