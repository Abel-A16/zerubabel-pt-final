/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
import Title from "./Title";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LinkIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      const newScrollLeft =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });

      const newIndex =
        direction === "left"
          ? Math.max(0, currentIndex - 1)
          : Math.min(projects.length - 1, currentIndex + 1);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section
      id="projects"
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
              id="projectsWave"
              x="0"
              y="0"
              width="200"
              height="120"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(10)"
            >
              <path
                d="M0 60 C20 20, 40 80, 60 50 C80 20, 100 90, 120 55 C140 20, 160 85, 180 50 C195 30, 198 70, 200 60"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M0 80 C30 50, 50 100, 80 70 C110 40, 140 95, 170 65 C190 50, 195 75, 200 80"
                fill="none"
                stroke="#22C55E"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.6"
              />
              <circle cx="60" cy="50" r="1.5" fill="#3B82F6" opacity="0.4" />
              <circle cx="120" cy="55" r="1.5" fill="#22C55E" opacity="0.4" />
              <circle cx="180" cy="50" r="1.5" fill="#3B82F6" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projectsWave)" />
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
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#E5E7EB" }}
          >
            Projects<span style={{ color: "#3B82F6" }}>.</span>
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-3"
            style={{ backgroundColor: "#3B82F6" }}
          />
        </motion.div>

        {/* Projects Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {projects.length > 1 && (
            <>
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full transition-all duration-300 hover:scale-110 hidden md:block"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid #1F2937",
                }}
              >
                <ArrowLeftIcon
                  className="w-5 h-5"
                  style={{ color: "#3B82F6" }}
                />
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full transition-all duration-300 hover:scale-110 hidden md:block"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid #1F2937",
                }}
              >
                <ArrowRightIcon
                  className="w-5 h-5"
                  style={{ color: "#3B82F6" }}
                />
              </button>
            </>
          )}

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-8 px-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {projects?.map((project, i) => (
              <div
                key={project._id}
                className="flex-shrink-0 w-full max-w-4xl mx-auto snap-center"
              >
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[#3B82F6]/10"
                  style={{
                    backgroundColor: "#111827",
                    border: "1px solid #1F2937",
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 md:h-96 overflow-hidden bg-gradient-to-br from-[#0B0F19] to-[#1F2937]">
                    <img
                      src={urlFor(project?.image).url()}
                      alt={project?.title}
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                    {/* Project Counter Badge */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: "#0B0F19/80",
                        backdropFilter: "blur(8px)",
                        color: "#3B82F6",
                        border: "1px solid #3B82F6/30",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 md:p-8">
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-2"
                      style={{ color: "#E5E7EB" }}
                    >
                      {project?.title}
                    </h3>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project?.technologies.map((technology) => (
                        <div
                          key={technology._id}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                          style={{
                            backgroundColor: "#1F2937",
                            border: "1px solid #374151",
                          }}
                        >
                          <img
                            className="w-5 h-5 rounded-full"
                            src={urlFor(technology.image).url()}
                            alt={technology.title}
                          />
                          <span
                            className="text-xs"
                            style={{ color: "#9CA3AF" }}
                          >
                            {technology.title}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Summary */}
                    <p
                      className="text-sm md:text-base leading-relaxed mb-6"
                      style={{ color: "#9CA3AF" }}
                    >
                      {project?.summary}
                    </p>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project?.linkToBuild && (
                        <a
                          href={project.linkToBuild}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                          style={{
                            backgroundColor: "#3B82F6",
                            color: "#0B0F19",
                          }}
                        >
                          <LinkIcon className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project?.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                          style={{
                            border: "1px solid #3B82F6",
                            color: "#E5E7EB",
                            backgroundColor: "transparent",
                          }}
                        >
                          <CodeBracketIcon className="w-4 h-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Dots */}
          {projects.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (scrollRef.current) {
                      const scrollAmount = i * scrollRef.current.clientWidth;
                      scrollRef.current.scrollTo({
                        left: scrollAmount,
                        behavior: "smooth",
                      });
                      setCurrentIndex(i);
                    }
                  }}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: currentIndex === i ? "24px" : "8px",
                    backgroundColor: currentIndex === i ? "#3B82F6" : "#1F2937",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
