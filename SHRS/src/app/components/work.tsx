import React from 'react'
import SectionHeading from './section-heading'
import CarouselSlider from './carousel-slider'
import { deliveries, testimonies } from '../lib/data'
import CarouselSliderWork from './carousel-slider-work'

export default function Work() {
  return (
    <section id='work' className='flex-col justify-center items-center pb-32 mx-5'>
        <SectionHeading>Our work</SectionHeading>
        <div className='flex flex-col justify-center items-center gap-10 md:gap-28 md:flex-row'>
          <CarouselSliderWork title='our deliveries' ListToMap={deliveries} />
          <CarouselSliderWork title='our testimonies' ListToMap={testimonies} />
      </div>
      </section>
  )
}