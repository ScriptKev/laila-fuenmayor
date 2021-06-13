import Head from 'next/head'

export default function HelpPage() {
  return (
    <>
      <Head>
        <title>Ayuda - Laila Fuenmayor</title>
      </Head>

      <div className='pt-40 flex flex-col justify-center items-center text-center' style={{ height: '90vh' }}>
        <figure>
          <img src='/img/commons/mantenimiento.svg' width={300} height={300} />
        </figure>
        <br />
        <span className='text-2xl font-bold text-gray-700'>Pagina /ayuda En Construcción</span>
      </div>
    </>
  )
}
