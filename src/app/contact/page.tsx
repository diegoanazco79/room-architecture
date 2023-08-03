'use client'

import GoogleMaps from './components/GoogleMaps'

export default function ContactPage () {
  return (
    <main className='min-h-screen py-32 text-black bg-white lg:px-24'>
      <div className='max-w-screen-xl mx-auto lg:px-16'>
        <GoogleMaps />
      </div>
    </main>
  )
}
