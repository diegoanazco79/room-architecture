'use client'

import React from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

const BannerSlider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout () {
          clearTimeout(timeout)
        }
        function nextTimeout () {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  return (
    <div ref={sliderRef} className='keen-slider'>
      <div className='keen-slider__slide h-[220px] lg:h-[450px] xl:h-[600px]'>
        <Image
          src='/img/slider/slider-1.jpg'
          alt='Picture of the author'
          layout='fill'
        />
      </div>
      <div className='keen-slider__slide h-[220px] lg:h-[450px] xl:h-[600px]'>
        <Image
          src='/img/slider/slider-2.jpg'
          alt='Picture of the author'
          layout='fill'
        />
      </div>
      <div className='keen-slider__slide h-[220px] lg:h-[450px] xl:h-[600px]'>
        <Image
          src='/img/slider/slider-3.jpg'
          alt='Picture of the author'
          layout='fill'
        />
      </div>
    </div>
  )
}

export default BannerSlider
