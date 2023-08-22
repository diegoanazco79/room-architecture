import React from 'react'

import { AiOutlineHome } from 'react-icons/ai'

const History = () => {
  return (
    <div className='grid grid-cols-1 gap-8 mt-8 lg:mt-20 lg:grid-cols-2'>
      <div>
        <h1 className='text-3xl font-semibold'>
          ¿Quiénes somos?
        </h1>
        <p className='mt-4 text-base lg:mt-12'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className='mt-4 text-base'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <h1 className='mb-4 text-3xl font-semibold'>
          Nuestros Servicios
        </h1>
        <div className='flex flex-col justify-around h-full'>
          <div className='flex items-center'>
            <div className='p-5 bg-black border rounded-full w-fit'>
              <AiOutlineHome style={{ fontSize: 35, color: 'white' }} />
            </div>
            <div className='ml-10'>
              <h6 className='text-lg font-semibold'>Diseño de Proyectos</h6>
              <p className='text-base'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='p-5 bg-black border rounded-full w-fit'>
              <AiOutlineHome style={{ fontSize: 35, color: 'white' }} />
            </div>
            <div className='ml-10'>
              <h6 className='text-lg font-semibold'>Diseño de Interiores</h6>
              <p className='text-base'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='p-5 bg-black border rounded-full w-fit'>
              <AiOutlineHome style={{ fontSize: 35, color: 'white' }} />
            </div>
            <div className='ml-10'>
              <h6 className='text-lg font-semibold'>Construcción de Proyectos</h6>
              <p className='text-base'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
