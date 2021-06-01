export const SecondSection = () => {
  return (
    <section className='min-h-screen w-full bg-gray-100 text-center'>
      <h3 className='text-2xl text-primary-300'>Pero ¡ya va! esto no es todo...</h3>
      <hr />
      <span className='text-primary-300'>Reservando HOY tendrás acceso GRATIS a estos 3 súper BONOS</span>

      <div className='max-w-5xl mx-auto grid lg:grid-cols-3 lg:grid-rows-3'>
        <div className='flex flex-row'>
          <article className='w-80 h-80 bg-white rounded flex flex-col'></article>
          <article className='w-80 h-80 bg-white rounded flex flex-col'></article>
          <article className='w-80 h-80 bg-white rounded flex flex-col'></article>
        </div>

        <span className='text-2xl text-white'>Y además contarás con estos 3 regalitos extra...</span>

        <div className='flex flex-row'>
          <article className='w-80 h-80 bg-white rounded flex flex-col'></article>
          <article className='w-80 h-80 bg-white rounded flex flex-col'></article>
          <article className='w-80 h-80 bg-white rounded flex flex-col'></article>
        </div>
      </div>
    </section>
  )
}
