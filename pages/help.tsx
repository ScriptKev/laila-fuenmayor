import Head from 'next/head'

export default function HelpPage() {
  return (
    <>
      <Head>
        <title>Ayuda - Laila Fuenmayor</title>
      </Head>

      <div className='pt-40 flex flex-col justify-center items-center text-center'>
        <figure>
          <img src='/img/commons/mantenimiento.svg' width={300} height={300} />
        </figure>
        <br />
        <span className='text-2xl font-bold text-gray-700'>Pagina /help En Construcción</span>
      </div>
    </>
  )
}
