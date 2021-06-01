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
    <section className='h-full w-full py-10 bg-primary-300 text-center'>
      <div>
        <h4 className='text-4xl font-bold text-white'>NewsLetter</h4>
        <br />
        <div className='w-32 h-0.5 mx-auto bg-secondary-300'></div>
        <br />
        <p className='text-white'>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='mt-4 flex flex-row justify-center items-center w-full h-full max-w-lg mx-auto'>
        <input
          {...register('name', { required: true })}
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          style={{ backgroundColor: '#5848588F' }}
          className='w-full mr-4 placeholder-white rounded-md border-none focus:border-indigo-500 focus:bg-opacity-90 focus:ring-2 focus:ring-primary-300 text-base outline-none text-white py-3 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
        <button className='mx-auto px-14 py-3 text-white rounded-xl-full rounded-full bg-secondary-300 text-sm hover:bg-opacity-90 font-semibold'>
          Suscribete
        </button>
      </form>

      <div className='mt-10'>
        <figure className='w-96 mx-auto'>
          <img src='/logo.png' height={69} width={470} />
        </figure>
      </div>

      <div className='flex flex-wrap justify-center items-center mt-14'>
        {config.SOCIAL_NETWORKS.map((network) => (
          <a className='mx-4' href={network.link} target='_blank' rel='noopener noreferrer' key={network.label}>
            <div className='h-16 w-16 bg-white rounded-full flex justify-center items-center'></div>
          </a>
        ))}
      </div>
    </section>
  )
}
