import Image from 'next/image'

export const FifthSection = () => {
  return (
    <section className='md:min-h-screen h-masterclassMobile w-full bg-gray-100 relative flex flex-col justify-center items-center text-center pb-10 bg-masterclassMobileBg md:bg-masterclassBg bg-no-repeat bg-center wmd-wlg:-bg-y-10 lg:-bg-y-26 bg-contain md:bg-200%'>
      <div className='max-w-7xl mx-auto px-6 md:px-20 wmm-wmxs:top-52 wmxs-ml:top-48 wmd-wlg:top-8 wlg-xl:top-16 xl:top-32 absolute'>
        <span className='wmm-wml:text-lg wml-wsm:text-xl wsm-wmd:text-3xl wmd-wlg:text-xl wlg-xl:text-2xl xl:text-3xl font-bold text-primary-300'>
          Pero ¡hey! Aún no se acaba... <br className='wmxs-ml:block wml-wsm:block wsm-wmd:hidden wmd-wlg:block lg:hidden' /> Te tengo un último regalo...
        </span>
        <br className='hidden ml:block' />
        <br />
        <span className='font-semibold wmm-wml:text-sm wml-wsm:text-sm wsm-wmd:text-sm wmd-wlg:text-base wlg-xl:text-base xl:text-base text-gray-700'>
          Reservando HOY tendrás acceso <br className='mm:hidden mxs:block md:hidden' /> gratuito a la MASTERCLASS
        </span>
        <br />
        <br className='wmm-wml:hidden wml-wsm:hidden wsm:block' />
        {/* <br className='wmm-wml:hidden wml-wsm:hidden wsm:block' />
        <br className='wmm-wml:hidden wml-wsm:hidden wsm:block' /> */}
        <div className='w-48 wmxs-ml:w-72 wml-wsm:w-72 wsm-wmd:w-72 wmd-wlg:w-72 wlg-xl:w-96 xl:w-152 mx-auto wmd-wlg:mt-2'>
          <picture>
            <Image src='/img/coursesPage/masterclassResult.png' width={974} height={649} alt='masterclass w-56' />
          </picture>
        </div>
        <span className='text-primary-300 wmm-wml:text-sm ml:text-base font-bold'>
          ¿Cómo liberarte de las inseguridades y caminar con auto-confianza hacia tu propia visión de éxito?
        </span>
        <div className='text-center flex flex-col justify-center items-center mt-2'>
          <span className='mm:text-sm ml:text-base'>Dictada por</span>
          <picture className='w-28 h-28 md:w-40 md:h-40 mt-2'>
            <Image src='/img/coursesPage/coach.png' width={254} height={254} alt='masterclass' />
          </picture>

          <h3 className='wmm-wml:text-base wml-wsm:text-2xl wsm-wmd:text-3xl md:text-3xl text-gray-800 font-bold mt-2'>Ina Firgau</h3>
          <small className='font-medium mm:text-sm ml:text-base text-gray-800'>Fundadora de Self Academy</small>
          <span className='uppercase text-secondary-300 font-bold flex justify-center items-center mm:text-sm ml:text-2xl mm:mt-2'>
            Valor&nbsp;
            <div className='line-through'> $97</div>
          </span>
        </div>
        <button className='px-9 py-3 mm:mt-2 text-white rounded-full bg-secondary-300 hover:bg-opacity-90 mm:text-base ml:text-lg font-semibold'>
          ¡Quiero unirme YA!
        </button>
      </div>
    </section>
  )
}
