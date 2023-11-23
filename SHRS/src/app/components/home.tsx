
import React from 'react'
import CarouselSlider from './carousel-slider'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { carrouselImages } from '../lib/data';
import Image from 'next/image';


export default function Home() {
  return (
    <section id='home' className='flex justify-center items-center mb-32 pt-36 md:pt-24'>
        <CarouselSlider 
          useKeyboardArrows={true} 
          showThumbs={false} 
          interval={3000}  
          className='w-[90%] sm:-w[60rem] lg:w-[50rem]' 
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
                  className='w-full h-[20rem] sm:h-[30rem] lg:h-[30rem] object-cover rounded-xl' 
                />
            </div>
        ))
        }   
        </CarouselSlider>
    </section>
  )
}
