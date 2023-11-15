import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Safe Haul Recovery Service',
  description: 'Safe Haul Recovery Service is a professional car haulage and vehicle recovery service with over 10 years experience',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-orange-50 text-gray-950`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
