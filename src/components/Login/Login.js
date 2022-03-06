import { useState } from 'react'
import './Login.css'
import Logo from '../Logo/Logo'
import Input from '../Inputs/Input/Input'
import InputSubmit from '../Inputs/InputSubmit/InputSubmit'
import User from '../../schema/User'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(new User())

  function storeToken(token) {
    localStorage.setItem('token', token)
  }

  function login() {
    fetch('/login', { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify({ email: email.target.value, password: password.target.value }) })
      .then(res => res.json())
      .then(deserializedResponse => {
        setUser(new User(deserializedResponse.user))
        storeToken(deserializedResponse.token)
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