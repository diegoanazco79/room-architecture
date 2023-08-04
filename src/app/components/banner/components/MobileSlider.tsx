'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import ArrowSlider from './ArrowSlider'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

const MobileSlider = () => {
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

  const onChangeImage = (e: any) => e.stopPropagation() || instanceRef.current?.prev()

  return (
    <div ref={sliderRef} className='keen-slider aspect-square'>
      <div className='keen-slider__slide'>
        <Image src='/img/home/slider/mobile/slider-1.jpg' alt='slider-1' fill />
      </div>
      <div className='keen-slider__slide'>
        <Image src='/img/home/slider/mobile/slider-2.jpg' alt='slider-2' fill />
      </div>
      {loaded && instanceRef.current && (
        <>
          <ArrowSlider left onClick={onChangeImage} />
          <ArrowSlider onClick={onChangeImage} />
        </>
      )}
    </div>
  )
}

export default MobileSlider
