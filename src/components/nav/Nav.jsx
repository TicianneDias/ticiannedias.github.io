import React, {useState} from 'react'
import './nav.css'
import { IoMdHome } from 'react-icons/io'
import {BsFilePerson} from 'react-icons/bs'
import {BiBook, BiMessageRoundedDetail} from 'react-icons/bi'
import {MdComputer} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <IoMdHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <BsFilePerson /> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <MdComputer /> </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <BiBook /> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <RiServiceLine /> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageRoundedDetail /> </a>
    </nav>
  )
}

export default Nav