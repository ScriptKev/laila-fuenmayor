import { useForm, SubmitHandler } from 'react-hook-form'
import { rules } from './formConfig'

type TFormContactData = {
  name: string
  phone: string
  email: string
  message: string
  date: string
}

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<TFormContactData> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <section className='w-full h-full py-30' style={{ backgroundColor: '#D5D1D5' }}>
      <form onSubmit={handleSubmit(onSubmit)} className='text-white body-font relative'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h5 className='text-4xl font-bold title-font mb-4 text-white'>Contacto</h5>
            <div className='w-32 h-0.5 mx-auto bg-secondary-300'></div>
          </div>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <input
                    {...register('name', rules.name)}
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Tu nombre'
                    className='border-none w-full bg-primary-300 placeholder-white rounded-xl focus:border-indigo-500 focus:bg-opacity-90 focus:ring-2 focus:ring-primary-300 text-base outline-none text-white py-3 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>

              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <input
                    {...register('name', rules.email)}
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    className='border-none w-full bg-primary-300 placeholder-white rounded-xl focus:border-indigo-500 focus:bg-opacity-90 focus:ring-2 focus:ring-primary-300 text-base outline-none text-white py-3 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>

              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <input
                    {...register('phone', rules.phone)}
                    type='tel'
                    id='phone'
                    name='phone'
                    placeholder='Numero de teléfono'
                    className='border-none w-full bg-primary-300 placeholder-white rounded-xl focus:border-indigo-500 focus:bg-opacity-90 focus:ring-2 focus:ring-primary-300 text-base outline-none text-white py-3 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>

              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <input
                    {...register('date')}
                    type='date'
                    id='date'
                    name='date'
                    placeholder='Fecha (En caso de agendar una cita)'
                    className='border-none w-full bg-primary-300 placeholder-white rounded-xl focus:border-indigo-500 focus:bg-opacity-90 focus:ring-2 focus:ring-primary-300 text-base outline-none text-white py-3 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>

              <div className='p-2 w-full'>
                <div className='relative'>
                  <textarea
                    {...register('name', rules.message)}
                    id='message'
                    name='message'
                    placeholder='Write your message here'
                    className='border-none w-full bg-primary-300 placeholder-white rounded-xl focus:border-indigo-500 focus:bg-opacity-90 focus:ring-2 focus:ring-primary-300 h-32 text-base outline-none text-white py-3 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                  ></textarea>
                </div>
              </div>

              <div className='mt-2 w-full text-center'>
                <button className='font-semibold mx-auto px-14 py-3 text-white rounded-xl-full rounded-full bg-secondary-300 text-sm hover:bg-opacity-90'>
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
