import React from 'react'
import Image from 'next/image'

import Services from './components/Services'

const Profile = () => {
  return (
    <div className='w-full pt-14'>
      <h6 className='mb-2 text-base font-light'>SOBRE NOSOTROS</h6>
      <h1 className='mb-4 text-4xl font-semibold text-left xs:text-3xl lg:mb-8'>ROOM Arquitectura</h1>
      <div className='grid items-center grid-cols-1 py-6 gap-y-6 md:gap-6 sm:grid-cols-3 md:grid-cols-3'>
        <div>
          <div className='relative aspect-square'>
            <Image
              className='aspect-square'
              src='https://i.imgur.com/d86vzXW.png'
              alt='feature-project-1'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <span className='block mt-3 text-xs text-center'>Juan Carlos Monroy - Arquitecto</span>
        </div>
        <div className='col-span-2 md:ml-12'>
          <h4 className='mb-4 text-2xl font-semibold text-left lg:mb-8'>ROOM Arquitectura</h4>
          <p className='mt-2 text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <p className='mt-2 text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <Services isDesktop />
        </div>
      </div>
      <Services isDesktop={false} />
    </div>
  )
}

export default Profile
