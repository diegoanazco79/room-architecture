'use client'

import React from 'react'

import { AiOutlineWhatsApp } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='mt-20'>
      <div className='grid items-center gap-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        <div>
          <h6 className='mb-2 text-base font-light'>CONTÁCTANOS</h6>
          <h1 className='mb-4 text-4xl font-semibold text-left xs:text-3xl lg:mb-8'>
            Haz tu proyecto realidad
          </h1>
        </div>
        <div className='flex justify-center'>
          <button className='flex items-center p-3 text-base text-white bg-black border hover:bg-[#25D366] hover:transition-all hover:duration-300'>
            Hablemos por WhatsApp
            <AiOutlineWhatsApp style={{ fontSize: 30, color: 'white', marginLeft: 10 }} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
