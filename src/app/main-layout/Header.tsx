'use client'

import { Drawer } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import { menuItems } from '../helpers/menu-items'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Header () {
  const pathname = usePathname()

  const [showNavbar, setShowNavbar] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const handleMouseEnter = () => {
    setDropdownVisible(true)
  }

  const handleMouseLeave = () => {
    setDropdownVisible(false)
  }

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
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl py-6 mx-auto responsive-px-4'>
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
              const isActive = item.url === '/' ? pathname === '/' : pathname.startsWith(item.url)
              if (item.label === 'Proyectos') {
                return (
                  <Link
                    href={item.url}
                    key={idx}
                    className={`block cursor-pointer ${isActive ? 'bg-black text-white' : ''} hover:bg-black hover:text-white hover:p-2 p-2 hover:transition-all hover:duration-300 text-black`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Proyectos
                    {isDropdownVisible && (
                      <div className='absolute flex flex-col mt-2 text-black transition-all bg-white border hover:duration-300'>
                        <Link
                          className={`py-3 pl-2 pr-6 text-sm cursor-pointer hover:bg-black hover:text-white ${pathname === '/projects/home-design' ? 'bg-black text-white' : ''}`}
                          href='/projects/home-design'
                        >
                          Diseño de Viviendas
                        </Link>
                        <Link
                          className={`py-3 pl-2 pr-6 text-sm cursor-pointer hover:bg-black hover:text-white ${pathname === '/projects/interior-design' ? 'bg-black text-white' : ''}`}
                          href='/projects/interior-design'
                        >
                          Diseño de Interiores
                        </Link>
                        <Link
                          className={`py-3 pl-2 pr-6 text-sm cursor-pointer hover:bg-black hover:text-white ${pathname === '/projects/executed-design' ? 'bg-black text-white' : ''}`}
                          href='/projects/executed-projects'
                        >
                          Proyectos Ejecutados
                        </Link>
                      </div>
                    )}
                  </Link>
                )
              } else {
                return (
                  <li key={idx}>
                    <Link
                      className={`block ${isActive ? 'bg-black text-white' : ''} hover:bg-black hover:text-white hover:p-2 p-2 hover:transition-all hover:duration-300 text-black`}
                      href={item.url}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </div>
        <button
          className='p-2 text-black rounded-lg md:hidden'
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <AiOutlineMenu style={{ fontSize: 20 }} />
        </button>
      </div>
      <Drawer
        classes={{ paper: 'w-80 p-5' }}
        anchor='right'
        open={showNavbar}
        onClose={() => setShowNavbar(false)}
      >
        <div className='flex justify-end w-full'>
          <button
            className='p-2 rounded-lg text-gray-950 md:hidden hover:bg-gray-100'
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <AiOutlineClose style={{ fontSize: 25 }} />
          </button>
        </div>
        <ul>
          {menuItems.map((item, idx) => {
            const isActive = item.url === '/' ? pathname === '/' : pathname.startsWith(item.url)
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
