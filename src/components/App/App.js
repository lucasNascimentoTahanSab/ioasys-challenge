import { useState } from 'react'
import './App.css'
import Login from '../Login/Login'
import Dashboard from '../Dashboard/Dashboard'
import User from '../../schema/User'

function App() {
  const [user, setUser] = useState(new User())
  const [authenticated, setAuthenticated] = useState(false)

  function setupUser(user) {
    setUser(new User(user))
    setAuthenticated(true)
  }

  return (
    <div className="App">
      {authenticated ? <Dashboard user={user} /> : <Login sendUser={setupUser.bind(this)} />}
    </div>
  )
}

export default App
