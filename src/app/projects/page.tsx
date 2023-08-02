import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsPage () {
  return (
    <main className='min-h-screen py-32 text-black bg-white lg:px-24'>
      <div className='max-w-screen-xl mx-auto'>
        <h1 className='text-[35px] font-semibold lg:text-[60px] text-center'>Proyectos Destacados</h1>
        <div className='grid w-full h-full gap-4 p-8 sm:grid-cols-1 md:grid-cols-2 gap-y-14 lg:p-10 lg:mt-4 lg:grid-cols-3 lg:gap-12 lg:gap-y-20'>
          <Link href='/projects/casa-arias'>
            <div className='relative min-h-[300px]'>
              <Image
                className='cursor-pointer hover:bg-black hover:opacity-70'
                src='/img/home/projects/arias-home.jpg'
                alt='arias-home'
                fill
              />
            </div>
            <div className='cursor-pointer w-fit'>
              <h4 className='mt-4 ml-4 text-2xl font-semibold'>Casa Arias</h4>
              <h4 className='ml-4 text-xs font-semibold opacity-30'>DESCRIPCIÓN</h4>
            </div>
          </Link>
          <Link href='/projects/casa-leon'>
            <div className='relative min-h-[300px]'>
              <Image
                className='cursor-pointer hover:bg-black hover:opacity-70'
                src='/img/home/projects/leon-home.jpg'
                alt='leon-home'
                fill
              />
            </div>
            <div className='cursor-pointer w-fit'>
              <h4 className='mt-4 ml-4 text-2xl font-semibold'>Casa de León</h4>
              <h4 className='ml-4 text-xs font-semibold opacity-30'>DESCRIPCIÓN</h4>
            </div>
          </Link>
          <Link href='projects/casa-montes-oca'>
            <div className='relative min-h-[300px]'>
              <Image
                className='cursor-pointer hover:bg-black hover:opacity-70'
                src='/img/home/projects/montes-home.jpg'
                alt='montes-home'
                fill
              />
            </div>
            <div className='cursor-pointer w-fit'>
              <h4 className='mt-4 ml-4 text-2xl font-semibold'>Casa Montes de Oca</h4>
              <h4 className='ml-4 text-xs font-semibold opacity-30'>DESCRIPCIÓN</h4>
            </div>
          </Link>
          <Link href='/projects/casa-leon'>
            <div className='relative min-h-[300px]'>
              <Image
                className='cursor-pointer hover:bg-black hover:opacity-70'
                src='/img/home/projects/leon-home.jpg'
                alt='leon-home'
                fill
              />
            </div>
            <div className='cursor-pointer w-fit'>
              <h4 className='mt-4 ml-4 text-2xl font-semibold'>Casa de León</h4>
              <h4 className='ml-4 text-xs font-semibold opacity-30'>DESCRIPCIÓN</h4>
            </div>
          </Link>
          <Link href='projects/casa-montes-oca'>
            <div className='relative min-h-[300px]'>
              <Image
                className='cursor-pointer hover:bg-black hover:opacity-70'
                src='/img/home/projects/montes-home.jpg'
                alt='montes-home'
                fill
              />
            </div>
            <div className='cursor-pointer w-fit'>
              <h4 className='mt-4 ml-4 text-2xl font-semibold'>Casa Montes de Oca</h4>
              <h4 className='ml-4 text-xs font-semibold opacity-30'>DESCRIPCIÓN</h4>
            </div>
          </Link>
          <Link href='/projects/casa-arias'>
            <div>
              <div className='relative min-h-[300px]'>
                <Image
                  className='cursor-pointer hover:bg-black hover:opacity-70'
                  src='/img/home/projects/arias-home.jpg'
                  alt='arias-home'
                  fill
                />
              </div>
              <div className='cursor-pointer w-fit'>
                <h4 className='mt-4 ml-4 text-2xl font-semibold'>Casa Arias</h4>
                <h4 className='ml-4 text-xs font-semibold opacity-30'>DESCRIPCIÓN</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
