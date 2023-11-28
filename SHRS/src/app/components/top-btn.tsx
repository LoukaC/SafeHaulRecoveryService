'use client'
import React, { use, useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { useScrollButton } from '../lib/hook';

export default function TopBtn() {

    const showButton = useScrollButton(400);


  return (
    <button 
        className='fixed bottom-5 right-2 bg-white w-[2rem] h-[2rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-md rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all md:w-[3rem] md:h-[3rem]'
        style={{display: showButton ? 'flex' : 'none'}}
    >
        <a href="#home">
            <IoIosArrowUp />
        </a>
    </button>
  )
}
