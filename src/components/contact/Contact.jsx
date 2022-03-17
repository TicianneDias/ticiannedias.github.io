import React, {useRef} from 'react'
import './contact.css'
import {MdMailOutline} from 'react-icons/md'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Vamos Conversar?</h5>
      <h2>Mande Mensagem</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdMailOutline className='contact__option-icon'/>
            <h4>E-Mail</h4>
            <h5>ticidias@gmail.com</h5>
            <a href="mailto:ticidias@gmail.com" target="_blank" rel="noreferrer">Enviar Mensagem</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Meu Perfil</h5>
            <a href="https://www.linkedin.com/in/ticianne-dias-a7a66b134/" target="_blank" rel="noreferrer">Me Adicione</a>
          </article>
          <article className="contact__option">
            <BsGithub className='contact__option-icon'/>
            <h4>GitHub</h4>
            <h5>Repositório</h5>
            <a href="https://github.com/TicianneDias" target="_blank" rel="noreferrer">Conheça Meu Portfólio</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nome Completo' required/>
          <input type="email" name='email' placeholder='Seu E-Mail' required/>
          <textarea name="message" rows="7" placeholder='Sua Mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact