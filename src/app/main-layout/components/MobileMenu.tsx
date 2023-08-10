'use client'

import React, { useState } from 'react'
import { Collapse } from '@mui/material'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { GrClose } from 'react-icons/gr'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { menuItems } from '@/app/helpers/menu-items'

interface Props {
  showNavbar: boolean
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu = ({ showNavbar, setShowNavbar }: Props) => {
  const [showProjectsOptions, setShowProjectsOptions] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className='flex justify-end w-full'>
        <button
          className='p-2 rounded-lg text-gray-950 lg:hidden hover:bg-gray-100'
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <GrClose style={{ fontSize: 20 }} />
        </button>
      </div>
      <ul>
        {menuItems.map((item, idx) => {
          const isActive = item.url === '/' ? pathname === '/' : pathname.startsWith(item.url)
          if (item.label === 'Proyectos') {
            return (
              <div key={idx}>
                <button
                  className={`flex justify-between px-2 w-full text-left ${isActive ? 'bg-black text-white' : 'text-gray-950'} py-4 font-medium`}
                  onClick={() => setShowProjectsOptions(!showProjectsOptions)}
                >
                  {item.label}
                  {showProjectsOptions ? <MdKeyboardArrowUp style={{ fontSize: 25 }} /> : <MdKeyboardArrowDown style={{ fontSize: 25 }} />}
                </button>
                <Collapse className='py-1 pl-3' in={showProjectsOptions}>
                  <Link
                    className={`block ${pathname === '/projects' ? 'bg-black text-white' : 'text-gray-950'} py-4 text-sm pl-2`}
                    href='/projects'
                  >
                    Información General
                  </Link>
                  <Link
                    className={`block ${pathname === '/projects/home-design' ? 'bg-black text-white' : 'text-gray-950'} py-4 text-sm pl-2`}
                    href='/projects/home-design'
                  >
                    Diseño de Viviendas
                  </Link>
                  <Link
                    className={`block ${pathname === '/projects/interior-design' ? 'bg-black text-white' : 'text-gray-950'} py-4 text-sm pl-2`}
                    href='/projects/interior-design'
                  >
                    Diseño de Interiores
                  </Link>
                  <Link
                    className={`block ${pathname === '/projects/executed-projects' ? 'bg-black text-white' : 'text-gray-950'} py-4 text-sm pl-2`}
                    href='/projects/executed-projects'
                  >
                    Proyectos Ejecutados
                  </Link>
                </Collapse>
              </div>
            )
          } else {
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
          }
        })}
      </ul>
    </>
  )
}

export default MobileMenu
