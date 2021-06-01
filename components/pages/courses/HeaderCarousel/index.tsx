import { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, { Pagination } from 'swiper/core'

SwiperCore.use([Pagination])

export const Items = () => (
  <div className='h-screen w-full overflow-hidden z-0 relative'>
    <Image alt='Mountains' src='https://picsum.photos/1920/1080' layout='fill' objectFit='cover' quality={100} />

    <div className='h-56 w-96 bg-white absolute top-60 left-10 text-center'>
      <span className='text-primary-300 text-3xl'>Enamorate del Sello</span> <br />
      <p className='text-gray-700 mt-4'>
        Descubre y ama tanto tus talentos que <br />
        puedas crecer exponencialmente, sin <br />
        necesidad de corregir tus &quot;debilidades&quot;
      </p>{' '}
      <br />
      <button className='px-14 py-2 text-white rounded-full bg-primary-300 text-sm'>¡Lo quiero!</button>
    </div>
  </div>
)

export const HeaderCarousel = () => {
  const { current: carouselItem } = useRef([1, 2, 3, 4, 5])

  return (
    <>
      <Swiper pagination={{ clickable: true }} className='h-screen w-full'>
        {carouselItem.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Items />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
