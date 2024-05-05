'use client'
import { motion } from 'framer-motion'
import React from 'react';
import Title from './Title';

import { useEffect, useState } from 'react';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';


  type Props = {
    pageInfo:PageInfo
  };
  

export default function About({pageInfo}:Props)  {
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
    className='flex flex-col relative h-screen  text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <Title text={'About'}/>
        <motion.img
            initial = {{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{once: true}}
            src={urlFor(pageInfo?.profilePic).url()}
            className='mt-28 md:mt-0  md:mb-0 w-56 h-55 rounded-full object-cover
             md:rounded-sm md:w-72 sm:w-44 sm:h-64 md:h-95 xl:w-[400px] xl:h-[500px]'
        />
        return(
    
        <div className=' space-y-2 px-0 md:px-10'>
            <h4 className='text-3xl font-semibold'>
            
                <span className='hover:underline hover:tracking-[0.1px] text-[#778A35] transition-opacity
                 duration-1000 decoration-[#778A35]'>
                    little
                </span> background
            </h4>
            <p className=' text-base'>{pageInfo.backgroundInformation}
            </p>
        </div>

        )
    </motion.div>
  )
}