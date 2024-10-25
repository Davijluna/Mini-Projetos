import React from 'react'
import './index.css'
import Carrinho from './img/Captura de tela de 2024-05-01 23-33-31.png'

import styled from 'styled-components'


const Button = styled.button`
text-align: center;
color: blue`

const Header = () => {
  return (
    <header className='headerTop'>
      <div className='logToStok'>
      <p className='title'><h1>MKS</h1> <h2>Sistemas</h2></p>

    <div>
    <Button> Comprar</Button>
      <button className='botao' type='button'><img src={Carrinho} alt='Carrinho de compras'/> 1</button>


      </div>
    </div>

    </header>
  )
}

export default Header
