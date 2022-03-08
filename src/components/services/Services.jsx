import React from 'react'
import './services.css'
import {MdOutlineUpdate } from 'react-icons/md'
import {IoIosCheckboxOutline} from 'react-icons/io'


const Services = () => {
  return (
    <section id="services">
      <h5>O que estudei / estudo</h5>
      <h2>Cursos</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Back-End Dev.</h3>
          </div>
          <ul className='service__list'>
            <li>
              <IoIosCheckboxOutline className='service__list-icon'/>
              <p>Python 3 Mundo 1 | 40 horas/aula.</p>
              <small className='text-light'>Curso em Vídeo</small>
            </li>
            <li>
              <IoIosCheckboxOutline className='service__list-icon'/>
              <p>Python 3 mundo 2 | 40 horas/aula.</p>
              <small className='text-light'>Curso em Vídeo</small>
            </li>
            <li>
              <IoIosCheckboxOutline className='service__list-icon'/>
              <p>Python 3 mundo 3 | 40 horas/aula.</p>
              <small className='text-light'>Curso em Vídeo</small>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Front-End Dev.</h3>
          </div>
          <ul className='service__list'>
            <li>
              <IoIosCheckboxOutline className='service__list-icon'/>
              <p>HTML5 | 40 horas/aula.</p>
              <small className='text-light'>Curso em Vídeo</small>
            </li>
            <li>
              <IoIosCheckboxOutline className='service__list-icon'/>
              <p>HTML5 e CSS3 | 80 horas/aula.</p>
              <small className='text-light'>Curso em Vídeo</small>
            </li>
            <li>
              <IoIosCheckboxOutline className='service__list-icon'/>
              <p>JavaScript | 40 horas/aula.</p>
              <small className='text-light'>Curso em Vídeo</small>
            </li>
            <li>
              <MdOutlineUpdate className='service__list-icon'/>
              <p>JavaScript e TypeScript | 195.50 horas/aula.</p>
              <small className='text-light'>Udemy</small>
            </li>
            <li>
              <MdOutlineUpdate className='service__list-icon'/>
              <p>React.js e Next.js | 92.5 horas/aula.</p>
              <small className='text-light'>Udemy</small>
            </li>
            <li>
              <MdOutlineUpdate className='service__list-icon'/>
              <p>Bootstrap 5 | 16.5 horas/aula.</p>
              <small className='text-light'>Udemy</small>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Ferramentas Dev.</h3>
          </div>
          <ul className='service__list'>
            <li>
              <IoIosCheckboxOutline className='service__list-icon'/>
              <p>Git & GitHub | 20 horas/aula.</p>
              <small className='text-light'>Curso em Vídeo</small>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services