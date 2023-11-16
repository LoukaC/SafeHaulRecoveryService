'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { links } from '../lib/data'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

export default function Header() {

    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }





  return (
    <header className='fixed w-full bg-orange-50 h-24 z-[99] lg:w-[70%] lg:left-1/2 lg:-translate-x-1/2'>
        <nav className='h-full w-full'>
            <div className='flex justify-between items-center h-full'>
                <Link href='/'>
                    <Image 
                        src='/logo.png' 
                        alt='logo SHRS' 
                        width={250} 
                        height={100} 
                        priority={true} 
                        className='cursor-pointer'
                    />
                </Link>
                <div>
                    <ul className='hidden text-sm md:flex gap-2 mr-6 md:gap-4 md:text-lg transition '>
                        {links.map(link => (
                            <li key={link.hash}>
                                    <Link href={link.hash}>
                                        {link.name}
                                    </Link> 
                                </li>       
                        ))}
                    </ul>
                    <div>
                        { showMenu ?(
                            <AiOutlineClose
                                className='md:hidden text-2xl cursor-pointer mr-6'
                                cursor='pointer'
                                onClick={handleMenu}
                            />
                        ) : (
                            <AiOutlineMenu
                                className='md:hidden text-2xl cursor-pointer mr-6'
                                onClick={handleMenu}
                         />
                        )}   
                    </div>        
                    <div className={
                        showMenu 
                        ? 'fixed right-[50%] translate-x-[50%] top-[4.8rem] w-[20rem] h-12 bg-orange-200 rounded-lg shadow-md' 
                        : 'hidden'}
                    >   
                            <div className='fixed w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  '>
                                <ul className='w-full flex justify-center items-center gap-2 text-xs'>
                                     {links.map(link => (
                                        <li key={link.hash}>
                                            <Link href={link.hash}>
                                                {link.name}
                                            </Link> 
                                        </li>
                                    ))}
                                </ul>
                            </div>                     
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}
 