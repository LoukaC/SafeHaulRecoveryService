import { type } from 'os'
import React from 'react'
import { competences } from '../lib/data'


type CompetenceProps = typeof competences[number]

export default function Competence({title, description, icon}: CompetenceProps) {
  return (
    <div className='flex justify-center items-center gap-3 rounded-xl bg-orange-300 pt-2 pb-2 px-4 max-w-[50rem] mb-5'>
        <div className='flex items-center text-4xl mb-3 text-gray-700'>{icon}</div>
        <div className='flex-col'>
            <h3 className='text-start font-medium mb-1 text-gray-700'>{title}</h3>
            <p className='text-start text-sm leading-6 text-gray-700'>{description}</p>
        </div>    
    </div>
  )
}
