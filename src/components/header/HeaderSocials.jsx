import React from 'react'
import { ImLinkedin } from 'react-icons/im'
import { ImGithub } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/ticianne-dias-a7a66b134/" target="_blank" rel="noreferrer"><ImLinkedin /></a>
        <a href="https://github.com/TicianneDias" target="_blank" rel="noreferrer"><ImGithub/></a>
        <a href="mailto:ticidias@gmail.com?subject=subjext text"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials