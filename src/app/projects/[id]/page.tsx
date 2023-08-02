'use client'

import { useState } from 'react'
import Image from 'next/image'

import PhotosGallery from './components/PhotosGallery'

import { getProjectData } from './helpers/functions'

export default function ProjectInfoPage ({ params }: { params: { id: string } }) {
  const [showGallery, setShowGallery] = useState(false)

  const projectData = getProjectData(params.id)

  return (
    <main className='min-h-screen pt-32 pb-24 text-black bg-white md:py-32 lg:px-24'>
      <div className='max-w-screen-xl mx-auto lg:px-12 xl:px-16'>
        <div
          className='relative h-[220px] lg:h-[450px] xl:h-[600px] cursor-pointer'
          onClick={() => setShowGallery(true)}
        >
          <Image
            className='px-6 md:px-0'
            src='/img/home/slider/slider-2.jpg'
            alt='slider-2'
            fill
          />
        </div>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 px-6 md:grid-cols-5'>
            <div className='col-span-4'>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <h1 className='xl:text-[65px] lg:text-[50px] text-[40px]'>{projectData.name}</h1>
                <div>
                  <p className='text-sm'>{projectData.firstDescription}</p>
                  {projectData.secondDescription && (
                    <p className='mt-4 text-sm'>{projectData.secondDescription}</p>
                  )}
                  <div className='hidden mt-6 md:flex'>
                    <button
                      className='p-2 ml-auto text-sm text-white bg-black border hover:bg-gray-950 hover:transition-all hover:duration-300'
                      onClick={() => setShowGallery(true)}
                    >
                      Ver galería
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='flex flex-col'>
                <div className='mb-4'>
                  <h4 className='text-base font-semibold'>TIPOLOGÍA</h4>
                  <h4 className='text-base font-light'>{projectData.typology}</h4>
                </div>
                <div className='mb-4'>
                  <h4 className='text-base font-semibold'>LUGAR</h4>
                  <h4 className='text-base font-light'>{projectData.country}</h4>
                </div>
                <div className='mb-4'>
                  <h4 className='text-base font-semibold'>AÑO</h4>
                  <h4 className='text-base font-light'>{projectData.year}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center md:hidden'>
            <button
              className='p-2 mt-2 text-sm text-white bg-black border hover:bg-gray-950 hover:transition-all hover:duration-300'
              onClick={() => setShowGallery(true)}
            >
              Ver galería
            </button>
          </div>
        </div>
        <PhotosGallery
          showGallery={showGallery}
          setShowGallery={setShowGallery}
        />
      </div>
    </main>
  )
}
