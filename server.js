const express = require('express')
const ioasysRouter = require('./src/routes/ioasysRouter')

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/', ioasysRouter)

server.listen(5000)