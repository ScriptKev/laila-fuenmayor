import Head from 'next/head'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Acerca de mi - Laila Fuenmayor</title>
      </Head>

      <div className='pt-40 flex flex-col justify-center items-center text-center'>
        <figure>
          <img src='/img/commons/mantenimiento.svg' width={300} height={300} />
        </figure>
        <br />
        <span className='text-2xl font-bold text-gray-700'>Pagina /about En Construcción</span>
      </div>
    </>
  )
}
