describe('testes em API', () => {
    context('Testes em rotas com usuário autorizado', () => {
        beforeEach(() => {
            cy.visit('/login')
            cy.loginApi(Cypress.env('email'), Cypress.env('senha'))

        })
        it('GET via url front para teste em resposta da home', () => {
            cy.request('GET', '/', { email: "clinica@gmail.com", senha: 4321 

            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })

        it('Deve verificar se o token de autenticação é retornado após login via POST na API', () => {
            cy.get('@token').should('exist');
        })
    });

    context('Validações em respostas da API', ()=>{
        beforeEach(() =>{
            cy.loginApi(Cypress.env('email'), Cypress.env('senha'))
        })

        it('Requisição incorreta em criação de especialista', ()=>{
            cy.request({
                method: 'POST',
                url: Cypress.env('api_clinica'),
                body: {
                    nome: 'Camila',
                    email: 'camila123@exemplo',
                },
            failOnStatusCode: false
            
            }).then((response)=>{
                expect(response.status).to.eq(500)
                expect(response.body).to.have.property('message')
            })

        })

    })

})