import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  title: string
  description: string
  link: string
  image: string
}

const ProjectType = ({ title, description, link, image }: Props) => {
  return (
    <div className='flex flex-col lg:px-4 xl:px-5'>
      <h6 className='my-4 text-2xl font-semibold'>{title}</h6>
      <div className='relative mt-2 mb-4 aspect-square'>
        <Image
          src={image}
          alt={title}
          fill
        />
      </div>
      <p className='text-base'>{description}</p>
      <Link className='mt-8 text-sm underline hover:font-semibold w-fit' href={link}>
        Ver proyectos
      </Link>
    </div>
  )
}

export default ProjectType
