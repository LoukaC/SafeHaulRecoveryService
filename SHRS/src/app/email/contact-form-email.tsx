import React from 'react'
import { Html, Body, Head, Heading, Hr, Text, Container, Preview, Section} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'


type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
    senderPhoneNumber: string;
}

export default function ContactFormEmail( {message, senderEmail, senderPhoneNumber} : ContactFormEmailProps) {
  return (
    <Html>
        <Head />
        <Preview>New message from portfolio website</Preview>
        <Tailwind>
            <Body className="bg-gray-100 text-black">
                <Container>
                    <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                        <Heading className="leading-tight">Message from Safe Haul Recovery Service&apos;s website</Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>The email&apos;s sender: {senderEmail}</Text>
                        <Text>The phone number&apos;s sender: {senderPhoneNumber}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
