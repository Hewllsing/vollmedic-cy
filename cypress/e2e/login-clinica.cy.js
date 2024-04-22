describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('')
        cy.contains('Entrar').click()
    })
    it('Digita email e senha corretos para efetuar o login', () => {
        cy.login(Cypress.env('email'), Cypress.env('senha'))

    })
})