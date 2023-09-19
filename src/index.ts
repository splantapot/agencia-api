import express, { Router } from 'express'

const app = express()
const router = Router()

// Configurando o Express
app.use(express.json()) // Configurando para receber JSON
app.use(router)

router.get('/', (request, response) =>
  response.json({ ola: 'Ola mundo', nome: 'Glêsio' }))

app.listen(3000, () => { console.log('Running port 3000') })
