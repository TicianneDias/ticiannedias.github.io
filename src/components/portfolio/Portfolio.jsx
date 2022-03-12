import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port1.png'
import IMG2 from '../../assets/port2.png'
import IMG3 from '../../assets/port3.png'
import IMG4 from '../../assets/port4.png'
import IMG5 from '../../assets/port5.png'
import IMG6 from '../../assets/port6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Landing Page',
    subtitle: 'HTML, CSS, JavaScript',
    github: 'https://github.com/TicianneDias',
    site: 'https://suzanasantosorganizer.com.br'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Landing Page (em processo)',
    subtitle: 'HTML, CSS, JavaScript',
    github: 'https://github.com/TicianneDias',
    site: 'https://github.com/TicianneDias'
  },
  {
    id: 3,
    image: IMG5,
    title: 'Coffee & Love Gallery',
    subtitle: 'Bootstrap',
    github: 'https://github.com/TicianneDias/gallery-page-with-bootstrap',
    site: 'https://sad-borg-a5868c.netlify.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Landing Page Model',
    subtitle: 'HTML, CSS, JavaScript',
    github: 'https://github.com/TicianneDias/landing-page-html-css-js',
    site: 'https://agitated-albattani-ed530e.netlify.app/'
  },
  {
    id: 5,
    image: IMG3,
    title: 'Verificador CPF',
    subtitle: 'JavaScript',
    github: 'https://github.com/TicianneDias',
    site: 'https://github.com/TicianneDias/verificador-de-cpf-usando-classes'
  },
  {
    id: 6,
    image: IMG6,
    title: 'PDF Merge',
    subtitle: 'Python',
    github: 'https://github.com/TicianneDias/',
    site: 'https://github.com/TicianneDias/pdf-python-merge'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Projetos Recentes</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {
          data.map(({title, subtitle, id, image, github, site}) => {
            return (
              <article key={id} className="portfolio__item">
                <figure className="portfolio__item-img">
                  <img src={image} alt={title} />
                </figure>
                <h3>{title}</h3>
                <p className="text-light">{subtitle}</p>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                <a href={site} className='btn btn-primary' target='_blank' rel="noreferrer">Site</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio