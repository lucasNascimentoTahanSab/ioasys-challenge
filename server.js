const express = require('express')
const axios = require('axios')
const session = require('express-session')
require('dotenv').config()

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }))

server.get('/', (req, res) => res.send('I\'m here!'))

server.post('/login', (req, res) => {
  axios.post('https://books.ioasys.com.br/api/v1/auth/sign-in', req.body)
    .then(user => res.send({ user: user.data, token: user.headers.authorization }))
    .catch(error => res.send(error))
})

server.get('/dashboard', (req, res) => {
  const options = {
    headers: { 'Authorization': req.headers.authorization },
    params: { page: req.query.page, amount: req.query.amount }
  }

  axios.get(`https://books.ioasys.com.br/api/v1/books`, options)
    .then(books => res.send(books.data))
    .catch(error => res.send(error))
})

server.listen(5000)