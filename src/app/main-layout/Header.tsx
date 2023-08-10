'use client'

import React, { useEffect, useState } from 'react'
import { Drawer } from '@mui/material'
import Image from 'next/image'

import DesktopMenu from './components/DesktopMenu'
import MobileMenu from './components/MobileMenu'

import { AiOutlineMenu } from 'react-icons/ai'

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
        <DesktopMenu />
        <button
          className='p-2 text-black rounded-lg lg:hidden'
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
        <MobileMenu
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
        />
      </Drawer>
    </nav>
  )
}
