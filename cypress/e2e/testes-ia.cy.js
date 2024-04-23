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
  