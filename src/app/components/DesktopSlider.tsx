'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import ArrowSlider from './ArrowSlider'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

const DesktopSlider = () => {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      created () {
        setLoaded(true)
      }
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
    <div ref={sliderRef} className='keen-slider aspect-[2/1]'>
      <div className='keen-slider__slide'>
        <Image src='/img/home/slider/desktop/slider-1.jpg' alt='slider-1' fill />
      </div>
      <div className='keen-slider__slide'>
        <Image src='/img/home/slider/desktop/slider-2.jpg' alt='slider-2' fill />
      </div>
      {loaded && instanceRef.current && (
        <>
          <ArrowSlider
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()}
          />
          <ArrowSlider
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()}
          />
        </>
      )}
    </div>
  )
}

export default DesktopSlider
