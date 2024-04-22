describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Clica no link "Cadastra-se" e redireciona para a página de cadastro da clínica', () => {
        cy.get('[href="/cadastro"]').click();

    })

    it('Digita dados da clínica e exibe a área para inserção de dados técnicos', () => {
        cy.get('[href="/cadastro"]').click();
        cy.get('[data-test="inputNome"]').type('Catarina P');
        cy.get('[data-test="inputCNPJ"]').type('12598432');
        cy.get('[data-test="inputEmail"]').type('catarina@email.com');
        cy.get('[data-test="inputSenha"]').type('Senha123');
        cy.get('[data-test="inputSenhaVerificada"]').type('Senha123');
        cy.get('.sc-bcXHqe').click();
        cy.contains('h2', 'Agora, os dados técnicos:')

    })

    it('Cadastra uma clínica', () => {
        cy.get('[href="/cadastro"]').click();
        cy.get('[data-test="inputNome"]').type('Catarina P');
        cy.get('[data-test="inputCNPJ"]').type('12598432');
        cy.get('[data-test="inputEmail"]').type('catarina@email.com');
        cy.get('[data-test="inputSenha"]').type('Senha123');
        cy.get('[data-test="inputSenhaVerificada"]').type('Senha123');

        cy.get('.sc-bcXHqe').click()

        cy.get('[data-test="inputTelefone"]').type('9999999999');
        cy.get('[data-test="inputCEP"]').type('99999999');
        cy.get('[data-test="inputRua"]').type('Salvatori');
        cy.get('[data-test="inputNumero"]').type('999');
        cy.get('[data-test="inputComplemento"]').type('Irmãos salvatori');
        cy.get('[data-test="inputEstado"]').type('BA');

        cy.contains('Cadastrar').click()

    })

})
