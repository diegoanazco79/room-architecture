'use client'

import Image from 'next/image'
import Link from 'next/link'

import { getProjectsList, getTitle } from './helpers/functions'

export default function ProjectInfoPage ({ params }: { params: { type_id: string } }) {
  const title = getTitle(params.type_id)
  const projectsList = getProjectsList(params.type_id)

  return (
    <main className='min-h-screen py-24 text-black bg-white lg:py-32'>
      <div className='max-w-screen-xl mx-auto responsive-px-4'>
        <h1 className='text-4xl font-semibold text-center xs:my-8 sm:my-8 md:my-8 xl:my-10 lg:text-5xl'>{title}</h1>
        <div className='grid gap-8 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xs:gap-y-14 lg:grid-cols-3'>
          {projectsList.map((project, idx) => (
            <div key={idx} className='lg:p-2 xl:p-5'>
              <Link href={project.url}>
                <div className='relative aspect-square'>
                  <Image
                    className='cursor-pointer hover:bg-black hover:opacity-70'
                    src={project.image}
                    alt={`${project.name}-home`}
                    fill
                  />
                </div>
                <div className='cursor-pointer w-fit'>
                  <h4 className='mt-4 ml-4 text-xl font-semibold'>{project.name}</h4>
                  <h4 className='ml-4 text-xs font-semibold opacity-30'>{project.description}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
