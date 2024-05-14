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
    text-center md:text-left xl:flex-row max-w-[2000] 
    min-h-screen justify-center xl:space-y-0 mx-auto
    items-center
     '>
        <Title text={'Skills'}/>
        <h3 className=' absolute top-36 uppercase tracking-[3px]
        text-gray-500 text-sm'>
            Hover over a skill for currency proficiency
        </h3>
        <div className='mt-0 xl:mt-28 md:mt-32 grid grid-cols-4 gap-5'>
            {skills?.map((skill, index) => (

            <SkillsDetail key={skill._id} skill={skill} directionLeft={index < 3 || (index >= 6 && index < 9)}/>
            ))}
            

        </div>
    </motion.div>
  )
}

export default Skills