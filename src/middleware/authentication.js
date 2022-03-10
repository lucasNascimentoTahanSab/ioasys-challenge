const axios = require("axios")

/**
 * Middleware responsible for retrieving new token and refresh token before any
 * requests to the Ioasys API, guaranteeing the correct fullfilment of the header
 * "Authorization" for it. If the user has not a valid refresh token, he will be
 * automatically signed out.
 */
function refresh(req, res, next) {
  if (!req.session.refresh) return res.redirect('/sign-out')

  axios.post('https://books.ioasys.com.br/api/v1/auth/refresh-token', getRefreshTokenFromRequest(req))
    .then(apiRes => {
      req.headers.authorization = `Bearer ${apiRes.headers.authorization}`
      req.session.authorization = apiRes.headers.authorization
      req.session.refresh = apiRes.headers['refresh-token']
      req.session.save()

      next()
    })
    .catch(() => res.redirect('/sign-out'))
}

function getRefreshTokenFromRequest(req) {
  return { refreshToken: req.session.refresh }
}

module.exports = { refresh }