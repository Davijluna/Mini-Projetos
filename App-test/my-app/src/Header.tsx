import React from 'react'
import './index.css'
import Carrinho from './img/Captura de tela de 2024-05-01 23-33-31.png'

const Header = () => {
  return (
    <header className='headerTop'>
      <div className='logToStok'>
      <p><h1>MKS</h1> <h2>Sistemas</h2></p>

      <button type='button'><img src={Carrinho} alt='Carrinho de compras'/> 1</button>
      </div>
    </header>
  )
}

export default Header
