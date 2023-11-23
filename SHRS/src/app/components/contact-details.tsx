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
    <div className='bg-gray-200 border w-[18rem] h-[9.5rem] flex flex-col justify-start pl-3 pt-1 rounded-xl '>
        <h3 className='text-center font-medium capitalize mb-4 text-orange-600'>{title}</h3>
        <ul>
        {details.map((detail: Detail) => (
          <li key={detail.name} className='capitalize leading-6 pb-1'>
            <strong>{detail.name}:</strong> {detail.value}
          </li>
        ))}
      </ul>
      
    </div>
  )
}
