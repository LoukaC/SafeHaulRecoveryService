import React from 'react'
import { contacts } from '../lib/data'

type Detail = {
  name: string;
  value: string;
};

type ContactBoxProps = {
  title: string;
  details: Detail[];
};


export default function ContactDetails({title, details} : ContactBoxProps) {
  return (
    <div className='bg-secondary-color border w-[18rem] h-[10em] flex flex-col justify-start pl-3 pt-2 rounded-xl shadow-xl shadow-black/20'>
        <h3 className='text-center font-medium capitalize mb-4 primary-color'>{title}</h3>
        <ul>
        {details.map((detail: Detail) => (
          <li key={detail.name} className='capitalize leading-6 pb-1 text-white'>
            <strong>{detail.name}:</strong> {detail.value}
          </li>
        ))}
      </ul>
      
    </div>
  )
}
