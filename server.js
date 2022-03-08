const path = require('path')
const express = require('express')
const ioasysRouter = require('./src/routes/ioasysRouter')

const server = express()
const port = process.env.PORT || 5000
const dev = server.get('env') !== 'production'

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/', ioasysRouter)

if (!dev) {
  server.use(express.static(path.resolve(__dirname, 'build')))
  server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')))
}

server.listen(port, err => {
  if (err) throw err

  console.log('Server running.')
})