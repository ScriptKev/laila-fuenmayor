/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Dropdown = () => {
  const { current: menuOptions } = useRef([
    { label: 'Blog', to: '/blog' },
    { label: 'Predicas', to: '/recursos/predicas' },
    { label: 'Estudios Bíblicos', to: '/recursos/estudios-biblicos' },
  ])

  return (
    <Menu as='div' className='relative inline-block text-left'>
      {({ open }) => (
        <>
          <div>
            <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-lcpYellow-500'>
              Recursos
              <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items
              static
              className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
            >
              <div className='py-1'>
                {menuOptions.map((option) => (
                  <Menu.Item key={option.to}>
                    {({ active }) => (
                      <Link href={option.to}>
                        <a
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm hover:text-lcpYellow-500'
                          )}
                        >
                          {option.label}
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
