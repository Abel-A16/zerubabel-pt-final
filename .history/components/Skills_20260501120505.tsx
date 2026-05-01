"use client";
import React from "react";
import { motion } from "framer-motion";
import SkillsDetail from "./SkillsDetail";
import { Skill } from "@/typings";
import { CpuChipIcon } from "@heroicons/react/24/outline";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0B0F19" }}
    >
      {/* Same Irregular Wave Pattern */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="skillsWave"
              x="0"
              y="0"
              width="200"
              height="120"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(10)"
            >
              {/* Main irregular wave */}
              <path
                d="M0 60 
                                   C20 20, 40 80, 60 50 
                                   C80 20, 100 90, 120 55 
                                   C140 20, 160 85, 180 50 
                                   C195 30, 198 70, 200 60"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Secondary softer wave */}
              <path
                d="M0 80 
                                   C30 50, 50 100, 80 70 
                                   C110 40, 140 95, 170 65 
                                   C190 50, 195 75, 200 80"
                fill="none"
                stroke="#22C55E"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.6"
              />
              <circle cx="60" cy="50" r="1.5" fill="#3B82F6" opacity="0.4" />
              <circle cx="120" cy="55" r="1.5" fill="#22C55E" opacity="0.4" />
              <circle cx="180" cy="50" r="1.5" fill="#3B82F6" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skillsWave)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#3B82F6] opacity-5 blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#22C55E] opacity-5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <CpuChipIcon className="w-6 h-6" style={{ color: "#3B82F6" }} />
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: "#E5E7EB" }}
            >
              Skills<span style={{ color: "#3B82F6" }}>.</span>
            </h2>
          </div>
          <div
            className="w-16 h-0.5 mx-auto mt-3"
            style={{ backgroundColor: "#3B82F6" }}
          />
          <p className="mt-4 text-sm" style={{ color: "#6B7280" }}>
            Hover over any skill to see proficiency level
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
        >
          {skills?.map((skill, index) => (
            <motion.div
              key={skill._id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <SkillsDetail skill={skill} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Skills Message */}
        {(!skills || skills.length === 0) && (
          <div className="text-center py-20">
            <p className="text-lg" style={{ color: "#6B7280" }}>
              No skills added yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
