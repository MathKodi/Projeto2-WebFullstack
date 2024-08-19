import React, { useState } from 'react';
import LoggedPage from './Components/LoggedPage';
import LoginPage from './Components/LoginPage';

function App() {

  const [page, setPage] = useState(null)
  const [token, setToken] = useState(() => localStorage.getItem('token') || '')

  const changePage = (variable) => {
    setPage(variable);
  }

  const tokenHandle = (token) => {
    setToken(token)
    localStorage.setItem('token', token)
  }

  const checkToken = async () => {
    try{
      const response = await fetch('http://localhost:3000/logged', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({login: '', senha: ''})
      })
      //console.log(response)
      if(response.ok) {
        console.log("response ok")
        setPage(true);
      }
    } catch (error){
      console.log(error)
    }
  }
  
  checkToken()

  return (
    <>
      {!page && <LoginPage changePage={changePage} tokenHandle={tokenHandle}></LoginPage>}
      {page && <LoggedPage changePage={changePage}></LoggedPage>}
    </>
  );
}

export default App;
