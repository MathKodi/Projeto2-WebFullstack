import React from 'react';
import { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ changePage, tokenHandle }) => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (login.trim() === '' || senha.trim() === '') {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    const logging = {
      login: login,
      senha: senha,
    };

    try {
      const response = await fetch('https://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logging),
      });
      if (response.ok) {
        const data = await response.json();
        tokenHandle(data.token);
        changePage(true);
      } else {
        const errors = await response.json();
        setErrorMessage(
          errors.message || 'Erro ao fazer login. Verifique suas credenciais.',
        );
      }
    } catch (error) {
      setErrorMessage('deu ruim )');
      console.log(error);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-page">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="login">
                <span>Login:</span>
                <input
                  type="text"
                  id="login"
                  name="login"
                  placeholder="Digite seu login aqui"
                  onChange={(e) => setLogin(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="senha">
                <span>Senha:</span>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Digite sua senha aqui"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </label>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <input type="submit" value="Enviar" className="submit-button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
