'use client'
import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { carrouselImages } from '../lib/data';
import Image from 'next/image';

export default function CarouselSlider() {
  return (
    <Carousel useKeyboardArrows={true} showThumbs={false} interval={3000}  className='w-[90%] sm:-w[60rem] lg:w-[50rem]' autoPlay infiniteLoop showArrows={true} showStatus={false} showIndicators={false} >
        {carrouselImages.map(image => (
            <div key={image.name}>
                <Image src={image.imageUrl} alt={image.alt} className='w-full h-[20rem] sm:h-[30rem] lg:h-[30rem] object-cover' />
            </div>
        ))
        }
    </Carousel>
  )
}
