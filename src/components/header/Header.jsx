import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá! Eu sou</h5>
        <h1>Ticianne Dias</h1>
        <h4 className="text-light">Front-End Dev.</h4>
        <CTA />
        <HeaderSocials />

        <figure className="me">
          <img src={ME} alt="me" />
        </figure>

        <a href="#contact" className='scroll__down'>Deslize para baixo</a>
      </div>
    </header>
  )
}

export default Header