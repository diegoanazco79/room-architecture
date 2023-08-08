import React from 'react'

import { AiOutlineHome } from 'react-icons/ai'

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
        <div className='p-5 bg-black border rounded-full w-fit'>
          <AiOutlineHome style={{ fontSize: 35, color: 'white' }} />
        </div>
        <div className='flex flex-col items-center mt-4'>
          <h1 className='text-lg font-semibold text-center'>Diseño de Proyectos</h1>
          <p className='w-5/6 mt-2 text-sm text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='p-5 bg-black border rounded-full w-fit'>
          <AiOutlineHome style={{ fontSize: 35, color: 'white' }} />
        </div>
        <div className='flex flex-col items-center mt-4'>
          <h1 className='text-lg font-semibold text-center'>
            Diseño de Interiores
          </h1>
          <p className='w-5/6 mt-2 text-sm text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='p-5 bg-black border rounded-full w-fit'>
          <AiOutlineHome style={{ fontSize: 35, color: 'white' }} />
        </div>
        <div className='flex flex-col items-center mt-4'>
          <h1 className='text-lg font-semibold text-center'>
            Construcción de Proyectos
          </h1>
          <p className='w-5/6 mt-2 text-sm text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
