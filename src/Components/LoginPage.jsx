import React from 'react'
import { useState } from 'react'

const LoginPage = () => {

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLogin("");
    setSenha("");
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label> 
              <span>Login: </span>
              <input type='text' name='login' placeholder='Digite seu login aqui' onChange={(e) => setLogin(e.target.value)}></input>
            </label>
          </div>
          <label>
            <span>Senha: </span>
            <input type='password' name='senha' placeholder='Digite sua senha aqui'  onChange={(e) => setSenha(e.target.value)} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default LoginPage