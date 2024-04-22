describe('Usuário logado na página de dashboard', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha'))
    })

    context('Redirecionamento na página de dashboard', () => {
        it('Verifica página de redirecionamento no login com sucesso', () => {
            cy.visit('/dashboard')
            cy.url().should('eq', 'http://localhost:3000/dashboard')
        })

        it('Com o usuário logado, cadastra um especialista', () => {
            cy.visit('/dashboard')
            cy.url().should('eq', 'http://localhost:3000/dashboard')
            cy.contains('Cadastrar especialista').should('be.visible').click()


        })

    })

    context('Modal de cadastro de especialista', () => {
        it('Verifica se o checkbox "Atende por plano?" está desmarcado', () => {
            cy.visit('/dashboard')
            cy.contains('Cadastrar especialista').should('be.visible').click()
            cy.get('[type="checkbox"]').should('have.attr', 'aria-label', 'Atende por plano?').and('not.be.checked')
        })

    })

})