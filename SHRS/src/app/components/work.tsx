"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { deliveries, testimonies } from '../lib/data'
import CarouselSliderWork from './carousel-slider-work'
import { useSectionInView } from '../lib/hook'
import { motion } from 'framer-motion'
motion

export default function Work() {

  const {ref} = useSectionInView('Work', 0.5)

  return (
    <section ref={ref} id='work' className='flex-col justify-center items-center mb-32 scroll-mt-[7.5rem]'>
        <SectionHeading>Our work</SectionHeading>
        <motion.div 
          className='flex flex-wrap justify-center items-center gap-10 md:gap-28 md:flex-row px-2'
          initial={{opacity: 0, scale: 0.5}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.3}}
          viewport={{once: true}}
        >
          <CarouselSliderWork title='our deliveries' ListToMap={deliveries} />
          <CarouselSliderWork title='our testimonies' ListToMap={testimonies} />
      </motion.div>
      </section>
  )
}