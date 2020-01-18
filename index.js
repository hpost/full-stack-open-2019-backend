const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const persons = [
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

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

const port = 3001
app.listen(port)
console.log(`Listening on port ${port}`)
