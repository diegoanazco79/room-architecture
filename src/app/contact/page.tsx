'use client'

import GoogleMaps from './components/GoogleMaps'
import Information from './components/Information'

export default function ContactPage () {
  return (
    <main className='min-h-screen pt-32 pb-20 text-black bg-white'>
      <div className='overflow-x-hidden text-black bg-white responsive-px-4'>
        <div className='w-full max-w-screen-xl mx-auto '>
          <div className='grid gap-6 gap-y-12 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            <Information />
            <GoogleMaps />
          </div>
        </div>
      </div>
    </main>
  )
}
