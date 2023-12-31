'use client'
import React from 'react'

import { useFormStatus } from 'react-dom'

export default function SubmitBtn() {

  const {pending} = useFormStatus()

  return (
    <button 
            type='submit' 
            className='group flex flex-row justify-center items-center gap-2 mt-4 text-white bg-secondary-color w-[8rem] h-[3rem] rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 hover-secondary-color-text hover-primary-color'
            disabled={pending}
        >{
            pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>:(
                <>
                    Submit
                </>
            )
        }
        </button>
  )
}
