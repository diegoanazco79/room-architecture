import React from 'react'
import Image from 'next/image'

const People = () => {
  return (
    <div className='mt-36'>
      <h1 className='text-4xl font-semibold text-center'>Talento ROOM</h1>
      <div className='grid grid-cols-1 gap-8 mt-10 lg:grid-cols-4'>
        <div className='relative aspect-square'>
          <Image
            className='aspect-square'
            src='https://i.imgur.com/d86vzXW.png'
            alt='feature-project-1'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <h4 className='text-xl font-semibold'>JUAN CARLOS MONROY</h4>
          <h6 className='text-lg italic font-semibold'>Arquitecto / Director</h6>
          <p className='mt-4'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took
          </p>
        </div>
        <div className='relative aspect-square'>
          <Image
            className='aspect-square'
            src='https://i.imgur.com/d86vzXW.png'
            alt='feature-project-1'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <h4 className='text-xl font-semibold'>JUAN CARLOS MONROY</h4>
          <h6 className='text-lg italic font-semibold'>Arquitecto / Director</h6>
          <p className='mt-4'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took
          </p>
        </div>
      </div>
    </div>
  )
}

export default People
