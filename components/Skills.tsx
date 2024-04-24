'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import SkillsDetail from './SkillsDetail'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    initial = {{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5,
    }}
    className='flex relative flex-col 
    text-center md:text-left xl:flex-row max-w-[2000] 
    min-h-screen justify-center xl:space-y-0 mx-auto
    items-center
     '>
        <Title text={'Skills'}/>
        <h3 className=' absolute top-36 uppercase tracking-[3px]
        text-gray-500 text-sm'>
            Hover over a skill for currency proficiency
        </h3>
        <div className='mt-10 xl:mt-20 mt md:mt-32 grid grid-cols-3 gap-5'>
            <SkillsDetail directionLeft={false}/>
            <SkillsDetail directionLeft={false}/>
            <SkillsDetail directionLeft={false}/>
            <SkillsDetail directionLeft={false}/>
            <SkillsDetail directionLeft={false}/>
            {/* <SkillsDetail directionLeft={false}/>
            <SkillsDetail directionLeft={false}/>
            <SkillsDetail directionLeft={false}/> */}
            <SkillsDetail directionLeft={false}/>
            <SkillsDetail directionLeft={true}/>
            <SkillsDetail directionLeft={true}/>
            <SkillsDetail directionLeft={true}/>
            

        </div>
    </motion.div>
  )
}

export default Skills