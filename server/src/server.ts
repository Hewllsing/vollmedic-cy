/* eslint-disable @typescript-eslint/no-misused-promises */
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import 'reflect-metadata'
import rotaAuth from './auth/authRoutes.js'
import rotaAvaliacoes from './avaliacoes/avaliacoesRoutes.js'
import rotaClinica from './clinicas/clinicaRoutes.js'
import rotaConsulta from './consultas/consultaRoutes.js'
import { AppDataSource } from './data-source.js'
import rotaEspecialista from './especialistas/especialistaRoutes.js'
import rotaPaciente from './pacientes/pacienteRoutes.js'
import rotaPlanoDeSaude from './planosDeSaude/planosDeSaudeRoutes.js'
import errorMiddleware from './error/errorMiddleware.js'

dotenv.config({ path: '.env' })

const app = express()

const PORT = 8080
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
    'PUT',
    'DELETE'
  ],

  allowedHeaders: [
    'Content-Type', 'Authorization', 'Accept'
  ],

}

app.use(cors(corsOpts))

app.use(express.json())

AppDataSource.initialize()
  .then(() => {
    console.log('App Data Source inicializado')
  })
  .catch((error) => {
    console.error(error)
  })

// Rota inicial de GET
app.get('/', (req, res) => {
  res.status(200).send('Vollmed Servidor está rodando!')
})

app.get('/favicon.ico', (req, res) => {
  res.status(200).send(`<h1>favicon</h1>`)
})

rotaPaciente(app)
rotaEspecialista(app)
rotaAvaliacoes(app)
rotaClinica(app)
rotaConsulta(app)
rotaPlanoDeSaude(app)
rotaAuth(app)
app.use(errorMiddleware)

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
app.listen(PORT, () => { console.log(`server running on port ${PORT}`) }
)

export default app