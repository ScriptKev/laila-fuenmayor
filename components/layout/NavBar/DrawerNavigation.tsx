import { XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'

export const DrawerNavigation = ({ isOpen, handleIsOpenDrawer }: { isOpen: boolean; handleIsOpenDrawer: () => void }) => {
  const routesLink = [
    { label: 'Inicio', to: '/' },
    { label: 'Ayuda', to: '/ayuda' },
    { label: 'Sobre mi', to: '/sobre-mi' },
    { label: 'Cursos', to: '/cursos' },
    { label: 'Contacto', to: '/contacto' },
  ]

  return (
    <div
      style={{ backgroundColor: '#6e4f70' }}
      className={`lgmin:hidden z-30 fixed opacity-90 w-full h-screen flex justify-center top-0 transition-all transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <aside className='w-full h-full relative'>
        <button
          className='absolute top-5 right-5 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
          onClick={handleIsOpenDrawer}
        >
          <span className='sr-only'>Close panel</span>
          <XIcon className='h-6 w-6' aria-hidden='true' />
        </button>

        <div className='w-full h-full flex justify-start items-center flex-col'>
          <section className='mt-10 w-64 ml:w-80'>
            <picture>
              <Image src='/logo.png' height={69} width={470} className='mx-auto' />
            </picture>
          </section>

          <section className='my-7 overflow-y-scroll'>
            <div className='h-full flex flex-col justify-start items-center'>
              {routesLink.map((route) => (
                <Link href={route.to} key={route.to}>
                  <a
                    onClick={handleIsOpenDrawer}
                    className='border-2 mt-4 border-solid border-secondary-300 w-40 py-2 rounded-2xl text-xs font-normal text-center text-white'
                  >
                    {route.label}
                  </a>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </div>
  )
}
