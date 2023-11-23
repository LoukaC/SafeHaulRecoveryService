'use client'
import React, { useEffect } from 'react'
import ContactForm from './contact-form'
import ContactList from './contact-list'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '../context/active-section-context'
import { useSectionInView } from '../lib/hook'

export default function Contact() {

  const {ref} = useSectionInView('Contact', 0.5)

  return (
    <section id='contact' ref={ref} className='scroll-mt-[7.2rem] mb-20 w-full flex flex-col justify-center items-center '>
        <ContactForm />
        <ContactList />  
    </section>
  )
}
