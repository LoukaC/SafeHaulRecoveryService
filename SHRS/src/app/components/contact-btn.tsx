import Link from 'next/link'
import React from 'react'
import { useActiveSectionContext } from '../context/active-section-context'
import { BsArrowDown } from 'react-icons/bs'

export default function ContactBtn() {

    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext()

  return (
    <button>
      <Link
        href="#contact"
        className="group flex justify-center items-center gap-2 bg-secondary-color text-white w-[13rem] py-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover-primary-color hover-secondary-color-text active:scale-105 transition"
        onClick={ () => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
        }}
            >
                Contact us here
                <BsArrowDown
                    className="opacity-70 group-hover:translate-y-1.5 transition"
                />
            </Link>
    </button>
  )
}
