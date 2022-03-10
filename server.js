require('dotenv/config')
const path = require('path')
const express = require('express')
const session = require('express-session')
const ioasysRouter = require('./src/routes/ioasysRouter')

const server = express()
const port = process.env.PORT || 5000

/**
 * Here I'm using the express-session native MemoryStorage
 * that is subjected to memory leak, but, given the time,
 * I mantained it in production environment.
 */
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

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.resolve(__dirname, 'build')))
  server.get('*', (req, res) => res.send(path.resolve(__dirname, 'build', 'index.html')))
}

server.listen(port, err => {
  if (err) throw err

  console.log('Server running...')
})