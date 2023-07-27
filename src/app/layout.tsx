import React from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ConfigProvider } from 'antd'

import Footer from './main-layout/Footer'
import Header from './main-layout/Header'

import StyledComponentsRegistry from '@/lib/AntdRegistry'
import theme from '@/theme/themeConfig'

import './globals.css'

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
            <Header />
            {children}
            <Footer />
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
