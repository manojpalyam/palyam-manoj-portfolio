import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TiFolderOpen} from 'react-icons/ti'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt= "About image" />

          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>

              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>

              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>

              <TiFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem velit inventore aperiam corrupti neque. At accusantium provident dolorum quidem, libero reiciendis, natus perferendis nisi aliquid saepe ipsa placeat beatae in.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About