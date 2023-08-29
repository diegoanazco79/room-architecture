import Image from 'next/image'
import React from 'react'

interface Props {
  isDesktop: boolean;
}

const Services = ({ isDesktop }: Props) => {
  const gridClasses = isDesktop
    ? 'hidden grid-cols-3 gap-6 xl:grid mt-9'
    : 'gap-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:hidden lg:grid xs:grid sm:grid md:grid mt-9'

  return (
    <div className={gridClasses}>
      <div className='flex flex-col items-center'>
        <Image
          src='/svg/blue-print.svg'
          alt='blue-print'
          width={60}
          height={60}
        />
        <div className='flex flex-col items-center mt-4'>
          <h1 className='text-lg font-semibold text-center'>Diseño de proyectos</h1>
          <p className='w-5/6 mt-2 text-sm text-center'>
            Diseñamos tu proyecto soñado; trabajamos desde la visita a tu terreno hasta la obtención de tu licencia de construcción.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <Image
          src='/svg/interior-design.svg'
          alt='interior-design'
          width={60}
          height={60}
        />
        <div className='flex flex-col items-center mt-4'>
          <h1 className='text-lg font-semibold text-center'>
            Diseño de interiores
          </h1>
          <p className='w-5/6 mt-2 text-sm text-center'>
            Combinamos estilo y color, creamos espacios únicos y personalizados acorde a tus necesidades.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <Image
          src='/svg/construction.svg'
          alt='construction'
          width={60}
          height={60}
        />
        <div className='flex flex-col items-center mt-4'>
          <h1 className='text-lg font-semibold text-center'>
            Construcción de proyectos
          </h1>
          <p className='w-5/6 mt-2 text-sm text-center'>
            Hacemos realidad nuestros diseños, prestamos especial atención a cada detalle constructivo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
