import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export const NavBar = () => {
  const router = useRouter()
  const { current: navLinks } = useRef([
    { label: 'Home', route: '/' },
    { label: 'Help', route: '/help' },
    { label: 'About', route: '/about' },
    { label: 'Courses', route: '/courses' },
    { label: 'Contact', route: '/contact' },
  ])

  return (
    <header className='fixed left-0 top-0 w-full z-50 body-font text-gray-800 bg-primary-300 shadow-lg bg-opacity-90'>
      <div className='container mx-auto flex flex-wrap p-5 flex-row items-center justify-center md:justify-between'>
        <div>
          <Link href='/'>
            <a>
              <figure className='w-64'>
                <img src='/logo.png' height={69} width={470} className='mx-auto' />
              </figure>
            </a>
          </Link>
        </div>

        <nav className='flex flex-wrap items-center text-base justify-end'>
          {navLinks.map((navLink) => (
            <Link href={navLink.route} key={navLink.route}>
              <a className='mr-5 hover:text-lcpYellow-500 text-white'>
                {navLink.label}
                {router.pathname === navLink.route && <div className='w-8 h-0.5 bg-secondary-300'></div>}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
