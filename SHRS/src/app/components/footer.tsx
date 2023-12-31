import React from 'react'
import { socials } from '../lib/data'

export default function Footer() {
  return (
    <footer className='mb-2 px4 text-center'>
        <p className='text-xl flex justify-center items-center mb-1'>
            {socials.map(social => (
                <a 
                    key={social.name} 
                    href={social.ref} 
                    target='_blank' 
                    className='secondary-color hover-primary-color-text'
                    aria-label={social.name}
                >
                    {social.icon}
                </a>
            ))
            }
        </p>
        <small className=' text-xs block'>
            © 2023 ATK AUTO HAULAGE. All rights reserved.
        </small>
    </footer>
  )
}
