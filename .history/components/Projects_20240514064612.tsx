'use client'
import React from 'react'
import Title from './Title'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Project } from '@/typings'
import { urlFor } from '@/sanity'



type Props = {
    projects: Project[]
}


function Projects({projects}: Props) {


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
    className=' h-screen relative flex 
    flex-col text-left md:flex-row max-w-full justify-evenly
    mx-auto items-center z-0'>
        <Title text={'Projects'}/>
        <div className='h-screen relative w-full flex overflow-x-scroll   p-0 mx-0  overflow-y-hidden 
        snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#778A35]/80'>
            {projects?.map((project, i) => (
                // eslint-disable-next-line react/jsx-key
                <div className='w-screen flex-shrink-0 snap-center flex flex-col  space-y-3
                items-center justify-center p-20 md:p-32 h-screen'>
                    <div className='flex flex-row justify-center items-center ' >
                    <ArrowLeftIcon className="flex-shrink-0  flex flex-row  space-y-3
                items-center justify-center   h-5 w-5 text-white-700 opacity-70" />
                    <motion.img
                        initial={{
                            y: -180,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 1.5,
                          }}
                          whileInView={{
                            y: 0,
                            opacity: 1,
                          }}
                          viewport={{ once: true }} 
                        src={urlFor(project?.image).url()}
                        alt="" 
                        
                    />
                    <ArrowRightIcon className="flex-shrink-0 flex flex-row  space-y-3
                items-center justify-center   h-5 w-5 text-white-700 opacity-70" />

                    </div>
                    <div className='flex flex-col'>
                        <h4 className=' text-4xl font-semibold text-center'>
                            <span className=' underline decoration-[#778A35]'> 
                                Case Study {i + 1} of {projects.length}:
                            </span>
                            {project?.title}
                        </h4>

                        {project?.t}

                        <p className=' text-lg text-center md:text-left'>
                        {project?.summary}
                        </p>
                    </div>

                </div>
            ))}
        </div>
        <div className=' w-full absolute top-[18%] bg-[#778A35]/10 left-0
        h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects