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
    if (typeof window !== 'undefined') {
      if (window.scrollY > 0) setScrolling(true)
      else setScrolling(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const pathname = usePathname()

  return (
    <nav className={`fixed top-0 left-0 z-20 w-full bg-white ${scrolling && 'shadow-sm'}`}>
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
            <Link
              className={`block ${pathname === '/' && 'bg-black text-white'} hover:bg-black hover:text-white hover:p-2 p-2 hover:transition-all hover:duration-300 text-black`}
              href='/'
            >
              Inicio
            </Link>
            <Link
              className={`block ${pathname === '/projects' && 'bg-black text-white'} hover:bg-black hover:text-white hover:p-2 p-2 hover:transition-all hover:duration-300 text-black`}
              href='/projects'
            >
              Projects
            </Link>
            <Link
              className={`block ${pathname === '/about' && 'bg-black text-white'} hover:bg-black hover:text-white hover:p-2 p-2 hover:transition-all hover:duration-300 text-black`}
              href='/about'
            >
              Nosotros
            </Link>
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
          <Link
            className={`block ${pathname === '/' ? 'bg-black text-white' : 'text-gray-950'} py-4 font-medium pl-2`}
            href='/'
          >
            Inicio
          </Link>
          <Link
            className={`block ${pathname === '/projects' ? 'bg-black text-white' : 'text-gray-950'} py-4 font-medium pl-2`}
            href='/projects'
          >
            Proyectos
          </Link>
          <Link
            className={`block ${pathname === '/about' ? 'bg-black text-white' : 'text-gray-950'} py-4 font-medium pl-2`}
            href='/about'
          >
            Nosotros
          </Link>
        </ul>
      </Drawer>
    </nav>
  )
}
