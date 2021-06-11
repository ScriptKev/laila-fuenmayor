import { IconHamburgerMenu } from 'components/common/Icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import Image from 'next/image'

import { DrawerNavigation } from './DrawerNavigation'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpenDrawer = () => setIsOpen((prevState) => !prevState)
  const router = useRouter()

  const { current: navLinks } = useRef([
    { label: 'Inicio', route: '/' },
    { label: 'Ayuda', route: '/ayuda' },
    { label: 'Sobre mi', route: '/sobre-mi' },
    { label: 'Cursos', route: '/cursos' },
    { label: 'Contacto', route: '/contacto' },
  ])

  return (
    <>
      <header className='fixed left-0 top-0 w-full z-50 body-font text-gray-800 bg-primary-300 shadow-lg bg-opacity-90'>
        <div className='container max-w-7xl mx-auto flex flex-wrap p-5 flex-row items-center justify-between'>
          <div className='w-56 ml:w-72 -mb-1'>
            <Link href='/'>
              <a>
                <picture>
                  <Image src='/logo.png' height={69} width={470} className='mx-auto' />
                </picture>
              </a>
            </Link>
          </div>

          <button onClick={handleIsOpenDrawer} className='md:hidden'>
            <IconHamburgerMenu height={28} width={28} />
          </button>

          <nav className='hidden md:flex flex-wrap items-center text-base 2xl:text-xl justify-end'>
            {navLinks.map((navLink) => (
              <Link href={navLink.route} key={navLink.route}>
                <a className='mr-5 hover:text-yellow-500 text-white'>
                  {navLink.label}
                  {router.pathname === navLink.route && <div className='w-8 h-0.5 bg-secondary-300'></div>}
                </a>
              </Link>
            ))}
          </nav>
        </div>

        <DrawerNavigation isOpen={isOpen} handleIsOpenDrawer={handleIsOpenDrawer} />
      </header>
    </>
  )
}

// import Image from 'next/image'
// import Link from 'next/link'
// import { useRef, useState } from 'react'

// import { IconHamburgerMenu } from 'components/common/Icons/HamburgerMenu'
// import { DrawerNavigation } from './DrawerNavigation'
// import { Dropdown } from './Dropdown'

// export const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   const { current: routesLinkDesktop } = useRef([
//     { label: 'Home', route: '/' },
//     { label: 'Help', route: '/help' },
//     { label: 'About', route: '/about' },
//     { label: 'Courses', route: '/courses' },
//     { label: 'Contact', route: '/contact' },
//   ])

//   const handleIsOpenDrawer = () => setIsOpen((prevState) => !prevState)

//   return (
//     <nav>
//       <div className='max-w-screen-lg mx-auto flex justify-between px-5'>
//         <section className='logo fixed top-0 left-0 mdmin:left-0 z-20 mdmin:hidden'>
//           <picture className='w-48'>
//             <Image src='/logo.png' height={69} width={470} className='mx-auto w-full' onClick={handleIsOpenDrawer} />
//           </picture>
//         </section>

//         <header className='text-gray-800 bg-white shadow-lg bg-opacity-90 body-font fixed left-0 top-0 w-full z-50 mdmin:block'>
//           <div className='container mx-auto mdmin:flex flex-wrap p-5 flex-row items-center justify-center lgmin:justify-between hidden'>
//             <div>
//               <Link href='/'>
//                 <a>
//                   <picture className='w-48'>
//                     <Image src='/logo.png' height={69} width={470} className='mx-auto w-full' />
//                   </picture>
//                 </a>
//               </Link>
//             </div>

//             <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
//               {routesLinkDesktop.map((route) => {
//                 if (route.route === '/live')
//                   return (
//                     <div key={route.route} className='mr-5 rounded-md hover:text-yellow-500 border border-red-400 px-4 py-1 relative'>
//                       <Link href={route.route}>
//                         <a>{route.label}</a>
//                       </Link>
//                     </div>
//                   )
//                 else
//                   return (
//                     <Link key={route.route} href={route.route}>
//                       <a className='mr-5 hover:text-yellow-500'>{route.label}</a>
//                     </Link>
//                   )
//               })}
//               <Dropdown />
//             </nav>
//           </div>
//         </header>

//         <div className='fixed top-5 right-5 z-20 flex'>
//           <button onClick={handleIsOpenDrawer} className='mdmin:hidden'>
//             <IconHamburgerMenu height={28} width={28} stroke={'white'} />
//           </button>
//         </div>
//       </div>

//       <DrawerNavigation isOpen={isOpen} handleIsOpenDrawer={handleIsOpenDrawer} />
//     </nav>
//   )
// }
