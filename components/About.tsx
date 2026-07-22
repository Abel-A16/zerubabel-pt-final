"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
import {
  UserIcon,
  CodeBracketIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0B0F19" }}
    >
      {/* Same Irregular Wave Pattern as Hero */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="aboutWave"
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
              {/* Subtle connecting dots */}
              <circle cx="60" cy="50" r="1.5" fill="#3B82F6" opacity="0.4" />
              <circle cx="120" cy="55" r="1.5" fill="#22C55E" opacity="0.4" />
              <circle cx="180" cy="50" r="1.5" fill="#3B82F6" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutWave)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-[#3B82F6] opacity-5 blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#22C55E] opacity-5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#E5E7EB" }}
          >
            About<span style={{ color: "#3B82F6" }}>.</span>
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-3"
            style={{ backgroundColor: "#3B82F6" }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group w-64 h-64 sm:w-80 sm:h-80 flex-shrink-0"
          >
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#22C55E] opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              style={{ border: "2px solid #1F2937" }}
            >
              <Image
                src={urlFor(pageInfo?.profilePic).url()}
                alt={pageInfo?.name || "Profile"}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
            {/* Decorative badge on image */}
            <div
              className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg"
              style={{
                backgroundColor: "#111827",
                color: "#22C55E",
                border: "1px solid rgba(34, 197, 94, 0.3)",
              }}
            >
              5+ Years
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            {/* Title */}
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ color: "#E5E7EB" }}
            >
              Who is{" "}
              <span className="relative inline-block">
                <span style={{ color: "#3B82F6" }}>Zerubabel Endale?</span>
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5"
                  style={{ backgroundColor: "#22C55E" }}
                />
              </span>
            </h3>

            {/* Description */}
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#9CA3AF" }}
            >
              {pageInfo?.backgroundInformation}
            </p>

            {/* Stats / Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid #1F2937",
                }}
              >
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                >
                  <CodeBracketIcon
                    className="w-6 h-6"
                    style={{ color: "#3B82F6" }}
                  />
                </div>
                <div>
                  <p className="text-xl font-bold" style={{ color: "#E5E7EB" }}>
                    15+
                  </p>
                  <p className="text-xs" style={{ color: "#6B7280" }}>
                    Projects Completed
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid #1F2937",
                }}
              >
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                >
                  <AcademicCapIcon
                    className="w-6 h-6"
                    style={{ color: "#22C55E" }}
                  />
                </div>
                <div>
                  <p className="text-xl font-bold" style={{ color: "#E5E7EB" }}>
                    35+
                  </p>
                  <p className="text-xs" style={{ color: "#6B7280" }}>
                    Students Trained
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid #1F2937",
                }}
              >
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                >
                  <UserIcon className="w-6 h-6" style={{ color: "#3B82F6" }} />
                </div>
                <div>
                  <p className="text-xl font-bold" style={{ color: "#E5E7EB" }}>
                    10+
                  </p>
                  <p className="text-xs" style={{ color: "#6B7280" }}>
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <motion.a
              href="#skills"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "#3B82F6" }}
            >
              Explore My Skills
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
