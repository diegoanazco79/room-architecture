import React from 'react'
import Image from 'next/image'

const MainProjects = () => {
  return (
    <div className='w-full py-14'>
      <h1 className='mb-4 text-2xl text-left lg:mb-8'> Proyectos Destacados</h1>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 px-2 py-5 lg:p-10 min-h-[440px]'>
        <div className='lg:text-[65px] text-[40px]'>CASA DE LEÓN</div>
        <div className='text-sm'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </div>
        <div className='relative min-h-[300px]'>
          <Image
            className='cursor-pointer hover:opacity-50'
            src='/img/home/projects/leon-home.jpg'
            alt='leon-home'
            fill
          />
        </div>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 px-2 py-5 lg:p-10 min-h-[440px]'>
        <div className='lg:text-[65px] text-[40px] lg:hidden block'>CASA MONTES DE OCA</div>
        <div className='text-sm'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </div>
        <div className='relative min-h-[300px]'>
          <Image
            className='cursor-pointer hover:opacity-50'
            src='/img/home/projects/montes-home.jpg'
            alt='montes-home'
            fill
          />
        </div>
        <div className='lg:text-[65px] text-[40px] lg:block hidden'>CASA MONTES DE OCA</div>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 px-2 py-5 lg:p-10 min-h-[440px]'>
        <div className='lg:text-[65px] text-[40px]'>CASA ARIAS</div>
        <div className='text-sm'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </div>
        <div className='relative min-h-[300px]'>
          <Image
            className='cursor-pointer hover:opacity-50'
            src='/img/home/projects/arias-home.jpg'
            alt='arias-home'
            fill
          />
        </div>
      </div>
    </div>
  )
}

export default MainProjects