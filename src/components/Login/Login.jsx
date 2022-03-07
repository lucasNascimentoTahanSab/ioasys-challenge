import { useState } from 'react'
import Logo from '../Logo/Logo.jsx'
import Input from '../Inputs/Input/Input.jsx'
import InputSubmit from '../Inputs/InputSubmit/InputSubmit.jsx'
import utils from '../../utils/utils.js'
import './Login.css'

/**
 * React component responsible for rendering the login page,
 * treating user email and password received in its inputs,
 * senting login request to the Ioasys API and retrieving 
 * user data and token.
 */
function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function storeToken(token) {
    localStorage.setItem('token', token)
  }

  function sendUser(user) {
    if (typeof props.sendUser === 'function') props.sendUser(user)
  }

  function login() {
    fetch('/auth/sign-in', utils.getInitForPostRequests({ email: email.target.value, password: password.target.value }))
      .then(res => res.json())
      .then(deserializedResponse => {
        storeToken(deserializedResponse.token)
        sendUser(deserializedResponse.user)
      })
      .catch(error => { throw new Error(error) })
  }

  return (
    <div className="Login">
      <Logo />
      <div className="Login__form">
        <Input id="email" label="Email" onChange={setEmail.bind(this)} />
        <InputSubmit id="password" label="Senha" type="password" buttonLabel="Entrar" onChange={setPassword.bind(this)} onSubmit={login.bind(this)} />
      </div>
    </div>
  )
}

export default Login