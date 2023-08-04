import React from 'react'

import { WhatsAppOutlined, PhoneOutlined } from '@ant-design/icons'

const Information = () => {
  return (
    <div className='h-full'>
      <h2 className='mb-4 text-4xl font-semibold'>Contacto</h2>
      <p>¿Tienes un proyecto en mente?</p>
      <p>Hagámoslo realidad, cuéntame los detalles y adquiere una cotización</p>
      <div className='grid grid-cols-2 gap-6 mt-10 h-fit'>
        <div className='flex flex-col items-center'>
          <div className='p-5 bg-black border rounded-full w-fit'>
            <PhoneOutlined style={{ fontSize: 35, color: 'white' }} />
          </div>
          <div className='flex flex-col items-center w-full mt-4'>
            <h1 className='text-lg font-semibold text-center'>Teléfono</h1>
            <p className='w-5/6 mt-2 text-center'>999 999 999</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='p-5 bg-black border rounded-full w-fit'>
            <WhatsAppOutlined style={{ fontSize: 35, color: 'white' }} />
          </div>
          <div className='flex flex-col items-center w-full mt-4'>
            <h1 className='text-lg font-semibold text-center'>Whatsapp</h1>
            <p className='w-5/6 mt-2 text-center'>999 999 999</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
