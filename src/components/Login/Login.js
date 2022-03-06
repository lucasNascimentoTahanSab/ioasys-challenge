import './Login.css'
import Logo from '../Logo/Logo'
import Input from '../Inputs/Input/Input'
import InputSubmit from '../Inputs/InputSubmit/InputSubmit'

function Login() {
  return (
    <div className="Login">
      <Logo />
      <form className="Login__form" action="https://books.ioasys.com.br/api/v1/auth/sign-in" method="post">
        <Input id="email" label="Email" />
        <InputSubmit id="password" label="Senha" type="password" buttonLabel="Entrar" />
      </form>
    </div>
  )
}

export default Login