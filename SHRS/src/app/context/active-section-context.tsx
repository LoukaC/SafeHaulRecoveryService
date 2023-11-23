"use client"
import React, { createContext, useContext, useState } from 'react'
import type { SectionName } from '../lib/types'

type ActiveSectionContextProps = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

//context
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

// provider
export default function ActiveSectionContextProvider({children}: ActiveSectionContextProps) {

    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
        {children}
    </ActiveSectionContext.Provider>
  )
}

// custom hook
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)
    
    if (context === null) {
      throw new Error('useActiveSectionContext must be used within an ActiveSectionContext')
    }
    return context
  }