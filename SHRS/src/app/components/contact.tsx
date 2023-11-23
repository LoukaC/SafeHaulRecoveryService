import React from 'react'
import ContactForm from './contact-form'
import ContactList from './contact-list'

export default function Contact() {
  return (
    <section id='contact' className='scroll-mt-36 mb-20 w-full flex flex-col justify-center items-center'>
        <ContactForm />
        <ContactList />  
    </section>
  )
}
