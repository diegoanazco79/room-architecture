import React from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ConfigProvider } from 'antd'

import Footer from './main-layout/Footer'
// import Header from './main-layout/Header'

import StyledComponentsRegistry from '@/lib/AntdRegistry'
import theme from '@/theme/themeConfig'

import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { menuItems } from './helpers/menu-items'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ROOM Arquitectos',
  description: 'ROOM Arquitectos'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <nav className={`fixed top-0 left-0 z-20 w-full bg-white ${ 'shadow-sm' }`}>
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
                          className='block p-2 text-black hover:bg-black hover:text-white hover:p-2 hover:transition-all hover:duration-300'
                          href={item.url}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </nav>
            {/* <Header /> */}
            {children}
            <Footer />
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
