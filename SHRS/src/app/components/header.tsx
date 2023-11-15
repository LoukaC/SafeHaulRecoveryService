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
    <header className='fixed w-full bg-transparent h-24'>
        <nav className='h-full w-full'>
            <div className='flex justify-between items-center h-full'>
                <Link href='/'>
                    <Image 
                        src='/logo.png' 
                        alt='logo SHRS' 
                        width={300} 
                        height={100} 
                        priority={true} 
                        className='cursor-pointer'
                    />
                </Link>
                <div>
                    <ul className='hidden text-sm sm:flex gap-2 mr-6 md:gap-4 md:text-lg transition '>
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
                                className='sm:hidden text-2xl cursor-pointer mr-6'
                                cursor='pointer'
                                onClick={handleMenu}
                            />
                        ) : (
                            <AiOutlineMenu
                                className='sm:hidden text-2xl cursor-pointer mr-6'
                                onClick={handleMenu}
                         />
                        )}   
                    </div>        
                    <div className={
                        showMenu 
                        ? 'fixed right-[50%] translate-x-[50%] top-24 w-[90%] h-12 bg-orange-200 rounded-lg shadow-2xl' 
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
 