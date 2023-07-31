'use client'

import React from 'react'

import BannerSlider from './components/BannerSlider'

export default function Home () {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen py-24 text-black bg-white md:py-32 md:px-24'>
      <div className='flex flex-col items-center w-full max-w-screen-xl px-6 mx-auto lg:px-12 xl:px-16'>
        <BannerSlider />
      </div>
    </main>
  )
}
