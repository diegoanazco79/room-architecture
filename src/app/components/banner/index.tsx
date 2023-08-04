'use client'

import React from 'react'

import MobileSlider from './components/MobileSlider'
import DesktopSlider from './components/DesktopSlider'

import { useMediaQuery } from '@mui/material'

import 'keen-slider/keen-slider.min.css'

const BannerSlider = () => {
  const isMobile = useMediaQuery('(max-width: 475px)')

  return (
    <>
      {isMobile ? <MobileSlider /> : <DesktopSlider />}
    </>
  )
}

export default BannerSlider
