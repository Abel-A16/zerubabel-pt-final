import React from 'react';
import { motion } from 'framer-motion';

function ExperienceCard() {
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
        src="https://www.cozmoslabs.com/wp-content/uploads/2020/01/preview-full-630078_CozmoslabsMembershipWebsites_Op1_012120-600x250.png.webp"
        alt=""
      />
      <div className=" md:ml-1 ml-10 px-0 md:px-10">
        <h4 className="  text-2xl font-light">MEMBER OF HTECH</h4>
        <p className="font-bold text-xl mt-1">Some text here</p>
        <div className="flex space-x-2 mt-1">
          <img
            className="h-8 w-8 rounded-full"
            src="/html.png"
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
            src="/html.png"
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
            src="/html.png"
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
            src="/html.png"
            alt=""
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
