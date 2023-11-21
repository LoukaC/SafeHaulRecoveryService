'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { links } from '../lib/data'
import Link from 'next/link'
import MenuButton from './menu-button'
import { motion } from 'framer-motion'

export default function Header() {

    const [isOpen, setOpen] = useState(false);

  return (
    <header className='fixed z-10 flex justify-center items-center w-full bg-orange-50 h-24 '>
        <nav className='flex-col w-full h-full'>
            <div className='flex justify-between items-center h-full w-full'>
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
                    <ul className='hidden text-sm md:flex gap-2 mr-6 md:gap-4 md:text-lg transition '>
                        {links.map(link => (
                            <li key={link.hash}>
                                    <Link href={link.hash}>
                                        {link.name}
                                    </Link> 
                                </li>       
                        ))}
                    </ul>
                    <MenuButton className='md:hidden mr-4 cursor-pointer'
                        isOpen={isOpen}
                        onClick={() => setOpen(!isOpen)}
                        strokeWidth="5"
                        color="#000"
                        lineProps={{ strokeLinecap: "round" }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        width="24"
                        height="24"
                    />                      
            </div>
             <motion.div 
                className={
                   isOpen 
                    ? 'h-12 bg-orange-200 rounded-lg shadow-md ' 
                    : 'hidden'}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -100 }}   
            >   
                <div className='h-full w-full flex justify-center items-center'>
                    <ul className='w-full flex justify-center items-center gap-4 text-sm'>
                        {links.map(link => (
                            <li key={link.hash}>
                                <Link href={link.hash}>
                                    {link.name}
                                </Link> 
                            </li>
                        ))}
                    </ul>
                </div>                     
             </motion.div> 
        </nav>
    </header>
  )
}
 