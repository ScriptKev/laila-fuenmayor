export const FifthSection = () => {
  return (
    <section className='min-h-screen w-full bg-gray-100 relative flex flex-col justify-center items-center text-center py-10'>
      <h4>Pero ¡hey! Aún no se acaba... Te tengo un último regalo...</h4> <br />
      <span>Reservando HOY tendrás acceso gratuito a la MASTERCLASS</span> <br />
      <picture>
        <img src='#' alt='#' />
      </picture>
      <span>¿Cómo liberarte de las inseguridades y caminar con auto-confianza hacia tu propia visión de éxito?</span>
      <div className='text-center flex flex-col'>
        <span>Dictada por</span>

        <picture>
          <img src='#' alt='#' />
        </picture>

        <h3 className='text-xl text-gray-800 font-bold'>Ina Firgau</h3>
        <small className='font-light'>Fundadora de Self Academy</small>
        <span className='uppercase text-secondary-300'>
          Valor
          <div className='line-through'>$97</div>
        </span>
      </div>
      <button className='px-14 py-2 text-white rounded-full bg-secondary-300 text-sm'>¡Quiero unirme YA!</button>
    </section>
  )
}
