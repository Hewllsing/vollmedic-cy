describe('Teste de requisição da API para listar clínicas', () => {
    it('Deve retornar uma lista de clínicas', () => {
        // Faz uma requisição GET para a rota que lista as clínicas
        cy.request('GET', Cypress.env('api_clinica'))
            .then((response) => {
                // Verifica se a resposta possui o status 200 (OK)
                expect(response.status).to.eq(200);

                // Verifica se o corpo da resposta é um array
                expect(response.body).to.be.an('array');

                // Verifica se o corpo da resposta contém dados de clínicas
                expect(response.body.length).to.be.greaterThan(0);

                // Aqui você pode adicionar mais verificações conforme necessário
            });
    });
});

describe('Teste de logout no frontend', () => {
    it('Deve desautenticar o usuário após o logout', () => {
        cy.login(Cypress.env('email'), Cypress.env('senha'))
        // Visita a página onde está o botão de logout
        cy.visit('/dashboard');

        // Executa a ação de logout, como clicar em um botão
        cy.get('.sc-fLcnxK').click(); // Substitua com o seletor do botão de logout real

        // Verifica se o usuário foi desautenticado
        cy.window().its('localStorage.authToken').should('not.exist'); // Verifica se o token de autenticação foi removido do localStorage

        // Verifica se o usuário foi redirecionado para a página de login (opcional)
        cy.url().should('include', '/'); // Verifica se a URL contém a página de login

        // Adicione mais verificações conforme necessário, como a exibição de mensagens de sucesso, etc.
    });
});

