"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { competences, skills } from '../lib/data'
import { useSectionInView } from '../lib/hook'
import { motion } from 'framer-motion'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function About() {

  const {ref} = useSectionInView('About', 0.5)

  const fadeInAnimationVariants = {
    initial: {
        opacity: 0, 
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1, 
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    })   
  }




  return (
    <section ref={ref} id='about' className='mx-5 mb-32 scroll-mt-[7.5rem]'>
        <SectionHeading>About Us</SectionHeading>
        <motion.div 
          className='text-center'
          initial={{opacity: 0, y:100}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 0.2}}
          viewport={{once: true}}
          
        >
          <h3 className='capitalize text-xl mb-5 font-medium'>leading haulage company</h3>
          <p className='mb-10'>
            <span className="font-bold primary-color">ATK AUTO HAULAGE</span>{" "}
             is a <span className="font-bold primary-color ">professional car haulage</span>{" "}
             and vehicle recovery service with{" "}
            <span className="font-bold primary-color">over 10 years experience</span>{" "}
          in the car haulage industry.
          </p>
        </motion.div>
        <div className='flex flex-wrap gap-5 justify-center mb-20'>
          {
            skills.map((skill, index) => (
              <motion.div key={index}
                className='rounded-xl border pt-3 pb-2 px-4 max-w-[15rem] bg-secondary-color shadow-xl shadow-black/20'
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{once: true}}
              >
                  <div className='flex justify-center items-center text-4xl mb-2 primary-color'>
                    {skill.icon}
                  </div>
                  <h3 className='text-center font-medium mb-4 text-white'>{skill.title}</h3>
                  <p className='text-center text-sm leading-6 text-white'>{skill.description}</p>
              </motion.div>
            ))
          }
        </div>
        <div className='flex flex-col items-center gap-5'>
          {
            competences.map((competence, index) => (
              <motion.div 
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{once: true}}
              
              >
                <Accordion className='bg-primary-color max-w-[50rem] rounded-xl text-left secondary-color'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel1${index}-content`}
                    id={`panel1${index}a-header`}
                    className=''
                  >
                    <div className='flex items-center text-4xl text-white'>
                        {competence.icon}
                    </div>
                    <Typography className='flex justify-center items-center ml-3'>
                        {competence.title}    
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className='flex justify-center items-center gap-4'>
                    <Typography className='text-justify text-md leading-6'> 
                        {competence.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))
          }

        </div>
    </section>
  )

}