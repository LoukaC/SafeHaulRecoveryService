"use client"
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { competences, skills } from '../lib/data'
import Skill from './skill'
import Competence from './competence'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '../context/active-section-context'
import { useSectionInView } from '../lib/hook'

export default function About() {

  const {ref} = useSectionInView('About', 0.5)

  return (
    <section ref={ref} id='about' className='mx-5 mb-32 scroll-mt-[7.2rem]'>
        <SectionHeading>About Us</SectionHeading>
        <div className='text-center'>
          <h3 className='capitalize text-xl mb-3 font-medium'>leading haulage company</h3>
          <p className='mb-5'>
            <span className="font-bold primary-color">SHRS</span>{" "}
             is a <span className="font-bold primary-color ">professional car haulage</span>{" "}
             and vehicle recovery service with{" "}
            <span className="font-bold primary-color">over 10 years experience</span>{" "}
          in the car haulage industry.
          </p>
        </div>
        <div className='flex flex-wrap gap-5 justify-center mb-5'>
          {
            skills.map((skill,index) => (
              <React.Fragment key={index}>
                <Skill {...skill}/>
              </React.Fragment>
            ))
          }
        </div>
        <div className='flex flex-col items-center'>
          {
            competences.map((competence,index) => (
              <React.Fragment key={index}>
                <Competence {...competence}/>
              </React.Fragment>
            ))
          }

        </div>
    </section>
  )

}