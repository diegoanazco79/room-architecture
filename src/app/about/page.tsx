import History from './components/History'
import People from './components/People'

export default function AboutPage () {
  return (
    <main className='min-h-screen py-24 text-black bg-white lg:py-32'>
      <section
        className='lg:h-[400px] xl:h-[550px] bg-fixed bg-center bg-cover hidden md:block lg:mb-16'
        style={{ backgroundImage: 'url(https://i.imgur.com/pYWnXar.jpg)' }}
      />
      <div className='max-w-screen-xl mx-auto responsive-px-4'>
        <h1 className='text-4xl font-semibold text-center xs:my-4 sm:my-4 md:my-4 lg:my-8 lg:text-5xl'>
          ROOM Arquitectura y Construcción
        </h1>
        <History />
        <People />
      </div>
    </main>
  )
}
