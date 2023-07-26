import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Header from './components/Header';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ROOM Arquitectos',
  description: 'ROOM Arquitectos'
};

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
