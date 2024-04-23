/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    },
    projectId: "8gi3z6", //Insira a projectId pela fornecida no seu Cypress Cloud
    defaultCommandTimeout: 60000,
    env:{
      "email": "clinica@gmail.com",
      "senha": "4321",
      "api_login": "http://localhost:8080/auth/login",
      "api_clinica": "http://localhost:8080/clinica",
      "api_especialista": "http://localhost:8080/especialista",
      "requestMode": true
    }

  },

});
