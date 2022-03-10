/**
 * Exports constant containing useful functionalities for other
 * modules and components.
 */
const utils = {
  getInitForPostRequests(body) {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ email: body.email, password: body.password })
    }
  },
  getInitForGetRequests() {
    return { method: 'GET' }
  }
}

export default utils