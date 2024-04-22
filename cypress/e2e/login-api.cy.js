describe('Testes em API', () => {
    //caminho feliz
    context('Testes em rotas com usuário autorizado', () => {
        beforeEach(() => {
            cy.loginApi(Cypress.env('email'), Cypress.env('senha'))
        })


        it('GET via url front para teste em resposta da home', () => {
            cy.request("GET", "/").should((response) => {
                expect(response.status).to.eq(200);
            });
        });

        it('Deve verificar se o token de autenticação é retornado após login via POST na API', () => {
            cy.get('@token').should('exist');
        })

        it('Deve verificar se o usuário está autenticado corretamente via POST na API', () => {
            // Verificar se a autenticação está presente no localStorage
            cy.get('@token').then(token => {
                expect(token).to.exist;
            });
        });

    });
});