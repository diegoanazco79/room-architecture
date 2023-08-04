'use client'

import React from 'react'
import Link from 'next/link'

import Project from './components/Project'

const MainProjects = () => {
  return (
    <div className='w-full md:pb-10 pt-14'>
      <h6 className='mb-2 text-base font-light'>VIVIENDAS, INTERIORES, CALIDAD</h6>
      <h1 className='mb-4 text-4xl font-semibold text-left lg:mb-8'>Proyectos Destacados</h1>
      <Project reverse={false} />
      <Project reverse />
      <Project reverse={false} />

      <Link href='/projects'>
        <div className='flex items-center justify-center'>
          <button className='p-3 mt-10 text-base text-white bg-black border hover:underline hover:transition-all hover:duration-300'>
            Ver todos los proyectos
          </button>
        </div>
      </Link>
    </div>
  )
}

export default MainProjects
