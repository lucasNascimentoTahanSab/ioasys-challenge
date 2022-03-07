/**
 * Exports express router for ioasys API consumption, serving
 * as a middleware to the app root requisitions.
 */
const express = require('express')
const axios = require('axios')

const ioasysRouter = express.Router()

/**
 * Consumption of the login API, passing user email and password
 * as body, and retrieving user data and authorization tokans as
 * response. 
 */
ioasysRouter.post('/auth/sign-in', (req, res) => {
  axios.post('https://books.ioasys.com.br/api/v1/auth/sign-in', req.body)
    .then(user => res.send({ user: user.data, token: user.headers.authorization }))
    .catch(error => res.send(error))
})

/**
 * Consumption of the books API, passing the current page number
 * and records by page as parameters, and retrieving the books as
 * response.
 */
ioasysRouter.get('/books', (req, res) => {
  axios.get(`https://books.ioasys.com.br/api/v1/books`, getBookOptionsFromRequest(req))
    .then(books => res.send(books.data))
    .catch(error => res.send(error))
})

function getBookOptionsFromRequest(req) {
  return {
    headers: { 'Authorization': req.headers.authorization },
    params: { page: req.query.page, amount: req.query.amount }
  }
}

module.exports = ioasysRouter