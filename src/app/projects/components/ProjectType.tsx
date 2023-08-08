import React from 'react'
import Link from 'next/link'

interface Props {
  subHeader: string
  title: string
  description: string
  link: string
}

const ProjectType = ({ subHeader, title, description, link }: Props) => {
  return (
    <div className='flex flex-col'>
      <h1 className='mb-2 text-xl'>{subHeader}</h1>
      <svg width='154' height='32' viewBox='0 0 154 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <mask id='mask0_1_11' maskUnits='userSpaceOnUse' x='0' y='0' width='154' height='32'>
          <path d='M154 0H0V32H154V0Z' fill='white' />
        </mask>
        <g mask='url(#mask0_1_11)'>
          <path d='M148.449 0H153.999L148.449 9.73913V0Z' fill='#F2F2F2' />
          <path d='M9.71171 0H0V32H9.71171V0Z' fill='#F2F2F2' />
          <path d='M148.452 0H5.55078V9.73913H148.452V0Z' fill='#F2F2F2' />
          <path d='M134.577 22.2607H6.9375V31.9999H134.577V22.2607Z' fill='#F2F2F2' />
          <path d='M135.963 31.9999L141.512 22.2607H131.801L131.842 31.9999H135.963Z' fill='#F2F2F2' />
        </g>
      </svg>
      <h6 className='my-4 text-2xl font-semibold'>{title}</h6>
      <p className='text-base'>{description}</p>
      <Link className='mt-8 text-sm underline hover:font-semibold w-fit' href={link}>
        Ver proyectos
      </Link>
    </div>
  )
}

export default ProjectType
