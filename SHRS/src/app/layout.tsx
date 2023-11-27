import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import './globals.css'
import ActiveSectionContextProvider from './context/active-section-context'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Safe Haul Recovery Service',
  description: 'Safe Haul Recovery Service is a professional car haulage and vehicle recovery service with over 10 years experience',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-color flex flex-col justify-start items-center`}
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position='top-right'/>
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
