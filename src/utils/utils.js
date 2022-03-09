/**
 * Exports constant containing useful functionalities for other
 * modules and components.
 */
const utils = {
  getInitForPostRequests(body) {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: body.email, password: body.password })
    }
  },
  getInitForGetRequests() {
    return {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    }
  },
  storeToken(token) {
    localStorage.setItem('token', token)
  },
  storeUser(user) {
    const userSerialized = JSON.stringify(user)

    localStorage.setItem('user', userSerialized)
  },
  deleteToken() {
    localStorage.removeItem('token')
  },
  deleteUser() {
    localStorage.removeItem('user')
  },
  getToken() {
    return localStorage.getItem('token')
  },
  getUser() {
    const user = localStorage.getItem('user')

    return user ? JSON.parse(user) : null
  }
}

export default utils