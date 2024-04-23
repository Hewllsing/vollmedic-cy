import { fakerPT_BR as faker } from '@faker-js/faker';
describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    context('Testes na página de cadastro', () => {
        it('Clica no link "Cadastra-se" e redireciona para a página de cadastro da clínica', () => {
            cy.get('[href="/cadastro"]').click();
            cy.location('pathname').should('equal', '/cadastro')

        })
    })

    context('Primeira parte da sessão de cadastro', () => {

        it('Digita dados da clínica e exibe a área para inserção de dados técnicos', () => {
            cy.get('[href="/cadastro"]').click();
            cy.get('[data-test="inputNome"]').type('Catarina P');
            cy.get('[data-test="inputCNPJ"]').type('12598432');
            cy.get('[data-test="inputEmail"]').type('catarina@email.com');
            cy.get('[data-test="inputSenha"]').type('Senha123');
            cy.get('[data-test="inputSenhaVerificada"]').type('Senha123');
            cy.get('.sc-bcXHqe').click();
            cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible');
            cy.get('.sc-laZRCg').should('exist').should('be.visible');

        })
    })


    context('Sessão de cadastro completa', () => {
        const senha = faker.internet.password({ length: 8, memorable: true })
        it('Cadastra uma clínica', () => {
            cy.get('[href="/cadastro"]').click();
            cy.get('[data-test="inputNome"]').type(faker.internet.userName());
            cy.get('[data-test="inputCNPJ"]').type(faker.string.numeric(14));
            cy.get('[data-test="inputEmail"]').type(faker.internet.email());
            cy.get('[data-test="inputSenha"]').type(senha);
            cy.get('[data-test="inputSenhaVerificada"]').type(senha);
            cy.get('.sc-bcXHqe').click()
            cy.get('[data-test="inputTelefone"]').type(faker.phone.number());
            cy.get('[data-test="inputCEP"]').type(faker.location.zipCode());
            cy.get('[data-test="inputRua"]').type(faker.location.street());
            cy.get('[data-test="inputNumero"]').type(faker.location.buildingNumber());
            cy.get('[data-test="inputComplemento"]').type(faker.location.secondaryAddress());
            cy.get('[data-test="inputEstado"]').type(faker.location.state({ abbreviated: true }));
            cy.contains('Cadastrar').click()
            cy.location('pathname').should('equal', '/login')

        })


    })

})
