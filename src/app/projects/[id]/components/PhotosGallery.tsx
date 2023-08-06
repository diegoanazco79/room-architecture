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
  setShowGallery: React.Dispatch<React.SetStateAction<boolean>>
}

const PhotosGallery = ({ showGallery, setShowGallery }: Props) => {
  return (
    <Lightbox
      open={showGallery}
      close={() => setShowGallery(false)}
      slides={[{ src: 'https://i.imgur.com/RxR2yqE.jpg' }]}
      render={{ slide: Photo }}
      plugins={[Fullscreen, Thumbnails]}
    />
  )
}

export default PhotosGallery
