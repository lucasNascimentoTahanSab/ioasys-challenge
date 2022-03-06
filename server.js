const express = require('express')
const axios = require('axios')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => res.send('I\'m here!'))

server.post('/login', (req, res) => {
  axios.post('https://books.ioasys.com.br/api/v1/auth/sign-in', req.body)
    .then(user => res.send({ user: user.data, token: generateToken({ id: user.data.id }) }))
    .catch(error => res.send(error))
})

function generateToken(config = {}) {
  return jwt.sign(config, process.env.JWT_SECRET, { expiresIn: 1.8e6 })
}

server.listen(5000)