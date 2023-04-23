import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { EffectFade } from 'swiper';
import img1 from "../assets/img/hus-1.jpg"
import img2 from "../assets/img/hus-2.jpg"
import img3 from "../assets/img/hus-3.jpg"

const Home = () => {
  
  return (
    <section>
      <figure className='home-slider'>
      <Swiper modules={[EffectFade]} effect="fade" loop={true}>
      {[img1, img2, img3].map((img) => {
        return <SwiperSlide><img src={img} alt="img" /></SwiperSlide>;
      })}
    </Swiper>
      </figure>
    </section>
  )
}

export default Home