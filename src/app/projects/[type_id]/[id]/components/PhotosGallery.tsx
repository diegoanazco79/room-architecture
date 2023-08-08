'use client'

import React from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'

import Photo from './Photo'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

interface Props {
  showGallery: boolean
  images: string[]
  setShowGallery: React.Dispatch<React.SetStateAction<boolean>>
}

const PhotosGallery = ({ showGallery, images, setShowGallery }: Props) => {
  const allSlides = images.map((src) => ({ src }))

  return (
    <Lightbox
      open={showGallery}
      close={() => setShowGallery(false)}
      slides={allSlides}
      render={{ slide: Photo }}
      plugins={[Fullscreen, Thumbnails]}
    />
  )
}

export default PhotosGallery
