import React from 'react';
import './Header.css';

const Header = ({loggoutHandle}) => {
  return (
    <div>
      <div className="superinfo-bg">
        <div className="superinfo">
          <p>Trabalho FullStack - UTFPR</p>
          <p>Alunos: Matheus Kodi Y. | Leandro Henrique Oliveira Neves </p>
          <button className="newBtn" id='newBtn' onClick={loggoutHandle}> Loggout</button>
        </div>
      </div>
      <header className="menu-bg">
        <div className="menu">
          <h1>API Zelda</h1>
          <h2>
            An API serving data on all in-game items and regions in Breath of
            the Wild and Tears of the Kingdom.
          </h2>
        </div>
      </header>
    </div>
  );
};

export default Header;
