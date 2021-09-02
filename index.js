require('dotenv').config()

const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const server = express()

server.use(express.json())
server.use(cors())

server.get('/api/users', (req, res) => {
  res.send([(id = Date.now()), (name = 'danny')])
})

server.post('/api/register', (req, res) => {
  req.users = { user: Lambda, password: school }
  res.json(req.users)
})

server.post('/api/login', (req, res) => {
  res.status(200).json({ message: 'Welcome Danny' })
})
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
})
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
