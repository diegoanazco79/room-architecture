'use client'

import { useState } from 'react'
import { useMediaQuery } from '@mui/material'

import DesktopSlider from './components/DesktopSlider'
import MobileSlider from './components/MobileSlider'
import PhotosGallery from './components/PhotosGallery'

import { getProjectData } from './helpers/functions'

export default function ProjectInfoPage ({ params }: { params: { id: string } }) {
  const isMobile = useMediaQuery('(max-width: 475px)')
  const [showGallery, setShowGallery] = useState(false)

  const projectData = getProjectData(params.id)

  return (
    <main className='min-h-screen py-32 text-black bg-white'>
      <div className='max-w-screen-xl mx-auto responsive-px-4'>
        {
          isMobile
            ? <MobileSlider mobileImages={projectData.mobileImages} />
            : <DesktopSlider desktopImages={projectData.desktopImages} />
        }
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
            <div className='col-span-4'>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <h1 className='xl:text-[65px] lg:text-[50px] text-[40px]'>{projectData.name}</h1>
                <div className='lg:pl-8'>
                  <p className='text-sm'>{projectData.firstDescription}</p>
                  {projectData.secondDescription && (
                    <p className='mt-4 text-sm'>{projectData.secondDescription}</p>
                  )}
                  <div className='hidden mt-6 md:flex'>
                    <button
                      className='p-2 ml-auto text-base text-white bg-black border hover:underline hover:transition-all hover:duration-300'
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
                  <h4 className='text-base font-semibold'>TIPO</h4>
                  <h4 className='text-base font-light'>{projectData.type}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center md:hidden'>
            <button
              className='p-3 mt-2 text-base text-white bg-black border hover:underline hover:transition-all hover:duration-300'
              onClick={() => setShowGallery(true)}
            >
              Ver galería
            </button>
          </div>
        </div>
        <PhotosGallery
          showGallery={showGallery}
          images={projectData.allImages}
          setShowGallery={setShowGallery}
        />
      </div>
    </main>
  )
}
