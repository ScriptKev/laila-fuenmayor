export const FirstSection = () => {
  return (
    <section className='min-h-screen w-full bg-gray-100 text-center'>
      <h3 className='text-2xl text-primary-300'>¿Quieres conocer un pedacito de lo que vas a encontrar en el programa?</h3>
      <hr />
      <span className='text-primary-300'>¡Te lo dejo por aquí!</span>

      <div className='max-w-5xl mx-auto grid lg:grid-cols-3 lg:grid-rows-3'>
        <article className='col-span-2'></article>
        <article className='col-span-1'></article>

        <article className='col-span-1'></article>
        <article className='col-span-1'></article>
        <article className='col-span-1'></article>

        <article className='col-span-1'></article>
        <article className='col-span-1'></article>
        <article className='col-span-1'></article>
      </div>
    </section>
  )
}
