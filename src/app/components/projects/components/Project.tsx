'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useMediaQuery } from '@mui/material'

interface Props {
  name: string
  description: string
  year: string
  desktopImage: string
  mobileImage: string
  url: string
  reverse: boolean
}

const Project = ({
  name, description, year, desktopImage, mobileImage, url, reverse
}: Props) => {
  const isTablet = useMediaQuery('(max-width: 930px)')

  return (
    <>
      {isTablet
        ? (
          <div className='grid items-center grid-cols-1 gap-6 py-6 sm:grid-cols-2 md:grid-cols-2'>
            <div className='relative aspect-square'>
              <Link href={`projects/${url}`}>
                <Image
                  className='aspect-square'
                  src={mobileImage}
                  alt={`mobile-${name}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Link>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-semibold'>{name}</h1>
              <p className='mt-2 text-sm'>{description}</p>
              <Link
                className='mt-6 text-sm text-black underline hover:font-semibold w-fit'
                href={`projects/${url}`}
              >
                Ver proyecto
              </Link>
            </div>

          </div>
        )
        : (
          <div className='grid items-center grid-cols-3 gap-6 py-6'>
            {!reverse && (
              <div className='col-span-2 relative aspect-[2/1]'>
                <Link href={`projects/${url}`}>
                  <Image
                    className='aspect-[2/1]'
                    src={desktopImage}
                    alt={`desktop-${name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
              </div>
            )}
            <div className={`flex flex-col ${reverse && 'text-right'}`}>
              <span className='my-6 text-sm md:hidden xl:block lg:block'>{year}</span>
              <h1 className='text-2xl font-semibold'>{name}</h1>
              <p className='mt-2 text-sm'>{description}</p>
              <div className='w-full mt-6 '>
                <Link
                  className={`text-sm text-black underline hover:font-semibold w-fit ${reverse && 'text-right'}`}
                  href={`projects/${url}`}
                >
                  Ver proyecto
                </Link>
              </div>
            </div>
            {reverse && (
              <div className='md:col-span-2 relative xs:aspect-square aspect-[2/1]'>
                <Link href={`projects/${url}`}>
                  <Image
                    className='xs:aspect-square aspect-[2/1]'
                    src={desktopImage}
                    alt={`desktop-${name}`}
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
