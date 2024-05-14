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
    <article className="flex flex-col rounded-lg items-center space-y-1 h-[600px] flex-shrink-0 w-[400px]
     md:w-[500px] xl:w-[900px] snap-center bg-[#292929] p-8 hover:opacity-100 opacity-40 
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
        className="w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={ urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="  px-0 md:px-10 " >
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
          {new Date(experience.dateStarted).toDateString()} - {" "}
          {experience.isCurentlyWorkingHere
            ? "present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 text-lg ml-5 
                      max-h-56 overflow-y-scroll scrollbar-thin scroll-my">
          {experience.points.map((point, i) => (
            <li key = {i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
