'use client'
import React from 'react'
import CarouselSlider from './carousel-slider'
import { carrouselImages } from '../lib/data';
import Image from 'next/image';
import { useSectionInView } from '../lib/hook';



export default function Home() {

  const {ref} = useSectionInView("Home", 0.5)

  return (
    <section id='home' ref={ref} className='relative flex-col flex justify-center items-center gap-5 mb-32 pt-32 md:pt-28'>
      <div className=' '>
        <h1 className='text-4xl md:text-6xl font-bold text-amber-500 mb-2 text-center'>
          Safe Haul Recovery Service
        </h1>
        <p className='text-xl md:text-3xl font-bold  text-center'>
          Your car is in safe our hands
        </p>
      </div>
      <CarouselSlider 
          useKeyboardArrows={true} 
          showThumbs={false} 
          interval={3000}  
          className='w-[100%] lg:w-[60rem]' 
          autoPlay 
          infiniteLoop 
          showArrows={false} 
          showStatus={false} 
          showIndicators={false}
      >
        {carrouselImages.map(image => (
            <div key={image.name}>
                <Image 
                  src={image.imageUrl} 
                  alt={image.alt} 
                  className='w-full h-[20rem] sm:h-[30rem] lg:h-[30rem] object-cover' 
                />
            </div>
        ))
        }   
      </CarouselSlider>
    </section>
  )
}
