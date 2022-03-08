import React from 'react'
import './testimonial.css'
import CLIENT1 from '../../assets/client1.svg'
import CLIENT2 from '../../assets/client2.png'
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: CLIENT1,
    name: 'Suzana Santos',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, aspernatur nulla beatae cupiditate ipsam quibusdam asperiores esse delectus, tempora a recusandae dolorem mollitia doloremque, est facilis itaque? Odit, harum. Nobis!'
  },
  {
    avatar: CLIENT2,
    name: 'Mayara Freitas',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, aspernatur nulla beatae cupiditate ipsam quibusdam asperiores esse delectus, tempora a recusandae dolorem mollitia doloremque, est facilis itaque? Odit, harum. Nobis!'
  },
]

const Testimonial = () => {
  return (
    <section id="testimonial">
    <h5>Meus Clientes</h5>
    <h2>Depoimentos</h2>

    <Swiper className="container testimonials__container"
    modules={[Pagination, Autoplay]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}
    autoplay={{delay: 10000}}
>

      {
        data.map(({avatar, review, name, index}) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <figure className="client__avatar">
                <img src={avatar} alt="Client Avatar" />
              </figure>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    </section>
  )
}

export default Testimonial