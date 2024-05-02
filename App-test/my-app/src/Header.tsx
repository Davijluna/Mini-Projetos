import React from 'react'
import './index.css'
import Carrinho from './img/Captura de tela de 2024-05-01 23-33-31.png'

import styled from 'styled-components'


const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #BF4F74;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Header = () => {
  return (
    <header className='headerTop'>
      <div className='logToStok'>
      <p className='title'><h1>MKS</h1> <h2>Sistemas</h2></p>

    <div>
      <Wrapper>
        <Title>
          Hello world!
        </Title>
      </Wrapper>
      <button className='botao' type='button'><img src={Carrinho} alt='Carrinho de compras'/> 1</button>


      </div>
    </div>

    </header>
  )
}

export default Header
