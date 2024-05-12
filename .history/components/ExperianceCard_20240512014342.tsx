/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <article className=" snap-mandatory flex flex-col rounded-lg items-center space-y-2 h-[550px] flex-shrink-0 w-[500px]
     md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
     cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
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
        className="w-32 h-32 rounded-full xl:rounded-full object-cover object-center"
        src={ urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className=" md:ml-1  px-0 md:px-10">
        <h4 className="  text-2xl font-light">MEMBER OF HTECH</h4>
        <p className="font-bold text-xl mt-1">Some text here</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map(technology => (
            <img 
              key={technology._id}
              src={urlFor(technology.image).url()}
              className='h-10 w-10 rounded-full'
              alt=''
            />
          ))}
        </div>
        <p className="uppercase text-gray-300 py-5">
          {new Date(experience.dateStarted).toDateString()} - {" "}{experience.isCurentlyWorkingHere
          ? "present"
          : new Date()}
        </p>
        <ul className="list-disc space-y-4 text-lg">
          <li>Summary pointers Summary pointers Summary pointers Summary pointers</li>
          <li>Summary pointers Summary pointers Summary pointers Summary pointers</li>
          <li>Summary pointers Summary pointers Summary pointers Summary pointers</li>
          <li>Summary pointers Summary pointers Summary pointers Summary pointers</li>
          <li>Summary pointers Summary pointers Summary pointers Summary pointers</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
