'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useMediaQuery } from '@mui/material'

import { casaArias, casaLeon, casaMontesOca } from '../helpers/projects-ids'

const MainProjects = () => {
  const isTablet = useMediaQuery('(min-width: 475px) and (max-width: 1024px)')

  return (
    <div className='w-full py-14'>
      <h1 className='mb-4 text-2xl text-left lg:mb-8'> Proyectos Destacados</h1>
      <div className={`grid gap-4 px-4 py-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ${isTablet ? 'items-center' : ''}`}>
        {!isTablet && <h1 className='xl:text-[65px] lg:text-[50px] text-[40px]'>CASA DE LEÓN</h1>}
        <div>
          {isTablet && <h1 className='xl:text-[65px] lg:text-[50px] text-[40px]'>CASA DE LEÓN</h1>}
          <p className='text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className='relative aspect-square'>
          <Link href={`/projects/${casaLeon}`}>
            <Image
              className='cursor-pointer hover:opacity-50'
              src='/img/home/projects/feature-project-1.jpg'
              alt='feature-project-1'
              fill
            />
          </Link>
        </div>
      </div>
      <div className={`grid grid- gap-4 px-4 py-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ${isTablet ? 'items-center' : ''}`}>
        <div>
          <h1 className='sm:block md:block lg:hidden xl:text-[65px] lg:text-[50px] text-[40px]'>CASA MONTES DE OCA</h1>
          <p className='text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className='relative aspect-square'>
          <Link href={`/projects/${casaMontesOca}`}>
            <Image
              className='cursor-pointer hover:opacity-50'
              src='/img/home/projects/feature-project-2.jpg'
              alt='feature-project-1'
              fill
            />
          </Link>
        </div>
        <h1 className='xs:hidden sm:hidden md:hidden lg:block xl:text-[65px] lg:text-[50px] text-[40px]'>CASA MONTES DE OCA</h1>
      </div>
      <div className={`grid gap-4 px-4 py-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ${isTablet ? 'items-center' : ''}`}>
        {!isTablet && <h1 className='xl:text-[65px] lg:text-[50px] text-[40px]'>CASA ARIAS</h1>}
        <div>
          {isTablet && <h1 className='xl:text-[65px] lg:text-[50px] text-[40px]'>CASA ARIAS</h1>}
          <p className='text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className='relative aspect-square'>
          <Link href={`/projects/${casaArias}`}>
            <Image
              className='cursor-pointer hover:opacity-50'
              src='/img/home/projects/feature-project-1.jpg'
              alt='feature-project-1'
              fill
            />
          </Link>
        </div>
      </div>
      <Link href='/projects' className='underline'>Ver todos los proyectos</Link>
    </div>
  )
}

export default MainProjects
