import React from 'react'
import ContactDetails from './contact-details'
import { contacts } from '../lib/data'

type Detail = {
  name: string;
  value: string;
};

export default function ContactList() {
  return (
    <div className='flex flex-col gap-5 md:flex-row md:flex-wrap justify-center items-center '>
       {contacts.map((contact, index) => {
        const detailsArray: Detail[] = Object.entries(contact.details).map(([name, value]) => ({ name, value: String(value) }));
        return <ContactDetails key={index} title={contact.title} details={detailsArray} />
      })}
    </div>
  )
}
