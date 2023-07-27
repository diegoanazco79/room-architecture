'use client';

import React from 'react';
import Image from 'next/image';

import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

export default function Footer () {
  return (
    <footer className='py-12 bg-black '>
      <div className='w-full max-w-screen-xl px-4 mx-auto'>
        <div className='md:flex md:justify-between'>
          <div className='grid w-full grid-cols-2 gap-8'>
            <div className='flex flex-col justify-start'>
              <Image
                src='/img/logo-white.png'
                width={140}
                height={140}
                alt='ROOM Arquitectos'
              />
              <p className='w-4/5 mt-4 text-xs'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className='flex flex-col items-end justify-start'>
              <h1 className='flex items-center font-bold text-lg h-[52.5px] my-auto'>Contacto</h1>
              <div className='flex flex-col items-end mt-4'>
                <span className='mb-3 text-xs'>+51 999 999 999</span>
                <span className='mb-3 text-xs'>roomArquitectos@room.com</span>
                <span className='text-xs'>Calle Los Cóndores 123 - Urb. Valle Hermoso - Cerro Colarado</span>
                <span className='text-xs'>Arequipa - Perú</span>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-3 border-[#414141]' />
      </div>
      <div className='w-full max-w-screen-xl px-4 pt-2 mx-auto'>
        <div className='md:flex md:justify-between'>
          <div className='grid w-full grid-cols-2 gap-8'>
            <div className='flex flex-col justify-start'>
              <span className='text-xs'>© 2023 ROOM Arquitectos</span>
            </div>
            <div className='flex justify-end'>
              <a className='mr-4 cursor-pointer'>
                <FacebookFilled style={{ fontSize: 20 }} />
              </a>
              <a className='mr-4 cursor-pointer'>
                <InstagramFilled style={{ fontSize: 20 }} />
              </a>
              <a className='cursor-pointer'>
                <LinkedinFilled style={{ fontSize: 20 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
