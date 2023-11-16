'use client'
import React, { ReactChild, ReactElement} from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { carrouselImages } from '../lib/data';
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

type CarouselSliderProps = {
  children: ReactChild[];
  useKeyboardArrows: boolean;
  showThumbs: boolean;
  interval: number;
  className: string;
  autoPlay: boolean;
  infiniteLoop: boolean;
  showArrows: boolean;
  showStatus: boolean;
  showIndicators: boolean;
  renderArrowPrev?: (onClickHandler: () => void, hasPrev: boolean, label: string) => ReactElement;
  renderArrowNext?: (onClickHandler: () => void, hasNext: boolean, label: string) => ReactElement;
}


export default function CarouselSlider({ children, useKeyboardArrows, showThumbs, interval, className, autoPlay, infiniteLoop, showArrows, showStatus, showIndicators
} : CarouselSliderProps ) {


  return (
    <Carousel
      useKeyboardArrows={useKeyboardArrows}
      showThumbs={showThumbs}
      interval={interval}
      className={className}
      autoPlay={autoPlay}
      infiniteLoop={infiniteLoop}
      showArrows={showArrows}
      showStatus={showStatus}
      showIndicators={showIndicators}

      renderArrowPrev={(clickHandler, hasPrev) => (
        <div
            className={`${
              hasPrev ? "absolute" : "hidden"
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-60 hover:opacity-100 z-20`}
          >
            <FaArrowCircleLeft 
              className="w-5 h-5 text-white cursor-pointer" 
              onClick={clickHandler}
            />
          </div>
      )}
      renderArrowNext={(clickHandler, hasNext) => (
          <div
            className={`${
              hasNext ? "absolute" : "hidden"
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-60 hover:opacity-100 z-20`}
          >
            <FaArrowCircleRight
              className="w-5 h-5 text-white cursor-pointer"
              onClick={clickHandler}
            />
          </div>
      )}
    >
      {children}
    </Carousel>
  )
}
