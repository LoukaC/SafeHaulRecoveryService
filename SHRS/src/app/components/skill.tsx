import React from 'react'
import { skills } from '../lib/data'

type SkillProps = typeof skills[number]

export default function Skill( {title, description, icon} : SkillProps) {
  return (
    <div className='rounded-xl border border-orange-500 pt-5 pb-2 px-4 max-w-[15rem]'>
        <div className='flex justify-center items-center text-4xl mb-3 text-orange-600'>{icon}</div>
        <h3 className='text-center font-medium mb-1'>{title}</h3>
        <p className='text-center text-sm leading-6'>{description}</p>
    </div>
  )
}
