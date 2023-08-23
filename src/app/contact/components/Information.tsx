import React from 'react'

import { AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai'

const Information = () => {
  return (
    <div className='h-full'>
      <h2 className='mb-4 text-4xl font-semibold'>Contacto</h2>
      <p>¿Tienes un proyecto en mente?</p>
      <p>Hagámoslo realidad, cuéntame los detalles y adquiere una cotización</p>
      <div className='flex flex-col mt-5'>
        <div className='grid gap-6 py-4 xs:justify-items-center lg:items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <h4 className='text-lg font-semibold'>Llámanos</h4>
          <div className='flex items-center'>
            <AiOutlinePhone style={{ fontSize: 30, color: 'black' }} />
            <p className='ml-4 text-base'>999 999 999</p>
          </div>
        </div>
        <div className='grid gap-6 py-4 mt-5 xs:mt-3 xs:justify-items-center lg:items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <h4 className='text-lg font-semibold'>Háblamemos por WhatsApp</h4>
          <button className='w-fit flex items-center p-3 text-base text-white bg-black border hover:bg-[#25D366] hover:transition-all hover:duration-300'>
            <AiOutlineWhatsApp style={{ fontSize: 30, color: 'white', marginRight: 10 }} />
            999 999 999
          </button>
        </div>
      </div>
    </div>
  )
}

export default Information
