"use client"
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import CarouselSlider from './carousel-slider'
import { deliveries, testimonies } from '../lib/data'
import CarouselSliderWork from './carousel-slider-work'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '../context/active-section-context'
import { useSectionInView } from '../lib/hook'

export default function Work() {

  const {ref} = useSectionInView('Work', 0.5)

  return (
    <section ref={ref} id='work' className='flex-col justify-center items-center mb-32 scroll-mt-[7.2rem]'>
        <SectionHeading>Our work</SectionHeading>
        <div className='flex flex-col justify-center items-center gap-10 md:gap-28 md:flex-row'>
          <CarouselSliderWork title='our deliveries' ListToMap={deliveries} />
          <CarouselSliderWork title='our testimonies' ListToMap={testimonies} />
      </div>
      </section>
  )
}