import React from 'react'
import './experience.css'
import {FiCheckCircle} from 'react-icons/fi'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Minhas Habilidades</h5>
      <h2>Experiências</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Dev.</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon"/>
              <div>
                <h4>React.js</h4>
                
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Back-End Dev. & Ferramentas Dev.</h3>
          <div className="experience__content">
          <article className="experience__details">
              <FiCheckCircle className="experience__details-icon"/>
              <div>
                <h4>Git</h4>
                
              </div>
          </article>
          <article className="experience__details">
              <FiCheckCircle className="experience__details-icon"/>
              <div>
                <h4>GitHub</h4>
                
              </div>
          </article>
          <article className="experience__details">
              <FiCheckCircle className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                
              </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience