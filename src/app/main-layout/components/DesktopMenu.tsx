'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { menuItems } from '@/app/helpers/menu-items'

const DesktopMenu = () => {
  const pathname = usePathname()

  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const handleMouseEnter = () => {
    setDropdownVisible(true)
  }

  const handleMouseLeave = () => {
    setDropdownVisible(false)
  }

  return (
    <div className='hidden w-full lg:block lg:w-auto'>
      <ul className='flex items-center space-x-8 font-medium'>
        {menuItems?.map((item, idx) => {
          const isActive =
            item.url === '/' ? pathname === '/' : pathname.startsWith(item.url)
          if (item.label === 'Proyectos') {
            return (
              <div
                key={idx}
                className={`block cursor-pointer ${
                    isActive ? 'bg-black text-white' : ''
                  } hover:bg-black hover:text-white hover:p-2 p-2 hover:transition-all hover:duration-300 text-black`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Proyectos
                {isDropdownVisible && (
                  <div className='absolute flex flex-col mt-2 text-black transition-all bg-white border hover:duration-300'>
                    <Link
                      className={`py-3 pl-2 pr-6 text-sm cursor-pointer hover:bg-black hover:text-white ${
                        pathname === '/projects'
                          ? 'bg-black text-white'
                          : ''
                      }`}
                      href='/projects'
                    >
                      Todos los Proyectos
                    </Link>
                    <Link
                      className={`py-3 pl-2 pr-6 text-sm cursor-pointer hover:bg-black hover:text-white ${
                        pathname === '/projects/home-design'
                          ? 'bg-black text-white'
                          : ''
                      }`}
                      href='/projects/home-design'
                    >
                      Diseño de Viviendas
                    </Link>
                    <Link
                      className={`py-3 pl-2 pr-6 text-sm cursor-pointer hover:bg-black hover:text-white ${
                        pathname === '/projects/interior-design'
                          ? 'bg-black text-white'
                          : ''
                      }`}
                      href='/projects/interior-design'
                    >
                      Diseño de Interiores
                    </Link>
                    <Link
                      className={`py-3 pl-2 pr-6 text-sm cursor-pointer hover:bg-black hover:text-white ${
                        pathname === '/projects/executed-design'
                          ? 'bg-black text-white'
                          : ''
                      }`}
                      href='/projects/executed-projects'
                    >
                      Proyectos Ejecutados
                    </Link>
                  </div>
                )}
              </div>
            )
          } else {
            return (
              <li key={idx}>
                <Link
                  className={`block ${
                    isActive ? 'bg-black text-white' : ''
                  } hover:bg-black hover:text-white hover:p-2 p-2 hover:transition-all hover:duration-300 text-black`}
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
  )
}

export default DesktopMenu
