'use client'

import React from 'react'

import MobileSlider from './MobileSlider'
import DesktopSlider from './DesktopSlider'

import { useMediaQuery } from '@mui/material'

import 'keen-slider/keen-slider.min.css'

const BannerSlider = () => {
  const isMobile = useMediaQuery('(max-width: 475px)')

  return (
    <>
      {isMobile
        ? <MobileSlider />
        : <DesktopSlider />}
    </>
  )
}

export default BannerSlider
