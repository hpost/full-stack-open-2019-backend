const express = require('express')
const app = express()
const bodyParser = require('body-parser')

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  }
]

app.use(bodyParser.json())

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:', request.path)
  console.log('Body:', request.body)
  console.log('---')
  next()
}
app.use(requestLogger)

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)

  const person = persons.find(person => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

const generateId = () => {
  return Math.floor(Math.random() * 100000)
}

app.post('/api/persons', (req, res) => {
  const body = req.body
  console.log('adding:', body)

  const hasName = body.name !== null
  const hasNumber = body.number !== null
  const isUnique = !persons.some(person => person.name === body.name)
  console.log('isUnique:', isUnique)
  if (!hasName || !hasNumber || !isUnique) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }
  person.id = generateId()
  persons = persons.concat(person)
  res.status(201).json(person)
})

app.get('/info', (req, res) => {
  res.send(
    `
    <p>
       Phonebook has info for ${persons.length} people
    </p>
    <p>
      ${(new Date()).toString()}
    </p>
    `
  )
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const port = 3001
app.listen(port)
console.log(`Listening on port ${port}`)
