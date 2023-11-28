'use client'

import React from 'react'
import { competences } from '../lib/data'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





type CompetenceProps = typeof competences[number]

export default function Competence({title, description, icon}: CompetenceProps) {




  return (
    <div>
      <Accordion className='bg-primary-color max-w-[50rem] rounded-xl text-left secondary-color'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={title}
          className=''
        >
          <div className='flex items-center text-4xl text-white'>
              {icon}
          </div>
          <Typography className='flex justify-center items-center ml-3'>
              {title}    
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='flex justify-center items-center gap-4'>
          <Typography className='text-justify text-md leading-6'>
            
              {description}
            
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
