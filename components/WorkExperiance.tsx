'use client'
import React from 'react'
import Card from './ExperianceCard'
import Title from './Title'
import ExperianceCard from './ExperianceCard'
import { motion } from 'framer-motion'

type Props = {}

function WorkExperiance({}: Props) {
  return (
    <motion.div 
    initial = {{
      opacity: 0,
  }}
  transition={{
      duration: 1.5,
  }}
  whileInView={{
      opacity: 1,
  }}
    className='flex flex-col relative h-screen  overflow-y-hidden text-left md:flex-row 
    max-w-full px-10 justify-evenly mx-auto  items-center'>
        <Title text={'Experience'}/>
        <div className='w-full flex space-x-5 overflow-x-scroll mt-24 snap-x p-7 snap-mandatory
    scrollbar-track-gray-400/20 scrollbar-thumb-[#778A35]/80 scrollbar-thin'>
          <ExperianceCard/>
          <ExperianceCard/>
          <ExperianceCard/>
          <ExperianceCard/>
        </div>
        
    </motion.div>
    
  )
}

export default WorkExperiance