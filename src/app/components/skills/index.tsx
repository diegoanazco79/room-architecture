import React from 'react'

import { AiOutlineCalendar } from 'react-icons/ai'

const Skills = () => {
  return (
    <>
      <h6 className='mb-2 text-base font-light'>LOS DETALLES CUENTAN</h6>
      <h1 className='mb-12 text-4xl font-semibold text-left xs:text-3xl'>¿Por qué elegirnos?</h1>
      <div className='grid gap-6 gap-y-10 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        <div className='flex flex-col items-center'>
          <div className='p-5 bg-black border rounded-full w-fit'>
            <AiOutlineCalendar style={{ fontSize: 35, color: 'white' }} />
          </div>
          <div className='flex flex-col items-center mt-4'>
            <h1 className='text-lg font-semibold text-center'>Reuniones periódicas</h1>
            <p className='w-5/6 mt-2 text-center'>Cada semana, horarios flexibles, por videollamada.</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='p-5 bg-black border rounded-full w-fit'>
            <AiOutlineCalendar style={{ fontSize: 35, color: 'white' }} />
          </div>
          <div className='flex flex-col items-center mt-4'>
            <h1 className='text-lg font-semibold text-center'>Reuniones periódicas</h1>
            <p className='w-5/6 mt-2 text-center'>Cada semana, horarios flexibles, por videollamada.</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='p-5 bg-black border rounded-full w-fit'>
            <AiOutlineCalendar style={{ fontSize: 35, color: 'white' }} />
          </div>
          <div className='flex flex-col items-center mt-4'>
            <h1 className='text-lg font-semibold text-center'>Reuniones periódicas</h1>
            <p className='w-5/6 mt-2 text-center'>Cada semana, horarios flexibles, por videollamada.</p>
          </div>
        </div>
        <div className='flex flex-col items-center md:col-span-3 lg:col-span-3 xl:col-span-3'>
          <div className='p-5 bg-black border rounded-full w-fit'>
            <AiOutlineCalendar style={{ fontSize: 35, color: 'white' }} />
          </div>
          <div className='flex flex-col items-center mt-4'>
            <h1 className='text-lg font-semibold text-center'>Reuniones periódicas</h1>
            <p className='w-5/6 mt-2 text-center'>Cada semana, horarios flexibles, por videollamada.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
