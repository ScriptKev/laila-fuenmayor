import { useForm } from 'react-hook-form'
import { config } from 'config'

export const NewsLetterSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <section className='h-full w-full py-10 bg-primary-300 text-center px-4'>
      <div>
        <h4 className='text-4xl font-bold text-white'>NewsLetter</h4>
        <br />
        <div className='w-32 h-0.5 mx-auto bg-secondary-300'></div>
        <br />
        <p className='text-white font-semibold'>Suscribete a mi Newsletter para estar informado de todas las promociones</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='mt-4 flex flex-col md:flex-row justify-center items-center w-full h-full max-w-lg mx-auto'>
        <input
          {...register('name', { required: true })}
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          style={{ backgroundColor: '#5848588F' }}
          className='placeholder-center w-full md:mr-4 placeholder-white rounded-md border-none focus:border-indigo-500 focus:bg-opacity-90 focus:ring-2 focus:ring-primary-300 text-base outline-none text-white py-3 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
        <button className='mx-auto mt-5 md:mt-0 px-8 md:px-14 py-4 text-white rounded-xl-full rounded-full bg-secondary-300 text-xl md:text-sm hover:bg-opacity-90 font-semibold'>
          Suscribete
        </button>
      </form>

      <div className='mt-16 md:mt-10 flex flex-col-reverse justify-center items-center'>
        <div className='mt-12'>
          <figure className='w-80 md:w-96 mx-auto'>
            <img src='/logo.png' height={69} width={470} />
          </figure>
        </div>

        <div className='flex flex-wrap justify-center items-center mt-14'>
          {config.SOCIAL_NETWORKS.map((network) => (
            <a style={{ backgroundColor: '#e4c6a4' }} className='mx-2 md:mx-4 rounded-full flex justify-center items-center' href={network.link} target='_blank' rel='noopener noreferrer' key={network.label}>
              <img src={network.image} className='h-10 w-10 lg:h-12 p-2 lg:w-12 '/>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
