import express, { Router } from 'express'

const app = express()
const router = Router()

// Configurando o Express
app.use(express.json()) // Configurando para receber JSON
app.use(router)

type Pessoa = {
  nome: string
  email: string
}

const listPessoas: Pessoa[] = []

// GET, POST, PUT, DELETE, PATCH
router.get('/', (request, response) =>
  response.json({ ola: 'Ola mundo', nome: 'Glêsio' }))

router.post('/formulario', (request, response) => {
  // nome, email
  // const { nome, email } = request.body
  listPessoas.push({ nome: request.body.nome, email: request.body.email })
  return response.status(201).json({})
})

router.get('/carregar', (request, response) => {
  // Lista de pessoas
  listPessoas.push({ nome: 'Lucas Gabriel', email: 'lucagab@gmail.com' })
  listPessoas.push({ nome: 'Pedro Álvares', email: 'pedrin@gmail.com' })
  listPessoas.push({ nome: 'Camile Bohr', email: 'bohrmile@gmail.com' })

  return response.json({ listPessoas })
})

app.listen(3000, () => { console.log('Running port 3000') })
