'use client'
import React from 'react'
import Title from './Title'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'



type Props = {}


function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    const length = projects.length

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
        <div className=' relative w-full flex overflow-x-scroll   p-0 mx-0  overflow-y-hidden 
        snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#778A35]/80'>
            {projects.map((projects:any, i) => (
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
                        src="/netflix-header-600x328-removebg-preview.png" 
                        alt="" 
                        
                    />
                    <ArrowRightIcon className="flex-shrink-0 flex flex-row  space-y-3
                items-center justify-center   h-5 w-5 text-white-700 opacity-70" />

                    </div>
                    <div className='flex flex-col'>
                        <h4 className=' text-4xl font-semibold text-center'>
                            <span className=' underline decoration-[#778A35]'> 
                                Case Study {i + 1} of {length}:
                            </span>
                            UPS clone
                        </h4>
                        <p className=' text-lg text-center md:text-left'>
                        Netflix's user-friendly interface, personalized recommendations, and ability to binge-watch entire seasons have made it a go-to streaming platform for millions of people around the world, fundamentally changing the way we consume entertainment.
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