import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <>
      <h6 className='mb-2 text-base font-light'>LOS DETALLES CUENTAN</h6>
      <h1 className='mb-12 text-4xl font-semibold text-left xs:text-3xl'>¿Por qué elegirnos?</h1>
      <div className='grid gap-6 gap-y-10 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        <div className='flex flex-col items-center'>
          <Image
            src='/svg/home-paint.svg'
            alt='home-paint'
            width={70}
            height={70}
          />
          <div className='flex flex-col items-center mt-4'>
            <h1 className='text-lg font-semibold text-center'>Especialistas en diseño residencial</h1>
            <p className='w-5/6 mt-2 text-center'>Creamos espacios modernos y sofisticados utilizando siempre las últimas tendencias en el mercado.</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            src='/svg/laptop-home.svg'
            alt='laptop-home'
            width={70}
            height={70}
          />
          <div className='flex flex-col items-center mt-4'>
            <h1 className='text-lg font-semibold text-center'>Comunicación 100% visual</h1>
            <p className='w-5/6 mt-2 text-center'>Utilizamos herramientas 3D para mostrar claramente nuestras propuestas.</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            src='/svg/check-human.svg'
            alt='check-human'
            width={70}
            height={70}
          />
          <div className='flex flex-col items-center mt-4'>
            <h1 className='text-lg font-semibold text-center'>Más de 8 años de experiencia </h1>
            <p className='w-5/6 mt-2 text-center'>Nuestra experiencia garantiza un trabajo de calidad sin contratiempos ni errores.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
