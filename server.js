const express = require('express')
const ioasysRouter = require('./src/routes/ioasysRouter')

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/', ioasysRouter)

server.listen(port, err => {
  if (err) throw err

  console.log('Server running.')
})