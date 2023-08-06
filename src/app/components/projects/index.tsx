'use client'

import React from 'react'
import Link from 'next/link'

import Project from './components/Project'
import { mainProjects } from './helpers/constants'

const MainProjects = () => {
  return (
    <div className='w-full md:pb-10 pt-14'>
      <h6 className='mb-2 text-base font-light'>VIVIENDAS, INTERIORES, CALIDAD</h6>
      <h1 className='mb-4 text-4xl font-semibold text-left xs:text-3xl lg:mb-8'>Proyectos Destacados</h1>
      {mainProjects.map((project, idx) => (
        <Project
          key={idx}
          name={project.name}
          description={project.description}
          year={project.year}
          desktopImage={project.desktopImage}
          mobileImage={project.mobileImage}
          url={project.url}
          reverse={idx % 2 !== 0}
        />
      ))}

      <div className='flex items-center justify-center'>
        <Link href='/projects' className='w-fit'>
          <button className='p-3 mt-10 text-base text-white bg-black border w-fit hover:underline hover:transition-all hover:duration-300'>
            Ver todos los proyectos
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MainProjects
