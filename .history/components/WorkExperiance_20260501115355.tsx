"use client";
import React from "react";
import ExperienceCard from "./ExperianceCard";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

type Props = {
  experiences: Experience[];
};

function WorkExperiance({ experiences }: Props) {
  return (
    <section
      id="experience"
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
              id="experienceWave"
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
          <rect width="100%" height="100%" fill="url(#experienceWave)" />
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
            <BriefcaseIcon className="w-6 h-6" style={{ color: "#3B82F6" }} />
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: "#E5E7EB" }}
            >
              Experience<span style={{ color: "#3B82F6" }}>.</span>
            </h2>
          </div>
          <div
            className="w-16 h-0.5 mx-auto mt-3"
            style={{ backgroundColor: "#3B82F6" }}
          />
          <p className="mt-4 text-sm" style={{ color: "#6B7280" }}>
            Scroll horizontally to explore my professional journey →
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div
          className="w-full overflow-x-auto overflow-y-hidden scroll-smooth"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#3B82F6 #1F2937",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              height: 6px;
            }
            div::-webkit-scrollbar-track {
              background: #1f2937;
              border-radius: 10px;
            }
            div::-webkit-scrollbar-thumb {
              background: #3b82f6;
              border-radius: 10px;
            }
            div::-webkit-scrollbar-thumb:hover {
              background: #22c55e;
            }
          `}</style>

          <div className="flex gap-6 md:gap-8 pb-8 pt-4 px-4 md:px-8 snap-x snap-mandatory">
            {experiences?.map((experience, index) => (
              <motion.div
                key={experience._id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="snap-start"
              >
                <ExperienceCard experience={experience} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Hint for Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 md:hidden"
        >
          <p className="text-xs animate-pulse" style={{ color: "#6B7280" }}>
            ← Swipe to see more →
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default WorkExperiance;
