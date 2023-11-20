import React from 'react'
import { socials } from '../lib/data'

export default function Footer() {
  return (
    <footer className='mb-4 px4 text-center'>
        <p className='text-xl flex justify-center items-center mb-3'>
            {socials.map(social => (
                <a 
                    key={social.name} 
                    href={social.ref} 
                    target='_blank' 
        
                    className=''
                >
                    {social.icon}
                </a>
            ))
            }
        </p>
        <small className='mb-2 text-xs block'>
            © 2023 SHRS. All rights reserved.
        </small>
    </footer>
  )
}
