import React, { useState } from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function SkillsDetail({ skill, directionLeft }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Skill Image */}
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 
                         rounded-full object-cover transition-all duration-300 ease-in-out
                         shadow-lg group-hover:scale-105"
        style={{
          border: `2px solid ${isHovered ? "#22C55E" : "#3B82F6"}`,
          filter: isHovered ? "none" : "grayscale(30%)",
        }}
      />

      {/* Hover Overlay with Proficiency */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 0.9 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
        className="absolute rounded-full flex items-center justify-center
                         w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
        style={{ backgroundColor: "#0B0F19" }}
      >
        <div className="flex flex-col items-center justify-center">
          <span
            className="text-xl sm:text-2xl md:text-3xl font-bold"
            style={{ color: "#22C55E" }}
          >
            {skill?.progress}%
          </span>
          <span
            className="text-[8px] sm:text-xs mt-0.5"
            style={{ color: "#9CA3AF" }}
          >
            Proficiency
          </span>
        </div>
      </motion.div>

      {/* Tooltip on bottom */}
      <div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                         px-2 py-0.5 rounded text-xs whitespace-nowrap opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundColor: "#111827",
          color: "#9CA3AF",
          border: "1px solid #1F2937",
        }}
      >
        {skill?.title}
      </div>
    </div>
  );
}

export default SkillsDetail;
