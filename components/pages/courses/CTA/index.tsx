export const CTA = () => {
  return (
    <section className='w-full h-full bg-CTABg bg-no-repeat bg-center bg-cover py-20'>
      <div className='flex justify-center items-center md:mx-0 mx-4'>
        <div className='max-w-xl 2xl:max-w-3xl h-full py-5 px-4 bg-white bg-opacity-70 text-center rounded-xl'>
          <h4 className='font-hottemp text-6xl text-primary-300 2xl:text-8xl'>Enámorate de tu sello</h4>
          <br />
          <p className='font-semibold text-gray-800 2xl:text-xl'>
            Únete a este programa de 6 semanas en vivo en el que te guiaré por el paso a paso que necesitas para prepararte, descubrir, amar e
            integrar a tu vida tu combinación única de talentos.
          </p>{' '}
          <br />
          <button className='px-14 py-3 text-white rounded-full bg-secondary-300 text-xl md:text-sm font-semibold'>
            <span className='2xl:text-xl'>
              ¡Lo quiero!
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
