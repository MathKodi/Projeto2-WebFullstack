import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="superinfo-bg">
        <div className="superinfo">
          <p>Trabalho FullStack - UTFPR</p>
          <p>Alunos: Matheus Kodi Y. | Leandro Henrique Oliveira Neves </p>
        </div>
      </div>
      <header className="menu-bg">
        <div className="menu">
          <h1>API Zelda</h1>
          <h2>
            An API serving data on all in-game items and regions in Breath of
            the Wild and Tears of the Kingdom.
          </h2>
          <h6>
            Digite um número entre 1 e 389 ou um nome de uma entidade existente
          </h6>
        </div>
      </header>
    </div>
  );
};

export default Header;
