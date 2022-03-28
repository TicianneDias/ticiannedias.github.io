import React from 'react'
import './about.css'
import ME from '../../assets/emoji.png'
import {RiAwardLine} from 'react-icons/ri'
import {HiOutlineUsers} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Saiba Mais</h5>
      <h2>Sobre Mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <figure className="about__me-image">
            <img src={ME} alt="me in draw" />
          </figure>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardLine className='about__icon'/>
              <h5>Experiência</h5>
              <small>6+ meses</small>
            </article>
            <article className='about__card'>
              <HiOutlineUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>2+</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>15+</small>
            </article>
          </div>
          <p>Meu foco é me tornar uma grande desenvolvedora Front-End. Atualmente faço projetos, como: desenvolvimento de landing pages responsivas e desenvolvimento de aplicações web em React.</p>

          <a href="#contact" className='btn btn-primary'>Vamos conversar</a>
        </div>
      </div>
    </section>
  )
}

export default about