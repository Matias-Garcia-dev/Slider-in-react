import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation} from 'swiper'

import ac_image from "../assets/AC.webp"
import BG3_image from "../assets/BG3.jpg"
import inmortal_image from "../assets/inmortal.webp"
import mario_image from "../assets/Mario.webp"
import './Glider.css'


const Glider = () => {

  return (

    <div className="glide">
      <h1> Game Gallery </h1>
      <Swiper
        effect={ 'coverflow' }
        grabCursor= {true}
        centeredSlides= {true}
        loop={true}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }
        }
        className='swiper-container'
      >
        <SwiperSlide>
          <img src={ac_image} alt="assasine creed" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BG3_image} alt="BG3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={inmortal_image} alt="inmortal" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mario_image} alt="Mario" />
        </SwiperSlide>

        <div className="slider_controler">
          
        </div>

      </Swiper>
    </div>
  )
}

export default Glider