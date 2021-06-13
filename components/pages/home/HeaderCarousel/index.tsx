import { useRef } from 'react'
// import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, { Pagination } from 'swiper/core'

SwiperCore.use([Pagination])

export const Items = () => (
  <div className='h-screen w-full overflow-hidden z-0 relative'>
    <img
      alt='Mountains'
      src='/img/homePage/carousel/homeCarouselItemMobile1.png'
      className='md:hidden h-full w-full object-cover'
      width={1920}
      height={1080}
    />
    <img
      alt='Mountains'
      src='/img/homePage/carousel/homeCarouselItem1.png'
      className='hidden md:block h-full w-full object-cover'
      width={1920}
      height={1080}
    />

    {/* <Image
      alt='Mountains'
      src='/img/homePage/carousel/homeCarouselItemMobile1.png'
      className='hidden'
      layout='fill'
      objectFit='cover'
      quality={100}
    />
    <Image alt='Mountains' src='/img/homePage/carousel/homeCarouselItem1.png' className='hidden' layout='fill' objectFit='cover' quality={100} /> */}

    <div className='w-full h-full hxs:pt-6 hsm:pt-20 5xl:pt-40 2xl:pl-28 px-4 md:w-fit md:h-fit bg-transparent absolute flex flex-col justify-center items-center inset-0 md:top-52 md:left-10 3xl:left-20 text-center'>
      <span className='text-primary-300 text-7xl 3xl:text-9xl font-hottemp'>
        Enámorate <br className='md:hidden' />
        de tu sello
      </span>{' '}
      {/* <br /> */}
      <p className='text-gray-700 mt-4 font-medium text-sm 3xl:text-2xl'>
        Descubre y ama tanto tus talentos que <br className='hidden md:inline-block' />
        puedas crecer exponencialmente, sin <br className='hidden md:inline-block' />
        necesidad de corregir tus &quot;debilidades&quot;
      </p>
      <div className='hxs:mt-36 hsm:mt-56 hmd:mt-80 mt-10'>
        <button className='px-14 py-3  text-white rounded-full bg-primary-300 text-sm 3xl:text-2xl'>¡Lo quiero!</button>
      </div>
    </div>
  </div>
)

export const HeaderCarousel = () => {
  const { current: carouselItem } = useRef([1, 2, 3, 4, 5])

  return (
    <>
      <Swiper pagination={{ clickable: true }} id='inicio' className='h-screen w-full'>
        {carouselItem.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Items />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
