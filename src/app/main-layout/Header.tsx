'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { MenuOutlined } from '@ant-design/icons'
import { menuItems } from '../helpers/menu-items'

export default function Header () {
  const pathname = usePathname()

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
            {menuItems?.map((item, idx) => (
              <li key={idx}>
                <Link
                  className={`block ${pathname === item.url ? 'bg-black text-white' : ''} hover:bg-black hover:text-white hover:p-2 p-2 hover:transition-all hover:duration-300 text-black`}
                  href={item.url}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className='p-2 text-black rounded-lg md:hidden'
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <MenuOutlined style={{ fontSize: 20 }} />
        </button>
      </div>
    </nav>
  )
}
