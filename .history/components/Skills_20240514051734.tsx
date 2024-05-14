'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import SkillsDetail from './SkillsDetail'
import { Skill } from '@/typings'

type Props = {
    skills: Skill[]
}

function Skills({skills}: Props) {
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
    text-center md:text-left xl:flex-row max-w-[2500] 
    min-h-screen justify-center xl:space-y-0 mx-auto
    items-center
     '>
        <Title text={'Skills'}/>
        <h3 className=' absolute top-36 uppercase tracking-[3px]
        text-gray-500 text-sm mb-12' >
            Hover over a skill for currency proficiency
        </h3>
        <div className='mt-5 lg:mt-12 md:mt-12 2xl:mt-12 grid grid-cols-4 gap-6'>
            {skills?.map((skill, index) => (

            <SkillsDetail key={skill._id} skill={skill} directionLeft={index < 4 || (index >= 8 && index < 12)}/>
            ))}
            

        </div>
    </motion.div>
  )
}

export default Skills