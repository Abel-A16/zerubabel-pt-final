import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Experience } from '@/typings';

type Props = {
  experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-2 h-[550px] flex-shrink-0 w-[500px]
     md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience.companyImage}
        alt=""
      />
      <div className=" md:ml-1 ml-10 px-0 md:px-10">
        <h4 className="  text-2xl font-light">MEMBER OF HTECH</h4>
        <p className="font-bold text-xl mt-1">Some text here</p>
        <div className="flex space-x-2 mt-1">
          <Image
            className="h-8 w-8 rounded-full"
            src="/html.png"
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="h-8 w-8 rounded-full"
            src="/html.png"
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="h-8 w-8 rounded-full"
            src="/html.png"
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="h-8 w-8 rounded-full"
            src="/html.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <p className="uppercase text-gray-300 py-5">Started work... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
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
