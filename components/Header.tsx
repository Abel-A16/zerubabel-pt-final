'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
type Props = {}
function Header({}: Props) {
  return (
    <header className=' sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x:-500,
            opacity:0,
            scale:0.5

        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.5
        }}
        className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon
            url='https://www.youtube.com'
            bgColor='transparent'
            fgColor='gray'/>
            
            <SocialIcon
            url='https://www.youtube.com'
            bgColor='transparent'
            fgColor='gray'/>
            
            <SocialIcon
            url='https://www.youtube.com'
            bgColor='transparent'
            fgColor='gray'/>
            
            <SocialIcon
            url='https://www.youtube.com'
            bgColor='transparent'
            fgColor='gray'/>
        </motion.div>
        
        <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:0.5

        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }} 
        transition={{
            duration:1.5
        }}
        className=' flex flex-row items-center text-gray-300 cursor-pointer'>
        
        <a href="#contact" className='flex flex-row items-center'>
            <EnvelopeIcon className='text-[#778A35] h-7 w-7 mr-2 animate-pulse '/>
            <p className=' uppercase hidden md:inline-flex text-sm text-gray-400'>get in touch</p>
        </a>
        
        </motion.div>
    </header>
  )
}

export default Header