import { useState } from 'react'
import Logo from '../Logo/Logo.jsx'
import Input from '../Input/Input.jsx'
import PopUp from '../PopUp/PopUp.jsx'
import InputSubmit from '../InputSubmit/InputSubmit.jsx'
import utils from '../../utils/utils.js'
import './Login.css'

/**
 * React component responsible for rendering the login page,
 * treating user email and password received in its inputs,
 * sending login request to the Ioasys API and retrieving 
 * user data and token.
 */
function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)

  function sendUser(user) {
    if (user?.name === 'Error') return setShowError(true)
    if (typeof props.sendUser === 'function') props.sendUser(user)
  }

  function login() {
    fetch('/auth/sign-in', utils.getInitForPostRequests({ email: email.target?.value, password: password.target?.value }))
      .then(res => res.json())
      .then(user => sendUser(user))
      .catch(error => { throw new Error(error) })
  }

  return (
    <main className="Login">
      <Logo />
      <div className="Login__form">
        <Input id="email" label="Email" onChange={setEmail.bind(this)} />
        <InputSubmit
          id="password"
          label="Senha"
          type="password"
          buttonLabel="Entrar"
          onChange={setPassword.bind(this)}
          onSubmit={login.bind(this)} />
        <PopUp show={showError} message="Email e/ou senha incorretos." />
      </div>
    </main>
  )
}

export default Login