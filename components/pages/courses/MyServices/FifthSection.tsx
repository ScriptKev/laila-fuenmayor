import Image from 'next/image'

export const FifthSection = () => {
  return (
    <section className='min-h-screen w-full bg-gray-100 relative flex flex-col justify-center items-center text-center pb-10 pt-20 bg-masterclassBg bg-no-repeat bg-center bg-cover'>
      <span className='text-3xl font-bold text-primary-300'>Pero ¡hey! Aún no se acaba... Te tengo un último regalo...</span> <br />
      <span className='font-semibold text-lg text-gray-700'>Reservando HOY tendrás acceso gratuito a la MASTERCLASS</span> <br />
      <picture className='w-124'>
        <Image src='/img/coursesPage/masterclassResult.png' width={974} height={649} alt='masterclass' />
      </picture>
      <span className='text-primary-300 text-lg font-bold'>
        ¿Cómo liberarte de las inseguridades y caminar con auto-confianza hacia tu propia visión de éxito?
      </span>
      <div className='text-center flex flex-col'>
        <br />
        <span>Dictada por</span>

        <picture className='w-40 h-40'>
          <Image src='/img/coursesPage/coach.png' width={254} height={254} alt='masterclass' />
        </picture>

        <h3 className='text-3xl text-gray-800 font-bold'>Ina Firgau</h3>
        <small className='font-medium text-gray-800'>Fundadora de Self Academy</small>
        <br />
        <span className='uppercase text-secondary-300 font-bold flex justify-center items-center'>
          Valor
          <div className='line-through'> $97</div>
        </span>
        <br />
      </div>
      <button className='px-14 py-3 text-white rounded-full bg-secondary-300 text-sm font-semibold'>¡Quiero unirme YA!</button>
    </section>
  )
}
