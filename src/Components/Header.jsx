import React from 'react'
import InputButton from './InputButton'
import './Header.css'

const Header = () => {
  return (
    <div>
        <div class="superinfo-bg">
            <div class="superinfo">
                <p>Trabalho FullStack - UTFPR</p>
                <p>Alunos: Matheus Kodi Y. | Leandro Henrique Oliveira Neves </p>
            </div>
        </div>
        <header class="menu-bg">
            <div class="menu">
                <h1>API Zelda</h1>
                <h2>An API serving data on all in-game items and regions in Breath of the Wild and Tears of the Kingdom.</h2>
            </div>
        </header>
        <InputButton></InputButton>
    </div>
  )
}

export default Header