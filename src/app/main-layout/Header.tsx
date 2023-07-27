'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Drawer } from 'antd'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

export default function Header () {
  const [showNavbar, setShowNavbar] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) setScrolling(true)
    else setScrolling(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const pathname = usePathname()

  const menuItems = [
    {
      label: 'Inicio',
      url: '/'
    },
    {
      label: 'Proyectos',
      url: '/projects'
    },
    {
      label: 'Nosotros',
      url: '/about'
    },
    {
      label: 'Contacto',
      url: '/contact'
    }
  ]

  return (
    <nav className={`fixed top-0 left-0 z-20 w-full bg-white ${scrolling ? 'shadow-sm' : ''}`}>
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-6 mx-auto'>
        <a href='/' className='flex items-center'>
          <Image
            src='/img/logo.png'
            width={140}
            height={140}
            alt='ROOM Arquitectos'
          />
        </a>
        <div className='hidden w-full md:block md:w-auto'>
          <ul className='flex items-center space-x-8 font-medium'>
            {menuItems?.map((item, idx) => {
              const isActive = pathname.startsWith(item.url)
              return (
                <li key={idx}>
                  <Link
                    className={`block ${isActive ? 'bg-black text-white' : ''} hover:bg-black hover:text-white hover:p-2 p-2 hover:transition-all hover:duration-300 text-black`}
                    href={item.url ?? '/'}
                  >
                    {item.label ?? 'Home'}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <button
          className='p-2 rounded-lg text-gray-950 md:hidden hover:bg-gray-100'
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <MenuOutlined style={{ fontSize: 20 }} />
        </button>
      </div>
      <Drawer closable={false} placement='right' onClose={() => setShowNavbar(false)} open={showNavbar}>
        <div className='flex justify-end'>
          <button
            className='p-2 rounded-lg text-gray-950 md:hidden hover:bg-gray-100'
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <CloseOutlined style={{ fontSize: 25 }} />
          </button>
        </div>
        <ul>
          {menuItems.map((item, idx) => {
            const isActive = pathname.startsWith(item.url)
            return (
              <li className='rounded-lg' key={idx} onClick={() => setShowNavbar(false)}>
                <Link
                  className={`block ${isActive ? 'bg-black text-white' : 'text-gray-950'} py-4 font-medium pl-2`}
                  href={item.url}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </Drawer>
    </nav>
  )
}
