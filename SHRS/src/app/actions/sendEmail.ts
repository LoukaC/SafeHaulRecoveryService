"use server"

import React from "react"
import { Resend } from "resend"
import { validateString, validateStringOfNumbers } from "../lib/utils"
import { getErrorMessage } from "../lib/utils"
import ContactFormEmail from "../email/contact-form-email"



const resend = new Resend(process.env.RESEND_API_KEY)



export const sendEmail = async (formData: FormData) => {
    
    const senderEmail = formData.get('senderEmail')
    const senderPhoneNumber = formData.get('senderPhoneNumber')
    const message = formData.get('message')

    if (!validateString(senderEmail, 500)) {
        return { error: 'Invalid sender email' }
    }

    if (!validateStringOfNumbers(senderPhoneNumber, 500)) {
        return { error: 'Invalid phone number' }
    } 

    if (!validateString(message, 5000)) {
        return { error: 'Invalid message' }
    }

    let data;
    try{

        data = await resend.emails.send({
            from: 'Contact Form <contact@louka.dev>',
            to: 'louka.cipolat@yahoo.fr',
            subject: 'Message from Safe Haul Recovery contact form',
            reply_to: senderEmail as string,
            text: message as string,
            react: React.createElement(ContactFormEmail,{
                senderEmail: senderEmail as string,
                senderPhoneNumber: senderPhoneNumber as string,
                message: message as string            
            })
        })
    } catch(error: unknown){

        return{
            error: getErrorMessage(error)
        }
    }

    return {
        data
    }
}