import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebook} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aok3s3k', 'template_ktg8zjg', form.current, 'SGHsDNu5WAAdENNfN')
     e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In a Touch</h5>
      <h2>Contact ME</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Gmail</h4>
            <h5>manojkumar1432vsp@gmail.com</h5>
            <a href="mail to:manojkumar1432vsp@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <FaFacebook className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>manojkumar</h5>
            <a href="https://www.facebook.com/profile.php?id=100014704097988" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Manoj</h5>
            <a href="https://api.whatsapp.com/send?phone=+916281011401" target="_blank">Send a message</a>
          </article>

        </div>

        {/*End Of Contact Options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  name='name' placeholder='Your Full Name' required />
          <input type="email"  name='email' placeholder='Your Email Id' required />
          <textarea name="message" rows="7" placeholder= 'Your Message' required></textarea>
          <button type="Submit" className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact