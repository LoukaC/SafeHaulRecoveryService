import React from 'react'
import CarouselSlider from './carousel-slider'
import Image, { ImageProps, StaticImageData } from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';


type CarouselSliderWorkProps = {
    title: string,
    ListToMap: ReadonlyArray<{
        imageUrl: string | StaticImport;
        name: string;
    }>;
    }


export default function CarouselSliderWork({title, ListToMap}: CarouselSliderWorkProps) {
  return (
    <div>
        <h3 className='capitalize text-center font-medium mb-3'>{title}</h3>
        <CarouselSlider 
            useKeyboardArrows={true} 
            showThumbs={false} 
            interval={3000}  
            className='max-w-[15rem]'
            autoPlay 
            infiniteLoop 
            showArrows={false} 
            showStatus={false} 
            showIndicators={false}
          >
            {ListToMap.map(list => (
              <div key={list.name}>
                  <Image 
                    src={list.imageUrl} 
                    alt={list.name} 
                    className='object-cover  h-72 md:h-96 rounded-xl'                  
                />
              </div>
          ))
          }
        </CarouselSlider>
    </div>
  )
}
