require('dotenv/config')
const express = require('express')
const session = require('express-session')
const ioasysRouter = require('./src/routes/ioasysRouter')

const server = express()
const port = process.env.PORT || 5000
const sessionInstance = session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: { secure: false }
})

server.use(sessionInstance)
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/', ioasysRouter)

server.listen(port, err => {
  if (err) throw err

  console.log('Server running...')
})