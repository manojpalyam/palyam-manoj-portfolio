import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container">
    
     
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className=''client__name>Earnest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam aperiam ipsam ullam libero, facere similique culpa sunt, esse exercitationem, quae doloremque. Corrupti aut at eligendi eos, dolorum eveniet reiciendis sed?
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar two" />
          </div>
          <h5 className=''client__name>Earnest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam aperiam ipsam ullam libero, facere similique culpa sunt, esse exercitationem, quae doloremque. Corrupti aut at eligendi eos, dolorum eveniet reiciendis sed?
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar three" />
          </div>
          <h5 className=''client__name>Earnest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam aperiam ipsam ullam libero, facere similique culpa sunt, esse exercitationem, quae doloremque. Corrupti aut at eligendi eos, dolorum eveniet reiciendis sed?
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar four" />
          </div>
          <h5 className=''client__name>Earnest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam aperiam ipsam ullam libero, facere similique culpa sunt, esse exercitationem, quae doloremque. Corrupti aut at eligendi eos, dolorum eveniet reiciendis sed?
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials