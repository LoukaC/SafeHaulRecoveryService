import React from 'react'
import SectionHeading from './section-heading'
import SubmitBtn from './submit-btn'
import { sendEmail } from '../actions/sendEmail'
import toast from 'react-hot-toast'

export default function ContactForm() {
  

  return (
    <div className='mb-20 w-full flex flex-col justify-center items-center'>
      <SectionHeading>Contact us</SectionHeading>
      <p className='text-center' >
        We are always ready to help you with your deliveries and logistics needs. 
        <br />
        Please fill the form below to get started.
      </p>
      <form 
          className='mt-14 flex flex-col w-[min(90%,38rem)] ' 
          action={async (formData) => {
            const {data, error} = await sendEmail(formData)
            
            if(error) {
                    toast.error(error)
                    return
                }
                toast.success("Email sent successfully!")
          }}
        >
            <input 
                name='senderEmail'
                type="email"
                placeholder='Your email'
                required
                maxLength={500}
                className='h-14 border border-black/10 rounded-lg p-4 outline-none'
            />
            <input 
                name='senderPhoneNumber'
                type='tel'
                placeholder='Your phone number'
                required
                maxLength={500}
                className='h-14 my-3 border border-black/10 rounded-lg p-4 outline-none '
            />
            <textarea 
                name='message'
                placeholder='Your message'
                required
                maxLength={5000}
                className='h-52 border border-black/10 rounded-lg p-4 outline-none'
            />
            <SubmitBtn />
        </form>
    </div>
  )
}
