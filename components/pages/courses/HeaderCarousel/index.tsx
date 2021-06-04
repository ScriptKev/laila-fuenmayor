// import { useRef } from 'react'
// import Image from 'next/image'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/swiper.min.css'
// import 'swiper/components/pagination/pagination.min.css'

// import SwiperCore, { Pagination } from 'swiper/core'

// SwiperCore.use([Pagination])

// export const Items = () => (
//   <div className='h-screen w-full overflow-hidden z-0 relative'>
//     <Image alt='Mountains' src='/img/homePage/carousel/homeCarouselItem1.png' layout='fill' objectFit='cover' quality={100} />

//     <div className='h-56 w-124 bg-transparent absolute top-48 left-10 text-center'>
//       <h3 className='font-semibold text-secondary-300'>Cursos Online</h3>
//       <br />
//       <span className='text-primary-300 text-7xl font-hottemp'>Enamorate del Sello</span> <br />
//       <p className='text-gray-700 mt-4 font-semibold text-sm'>
//         Únete a este programa virtual de 6 semanas que te dará los ingredientes claves para salir de la mentalidad de &quot;corregir debilidades&quot;
//         y aprender a amar el recurso más importante en el que te puedes apalancar para lograr con disfrute lo que quieres: tu combinación única de
//         talentos.
//       </p>
//     </div>
//   </div>
// )

// export const HeaderCarousel = () => {
//   const { current: carouselItem } = useRef([1, 2, 3, 4, 5])

//   return (
//     <>
//       <Swiper pagination={{ clickable: true }} className='h-screen w-full'>
//         {carouselItem.map((item, idx) => (
//           <SwiperSlide key={idx}>
//             <Items />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   )
// }

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

    <div className='w-full h-full hsm:pt-20 md:w-104 md:h-56 bg-transparent absolute flex flex-col justify-center items-center wmm-wmxs:top-10 wmxs-ml:top-10 wml-wsm:top-10 wsm-wmd:top-20 wmd-wlg:top-48 wlg-xl:top-48 xl:top-48 left-0 wmd-wlg:left-10 wlg-xl:left-16 wxl-2xl:left-36 2xl:left-40 text-center px-4'>
      <h3 className='font-semibold text-secondary-300'>Cursos Online</h3>
      <span className='text-primary-300 text-7xl font-hottemp'>
        Enamorate <br className='md:hidden' />
        del Sello
      </span>
      <p className='text-gray-700 mt-4 font-medium text-sm'>
        Únete a este programa virtual de 6 semanas que te dará los ingredientes claves para salir de la mentalidad de &quot;corregir debilidades&quot;
        y aprender a amar el recurso más importante en el que te puedes apalancar para lograr con disfrute lo que quieres: tu combinación única de
        talentos.
      </p>
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
