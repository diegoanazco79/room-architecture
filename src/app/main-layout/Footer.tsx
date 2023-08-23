'use client'

import React from 'react'
import Image from 'next/image'

import { AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

export default function Footer () {
  return (
    <footer className='py-12 bg-black'>
      <div className='w-full max-w-screen-xl px-4 mx-auto'>
        <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='flex flex-col items-center md:items-start md:justify-start'>
            <Image
              src='/img/logo-white.png'
              width={100}
              height={100}
              alt='ROOM Arquitectos'
            />
            <p className='w-4/5 mt-4 text-xs text-white'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className='flex flex-col items-center md:items-end md:justify-start'>
            <h1 className='flex items-center font-semibold text-lg md:h-[52.5px] h-[40px] my-auto text-white'>Contacto</h1>
            <div className='flex flex-col items-center mt-4 md:items-end'>
              <span className='mb-3 text-xs text-center text-white md:text-right'>+51 999 999 999</span>
              <span className='mb-3 text-xs text-center text-white md:text-right'>roomArquitectos@room.com</span>
              <span className='text-xs text-center text-white md:text-right'>Calle Los Cóndores 123 - Urb. Valle Hermoso - Cerro Colorado</span>
              <span className='text-xs text-center text-white md:text-right'>Arequipa - Perú</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full max-w-screen-xl px-4 mx-auto'>
        <hr className='my-6 border-[#414141]' />
        <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='flex flex-col items-center md:items-start md:justify-start'>
            <span className='text-xs text-white'>© 2023 ROOM Arquitectura y Construcción</span>
          </div>
          <div className='flex flex-col items-center md:items-end md:justify-start'>
            <div className='flex justify-center w-full md:justify-end'>
              <a className='cursor-pointer'>
                <AiFillFacebook style={{ fontSize: 20, color: 'white' }} />
              </a>
              <a className='mx-3 cursor-pointer'>
                <AiFillInstagram style={{ fontSize: 20, color: 'white' }} />
              </a>
              <a className='cursor-pointer'>
                <AiOutlineWhatsApp style={{ fontSize: 20, color: 'white' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
