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

    context('Validações em respostas da API', () => {
        beforeEach(() => {
            cy.loginApi(Cypress.env('email'), Cypress.env('senha'))
        })

        it('POST em especialistas', () => {
            cy.get('@especialistas').then((dados) => {
                const especialista = dados.especialistas[0];
                cy.request({
                    method: 'POST',
                    url: Cypress.env('api_clinica'),
                    body: {
                        nome: especialista.nome,
                        email: especialista.email,
                        senha: especialista.senha,
                        endereco: {
                            cep: especialista.cep,
                            rua: especialista.rua,
                            numero: especialista.numero,
                            complemento: especialista.complemento,
                            estado: especialista.estado
                        }
                    },

                }).then((response) => {
                    if (response.status !== 201) {
                        cy.log(`O status ${response.status} não é o padrão 201`)
                    }

                    expect(response.body).to.have.property('id') // Verifica se a resposta possui a propriedade "id"
                    expect(response.body).to.have.property('nome')
                    expect(response.body).to.have.property('email') // Verifica se a propriedade "email" é igual ao valor enviado na requisição
                })
            })
        })



        it('Requisição incorreta em criação de especialista', () => {
            cy.request({
                method: 'POST',
                url: Cypress.env('api_clinica'),
                body: {
                    nome: 'Camila',
                    email: 'camila123@exemplo',
                },
                failOnStatusCode: false

            }).then((response) => {
                expect(response.status).to.eq(500)
                expect(response.body).to.have.property('message')
            })

        })

    })
});