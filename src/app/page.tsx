'use client'

import React from 'react'

import BannerSlider from './components/BannerSlider'
import MainProjects from './components/MainProjects'

export default function Home () {
  return (
    <main className='py-24 bg-white md:py-32'>
      <div className='flex flex-col items-center justify-between min-h-screen overflow-x-hidden text-black bg-white md:px-24'>
        <div className='flex flex-col items-center w-full max-w-screen-xl px-6 mx-auto lg:px-12 xl:px-16'>
          <BannerSlider />
          <MainProjects />
        </div>
      </div>
      <section
        className='lg:h-[400px] xl:h-[550px] bg-fixed bg-center bg-cover hidden md:block'
        style={{ backgroundImage: 'url(/img/home/slider/full-width.jpg)' }}
      />
    </main>
  )
}
