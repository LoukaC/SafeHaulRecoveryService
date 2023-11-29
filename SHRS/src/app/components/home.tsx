'use client'
import React from 'react'
import CarouselSlider from './carousel-slider'
import { carrouselImages } from '../lib/data';
import Image from 'next/image';
import { useSectionInView } from '../lib/hook';
import ContactBtn from './contact-btn';
import { motion } from 'framer-motion';



export default function Home() {

  const {ref} = useSectionInView("Home", 0.5)

  return (
    <section id='home' ref={ref} className='relative  flex-col md:flex-row flex justify-center items-center gap-5 mb-32 pt-32 md:pt-28 w-full'>
      <div className='md:w-[30%] flex flex-col justify-center items-center '>
          <motion.h1 
            className='text-2xl md:text-4xl font-bold text-amber-500 md:mb-2 text-center'
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.1}}
          >
            Safe Haul Recovery Service
          </motion.h1>
          <motion.p 
            className='text-xl md:text-xl font-bold secondary-color text-center mb-5 md:mb-10'
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.1, duration: 0.1}}
          >
            Your car, our care.
          </motion.p>
          <motion.div
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.2, duration: 0.1}}
          >
            <ContactBtn />
          </motion.div>
      </div>
      <motion.div 
        className=' w-[90%] md:w-[60%] md:max-w-[35rem] bg-secondary-color flex justify-center items-center rounded-3xl p-5 shadow-xl shadow-black/20'
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.1}}  
      >
        <CarouselSlider 
            useKeyboardArrows={true} 
            showThumbs={false} 
            interval={3000}  
            className='' 
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
                    className='h-[20rem] object-cover'
                    width={200}
                    height={200} 
                  />
              </div>
          ))
          }   
        </CarouselSlider>
      </motion.div>
    </section>
  )
}
