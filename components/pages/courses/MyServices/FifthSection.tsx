import Image from 'next/image'

export const FifthSection = () => {
  return (
    <section className='md:min-h-screen h-masterclassMobile w-full bg-gray-100 relative flex flex-col justify-center items-center text-center pb-10 bg-masterclassMobileBg md:bg-masterclassBg bg-no-repeat bg-center fifthSectionBgPositionmd-lg fifthSectionBgPositionlg-3xl 3xl:-bg-y-60 bg-contain md:bg-200%'>
      <div className='max-w-2xl 3xl:max-w-8xl mx-auto px-6 md:px-20 wmm-wmxs:top-4 wmxs-ml:top-20 wmd-wlg:top-8 wlg-xl:top-16 3xl:top-16 absolute'>
        <div className='mm:text-lg ml:text-xl font-bold text-primary-300'>
          <span className='md:text-3xl 3xl:text-4xl'>
            Pero ¡hey! Aún no se acaba... <br className='mxs:block md:hidden ' /> Te tengo un último regalo...
          </span>
        </div>
        <br className='hidden ml:block' />
        <br />
        <div className='font-semibold mm:text-sm ml:text-base text-gray-700'>
          <span className='3xl:text-3xl'>
            Reservando HOY tendrás acceso <br className='mm:hidden mxs:block md:hidden' /> gratuito a la MASTERCLASS
          </span>
        </div>
        <br />
        <br className='mm:hidden md:block' />
        <br className='mm:hidden md:block' />
        <br className='mm:hidden md:block' />
        <div className='masterclassResultImgmm-mxs masterclassResultImgmxs-md masterclassResultImg2xl mx-auto wmd-wlg:mt-2'>
          <picture>
            <Image src='/img/coursesPage/masterclassResult.png' width={974} height={649} alt='masterclass w-56' />
          </picture>
        </div>
        <div className='text-primary-300 mm:text-sm ml:text-base font-bold'>
        <span className='3xl:text-2xl'>
            ¿Cómo liberarte de las inseguridades y caminar con auto-confianza hacia tu propia visión de éxito?
          </span>
        </div>
        <div className='text-center flex flex-col justify-center items-center mt-2'>
          <div className='mm:text-sm ml:text-base'>
            <span className='3xl:text-2xl'>
              Dictada por
            </span>
          </div>
          <picture className='w-28 h-28 md:w-40 md:h-40 mt-2'>
            <Image src='/img/coursesPage/coach.png' width={254} height={254} alt='masterclass' />
          </picture>

          <div className='mm:text-base ml:text-2xl text-gray-800 font-bold mt-2'>
            <h5 className='md:text-3xl'>
              Ina Firgau
            </h5>
          </div>
          <div className='font-medium mm:text-sm text-gray-800'>
            <span className='ml:text-base 3xl:text-xl'>
              Fundadora de Self Academy
            </span>
          </div>
          <div className='uppercase text-secondary-300 font-bold flex justify-center items-center mm:text-sm ml:text-2xl mm:mt-2'>
            <span className='3xl:text-2xl'>
              Valor&nbsp;
              <div className='line-through inline-block'> $97</div>
            </span>
          </div>
        </div>
        <button className='px-9 py-3 mm:mt-2 text-white rounded-full bg-secondary-300 mm:text-base ml:text-lg font-semibold'>
          <span className='3xl:text-xl'>
            ¡Quiero unirme YA!
          </span>
        </button>
      </div>
    </section>
  )
}
