/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {GoMail} from 'react-icons/go'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ticianne Dias | Front-End Dev.</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre Mim</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Cursos</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#testimonial">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ticianne-dias-a7a66b134/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/TicianneDias" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="mailto:ticidias@gmail.com"><GoMail/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Feito por Ticianne Dias utilizando React.js</small>
      </div>
    </footer>
  )
}

export default Footer