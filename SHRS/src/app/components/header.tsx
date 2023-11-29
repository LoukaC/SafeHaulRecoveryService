'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { links } from '../lib/data'
import Link from 'next/link'
import MenuButton from './menu-button'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useActiveSectionContext } from '../context/active-section-context'

export default function Header() {

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    const [isOpen, setOpen] = useState(false);

  return (
    <header className='fixed top-0 z-10 flex justify-center items-center w-full h-24 bg-color'>
        <nav className='flex-col w-[60rem] h-24'>
            <div className='flex flex-row justify-between items-center h-full'>
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
                    <motion.ul 
                        className='hidden text-sm md:flex gap-2 mr-6 md:gap-4 md:text-lg transition'
                        initial={{opacity: 0, y: -100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.01}}
                    >
                        {links.map(link => (
                            <li key={link.hash}>
                                    <Link 
                                        href={link.hash}
                                        className={clsx({
                                            'primary-color': activeSection === link.name,
                                        })}
                                        onClick={() => {
                                            setActiveSection(link.name), 
                                            setTimeOfLastClick(Date.now())
                                        }
                                        }
                                    >
                                        {link.name}
                                    </Link> 
                                </li>       
                        ))}
                    </motion.ul>
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
                    ? 'h-12 z-10 rounded-lg shadow-md -mt-6 bg-white' 
                    : 'hidden'}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}   
            >   
                <div className='h-full w-full flex justify-center items-center'>
                    <ul className='w-full flex justify-center items-center gap-4 text-sm'>
                        {links.map(link => (
                            <li key={link.hash}>
                                <Link 
                                    href={link.hash} 
                                    className={clsx({
                                        'primary-color': activeSection === link.name,
                                    })}
                                    onClick={() => setActiveSection(link.name)}
                                >
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
 