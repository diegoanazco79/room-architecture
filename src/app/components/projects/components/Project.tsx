'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useMediaQuery } from '@mui/material'

interface Props {
  reverse: boolean
}

const Project = ({ reverse }: Props) => {
  const isTablet = useMediaQuery('(max-width: 930px)')

  return (
    <>
      {isTablet
        ? (
          <div className='grid items-center grid-cols-1 gap-6 py-6 sm:grid-cols-2 md:grid-cols-2'>
            <div className='relative aspect-square'>
              <Link href='/projects/'>
                <Image
                  className='cursor-pointer hover:opacity-50 aspect-square'
                  src='/img/home/slider/mobile/slider-1.jpg'
                  alt='feature-project-1'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Link>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-semibold'>Casa de León</h1>
              <p className='mt-2 text-sm'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <Link className='mt-6 text-sm text-black underline hover:font-semibold w-fit' href='/projects/'>
                Ver proyecto
              </Link>
            </div>

          </div>
        )
        : (
          <div className='grid items-center grid-cols-3 gap-6 py-6'>
            {!reverse && (
              <div className='col-span-2 relative aspect-[2/1]'>
                <Link href='/projects/'>
                  <Image
                    className='cursor-pointer hover:opacity-50 aspect-[2/1]'
                    src='/img/home/slider/desktop/slider-1.jpg'
                    alt='feature-project-1'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
              </div>
            )}
            <div className={`flex flex-col ${reverse && 'text-right'}`}>
              <span className='my-6 text-sm md:hidden xl:block lg:block'>2010</span>
              <h1 className='text-2xl font-semibold'>Casa de León</h1>
              <p className='mt-2 text-sm'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className='w-full mt-6 '>
                <Link className={`text-sm text-black underline hover:font-semibold w-fit ${reverse && 'text-right'}`} href='/projects/'>
                  Ver proyecto
                </Link>
              </div>
            </div>
            {reverse && (
              <div className='md:col-span-2 relative xs:aspect-square aspect-[2/1]'>
                <Link href='/projects/'>
                  <Image
                    className='cursor-pointer hover:opacity-50 xs:aspect-square aspect-[2/1]'
                    src='/img/home/slider/desktop/slider-1.jpg'
                    alt='feature-project-1'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
              </div>
            )}
          </div>
        )}
    </>
  )
}

export default Project
