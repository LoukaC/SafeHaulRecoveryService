import React from 'react'
import { skills } from '../lib/data'

type SkillProps = typeof skills[number]

export default function Skill( {title, description, icon} : SkillProps) {
  return (
    <div className='rounded-xl border pt-3 pb-2 px-4 max-w-[15rem] bg-secondary-color'>
        <div className='flex justify-center items-center text-4xl mb-2 primary-color'>{icon}</div>
        <h3 className='text-center font-medium mb-2 text-white'>{title}</h3>
        <p className='text-center text-sm leading-6 text-white'>{description}</p>
    </div>
  )
}
