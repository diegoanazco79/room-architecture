'use client'

import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { LinearProgress } from '@mui/material'
import { ReactElement, useEffect, useRef } from 'react'

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <span>Error</span>
  return <LinearProgress />
}

function MyMapComponent ({
  center,
  zoom
}: {
  center: { lat: number; lng: number };
  zoom: number;
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        mapTypeControl: false
      })

      // eslint-disable-next-line no-new
      new window.google.maps.Marker({
        position: { lat: -16.388973940561133, lng: -71.54942017449471 },
        map
      })
    }
  })

  return <div className='h-[400px]' ref={ref} id='map' />
}

const GoogleMaps = () => {
  const apiKey = 'AIzaSyArvfkDQ0MMMNF8J10-7B1fLyglgZvh0SI'

  const center = { lat: -16.388973940561133, lng: -71.54942017449471 }
  const zoom = 15

  return (
    <div>
      <h1 className='mb-2 text-4xl font-semibold text-left xs:text-3xl'>Úbicanos</h1>
      <p className='mb-4'>Dirección: Calle Los Cóndores 123 - Urb. Valle Hermoso - Cerro Colorado</p>
      <Wrapper apiKey={apiKey} render={render}>
        <MyMapComponent center={center} zoom={zoom} />
      </Wrapper>
    </div>
  )
}

export default GoogleMaps
