import Image from 'next/image'
import { useRef } from 'react'

const elements = [
  { label: 'Ansioso', icon: <Image src='/img/homePage/emotions/emotion1.svg' alt='emotion' width={184} height={184} className='w-28 h-28' /> },
  { label: 'Inseguro', icon: <Image src='/img/homePage/emotions/emotion2.svg' alt='emotion' width={184} height={184} className='w-28 h-28' /> },
  { label: 'Triste', icon: <Image src='/img/homePage/emotions/emotion3.svg' alt='emotion' width={184} height={184} className='w-28 h-28' /> },
  { label: 'Enojado', icon: <Image src='/img/homePage/emotions/emotion4.svg' alt='emotion' width={184} height={184} className='w-28 h-28' /> },
  { label: 'Cansado', icon: <Image src='/img/homePage/emotions/emotion5.svg' alt='emotion' width={184} height={184} className='w-28 h-28' /> },
]

export const HowICanHelpYouSection = () => {
  const { current: items } = useRef(elements)

  return (
    <section className='h-screen w-full py-20 px-4 bg-primary-300 text-center flex flex-col justify-center items-center'>
      <div>
        <span className='text-white font-bold text-2xl'>¿Cómo puedo ayudarte?</span> <br />
        <span className='text-white font-light'>¿Cómo te sientes hoy?</span>
        <div className='w-32 h-0.5 mt-4 mx-auto bg-secondary-300'></div>
      </div>

      <div className='max-w-5xl mt-10 mx-auto'>
        <div className='flex flex-wrap justify-center items-center'>
          {items.map((item) => {
            return (
              <div key={item.label} className='flex flex-col text-center mx-10 my-5'>
                <figure className='w-28 h-28'>{item.icon}</figure>
                <span className='mt-4 text-white font-bold text-xl'>{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className='mt-10'>
        <p className='text-xl text-white font-semibold'>
          Nombrar sus sentimientos y tener apoyo, escuchar y <br />
          comprender le quitará un peso importante de encima.
        </p>
      </div>

      <div>
        <button className='mt-10 px-14 py-3 text-white rounded-full bg-secondary-300 text-sm font-semibold'>No estas solo, yo puedo ayudarte</button>
      </div>
    </section>
  )
}
