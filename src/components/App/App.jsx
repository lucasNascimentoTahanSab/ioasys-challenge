import { useState } from 'react'
import Login from '../Login/Login.jsx'
import Dashboard from '../Dashboard/Dashboard.jsx'
import User from '../../schema/User.js'
import './App.css'

/**
 * React component responsible for rendering the login page,
 * when user is not logged in, or the dashboard page, after
 * user login.
 */
function App(props) {
  const [user, setUser] = useState(new User())
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('token'))

  function setupUser(user) {
    setUser(new User(user))
    setAuthenticated(true)
  }

  function getPageToRender() {
    return authenticated
      ? <Dashboard user={user} openBookModal={props.openBookModal} />
      : <Login sendUser={setupUser.bind(this)} />
  }

  return (
    <div className="App">{getPageToRender()}</div>
  )
}

export default App
