'use client'
import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { carrouselImages } from '../lib/data';
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function CarouselSlider() {
  return (
    <Carousel 
      useKeyboardArrows={true} 
      showThumbs={false} interval={3000}  
      className='w-[90%] sm:-w[60rem] lg:w-[50rem]' 
      autoPlay 
      infiniteLoop 
      showArrows={true} 
      showStatus={false} 
      showIndicators={false} 
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? "absolute" : "hidden"
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-60 hover:opacity-100 z-20`}
          >
            <FaArrowCircleLeft 
              className="w-9 h-9 text-white cursor-pointer" 
              onClick={clickHandler}
            />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? "absolute" : "hidden"
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-60 hover:opacity-100 z-20`}
          >
            <FaArrowCircleRight 
            className="w-9 h-9 text-white cursor-pointer" 
              onClick={clickHandler}
            />
          </div>
        );
      }}
    >
        {carrouselImages.map(image => (
            <div key={image.name}>
                <Image src={image.imageUrl} alt={image.alt} className='w-full h-[20rem] sm:h-[30rem] lg:h-[30rem] object-cover rounded-2xl' />
            </div>
        ))
        }
    </Carousel>
  )
}
