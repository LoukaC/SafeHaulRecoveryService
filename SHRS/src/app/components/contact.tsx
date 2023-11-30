'use client'
import React from 'react'
import ContactForm from './contact-form'
import ContactList from './contact-list'
import { useSectionInView } from '../lib/hook'
import { motion } from 'framer-motion'

export default function Contact() {

  const {ref} = useSectionInView('Contact', 0.5)

  return (
    <motion.section 
      id='contact' 
      ref={ref} 
      className='scroll-mt-[7.5rem] mb-20 w-full flex flex-col justify-center items-center'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.3}}
      viewport={{once: true}}
    >
        <ContactForm />
        <ContactList />  
    </motion.section>
  )
}
