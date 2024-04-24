import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    directionLeft:boolean;
}

function SkillsDetail({ directionLeft}: Props) {
  return (
    <div className=' group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x:directionLeft ? -200 : 200,
                opacity:0
            }}
            transition={{
                duration: 1.5,
            }}
            whileInView={{
                opacity: 1,x:0
            }}
            className=" w-20 h-20 rounded-full border border-gray-500 
            object-cover md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition
            duration-300 ease-in-out " 
            src='/download-removebg-preview (3).png'
        />
        <div className=" absolute opacity-0 group-hover:opacity-80 
         transition duration-300 ease-in-out group-hover:bg-white 
         w-20 h-20 xl:w-32 xl:h-32 md:w-28 md:h-28 rounded-full z-0
         ">
            <div className=" flex items-center justify-center h-full">
                <div className=" text-3xl font-bold text-black opacity-100">100%</div>
            </div>
        </div>    
    </div>
    
  )
}

export default SkillsDetail