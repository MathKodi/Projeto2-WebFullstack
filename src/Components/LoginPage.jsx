import React from 'react'
import { useState } from 'react'

const LoginPage = ({changePage, tokenHandle}) => {

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (event) => {
    console.log(login)
    event.preventDefault();

    const logging = {
      login: login,
      senha: senha
    }

    try{
      const response =  await fetch('http://localhost:3000/login' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logging)
      })
      if(response.ok) {
        const data =  await response.json();
        console.log("Login bem sucedido:", data.token)
        tokenHandle(data.token)
        changePage(true)
      } else{
        const errors = await response.json()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label> 
              <span>Login: </span>
              <input type='text' name='login' placeholder='Digite seu login aqui' onChange={(e) => setLogin(e.target.value) }></input>
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