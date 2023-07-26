import Image from 'next/image';
import Link from 'next/link';

export default function Header () {
  return (
    <nav className='fixed top-0 left-0 z-20 w-full bg-white'>
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-6 mx-auto'>
        <a href='/' className='flex items-center'>
          <Image
            src='/img/logo.png'
            width={140}
            height={140}
            alt='ROOM Arquitectos'
          />
        </a>
        <button className='inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg text-gray-950 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
          <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto'>
          <ul className='flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white'>
            <li>
              <Link className='block py-2 pl-3 pr-4 rounded text-gray-950 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 md:px-3' href='/'>
                Inicio
              </Link>
            </li>
            <li>
              <Link className='block py-2 pl-3 pr-4 rounded text-gray-950 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 md:px-3' href='/projects'>
                Proyectos
              </Link>
            </li>
            <li>
              <Link className='block py-2 pl-3 pr-4 rounded text-gray-950 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 md:px-3' href='/projects'>
                Nosotros
              </Link>
            </li>
            <li>
              <Link className='block py-2 pl-3 pr-4 rounded text-gray-950 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 md:px-3' href='/projects'>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='fixed top-0 right-0 w-4/5 h-screen bg-black opacity-30 md:hidden'>
        Hola
      </div>
    </nav>
  );
}
