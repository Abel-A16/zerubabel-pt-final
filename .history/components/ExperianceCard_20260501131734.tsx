/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";
import {
  CalendarIcon,
  MapPinIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <motion.article
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="flex flex-col rounded-xl items-center flex-shrink-0 snap-center
       w-[320px] md:w-[450px] lg:w-[600px] xl:w-[750px]
       transition-all duration-300 cursor-pointer overflow-hidden shadow-xl"
      style={{ backgroundColor: "#111827", border: "1px solid #1F2937" }}
    >
      {/* Company Logo Section */}
      <div className="relative w-full bg-gradient-to-br from-[#0B0F19] to-[#1F2937] flex items-center justify-center p-8">
        <motion.img
          initial={{
            y: -50,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover object-center border-4 shadow-lg"
          style={{ borderColor: "#3B82F6" }}
          src={urlFor(experience?.companyImage).url()}
          alt={experience?.company}
        />
        {/* Current/Past Badge */}
        <div
          className="absolute top-4 right-4 px-2 py-1 rounded-md text-xs font-medium"
          style={{
            backgroundColor: "#3B82F6/10",
            color: "#3B82F6",
            border: "1px solid #3B82F6/20",
          }}
        >
          {experience?.isCurentlyWorkingHere ? "Current" : "Completed"}
        </div>
      </div>

      {/* Content Section */}
      <div className="px-5 md:px-8 py-6 w-full">
        {/* Job Title */}
        <h4
          className="text-xl md:text-2xl font-bold"
          style={{ color: "#E5E7EB" }}
        >
          {experience?.jobTitle}
        </h4>

        {/* Company Name */}
        <p
          className="text-base md:text-lg font-semibold mt-1"
          style={{ color: "#3B82F6" }}
        >
          {experience?.company}
        </p>

        {/* Date and Location */}
        <div
          className="flex flex-wrap gap-4 mt-3 text-sm"
          style={{ color: "#6B7280" }}
        >
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" style={{ color: "#22C55E" }} />
            <span>
              {new Date(experience.dateStarted).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}{" "}
              -{" "}
              {experience.isCurentlyWorkingHere
                ? "Present"
                : experience.dateEnded
                ? new Date(experience.dateEnded).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })
                : "Unknown"}
            </span>
          </div>
          {experience?.location && (
            <div className="flex items-center gap-1">
              <MapPinIcon className="w-4 h-4" style={{ color: "#22C55E" }} />
              <span>{experience.location}</span>
            </div>
          )}
        </div>

        {/* Technologies */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 my-4">
            {experience.technologies.map((technology) => (
              <div
                key={technology._id}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "#1F2937",
                  border: "1px solid #374151",
                }}
              >
                <img
                  src={urlFor(technology.image).url()}
                  className="w-5 h-5 rounded-full"
                  alt={technology.title}
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: "#9CA3AF" }}
                >
                  {technology.title}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Points/Responsibilities */}
        <ul
          className="space-y-2 mt-4 max-h-48 overflow-y-auto pr-2"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#3B82F6 #1F2937",
          }}
        >
          <style jsx>{`
            ul::-webkit-scrollbar {
              width: 4px;
            }
            ul::-webkit-scrollbar-track {
              background: #1f2937;
              border-radius: 10px;
            }
            ul::-webkit-scrollbar-thumb {
              background: #3b82f6;
              border-radius: 10px;
            }
          `}</style>
          {experience.points.map((point, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm leading-relaxed"
              style={{ color: "#9CA3AF" }}
            >
              <span style={{ color: "#22C55E" }}>▹</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
