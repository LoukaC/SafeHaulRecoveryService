import React from 'react'
import { contacts } from '../lib/data'

type ContactBoxProps = typeof contacts[number]


export default function ContactBox({title, details: {
    
    }} : ContactBoxProps) {
  return (
    <div>
        <h3>{title}</h3>
        <div>
            {details.map(detail => (
                <div key={detail.name}>
                    <h4>{detail.name}</h4>
                    <p>{detail.value}</p>
                </div>
            
            ))}
        </div>
      
    </div>
  )
}
