import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Manoj</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FiFacebook /></a>
        <a href="https://instagram.com"><FaInstagramSquare /></a>
        <a href="https://twitter.com"><AiFillTwitterSquare /></a>


      </div>

      <div className="footer__copyright">
        <small>&copy; Manoj :All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer