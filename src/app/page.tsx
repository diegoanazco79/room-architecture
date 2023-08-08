'use client'

import React from 'react'

import BannerSlider from './components/banner'
import Contact from './components/contact'
import MainProjects from './components/projects'
import Profile from './components/profile'
import Skills from './components/skills'

export default function Home () {
  return (
    <main className='min-h-screen py-24 bg-white md:py-32'>
      <div className='flex flex-col items-center justify-between overflow-x-hidden text-black bg-white responsive-px-4'>
        <div className='flex flex-col items-center w-full max-w-screen-xl mx-auto'>
          <BannerSlider />
          <Profile />
          <MainProjects />
        </div>
      </div>
      <section
        className='lg:h-[400px] xl:h-[550px] bg-fixed bg-center bg-cover hidden md:block my-10'
        style={{ backgroundImage: 'url(/img/home/full-width.jpg)' }}
      />
      <div className='text-black bg-white mt-14 md:pt-5 responsive-px-4'>
        <div className='max-w-screen-xl mx-auto'>
          <Skills />
          <Contact />
        </div>
      </div>
    </main>
  )
}
