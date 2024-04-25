import React from 'react';
import './DivLoading.css';

function DivLoading() {
  return (
    <div className="DivLoading-bg">
      <div className="DivLoading">
        <h1>Carregando...</h1>
        <img src="./public/loading.gif" alt="carregando..." />
      </div>
    </div>
  );
}

export default DivLoading;
