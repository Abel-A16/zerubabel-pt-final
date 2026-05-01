"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
import { motion } from "framer-motion";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [mounted, setMounted] = useState(false);
  const [text] = useTypewriter({
    words: [
      "Zerubabel Endale",
      "Fullstack Developer",
      "Systems Builder",
      "Technical Trainer",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
  });

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0B0F19" }}
    >
      {/* Animated Wave Pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="wavePattern"
              x="0"
              y="0"
              width="120"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 30 Q15 10 30 30 T60 30 T90 30 T120 30"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M0 45 Q15 25 30 45 T60 45 T90 45 T120 45"
                fill="none"
                stroke="#22C55E"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path
                d="M0 15 Q15 -5 30 15 T60 15 T90 15 T120 15"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="0.8"
                strokeLinecap="round"
                opacity="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wavePattern)" />
        </svg>
      </div>

      {/* Gradient Orbs for Depth */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#3B82F6] opacity-10 blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#22C55E] opacity-5 blur-[120px]" />

      {/* Profile Image */}
      <div className="absolute top-8 right-8 z-20">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#22C55E] opacity-40 blur-md group-hover:opacity-100 transition duration-500" />
          <div
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2"
            style={{ borderColor: "#3B82F6", backgroundColor: "#111827" }}
          >
            <Image
              src={urlFor(pageInfo?.heroImage).url()}
              alt={pageInfo?.name || "Zerubabel Endale"}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Professional Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium mb-6"
            style={{
              backgroundColor: "#111827",
              color: "#3B82F6",
              border: "1px solid #3B82F6/20",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            Fullstack Developer & Technical Trainer
          </span>
        </motion.div>

        {/* Name with Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            style={{ color: "#E5E7EB" }}
          >
            {text}
            <Cursor cursorColor="#22C55E" />
          </h1>
          <div
            className="w-24 h-0.5 mx-auto mt-6"
            style={{ backgroundColor: "#3B82F6" }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ color: "#E5E7EB", opacity: 0.7 }}
        >
          Building production-level systems for businesses, educational
          institutions, and community organizations while training the next
          generation of developers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="#projects">
            <button
              className="group relative px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 overflow-hidden shadow-lg"
              style={{ backgroundColor: "#3B82F6", color: "#0B0F19" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#22C55E")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#3B82F6")
              }
            >
              View Projects
            </button>
          </a>
          <a href="#contact">
            <button
              className="relative px-8 py-3 rounded-md border font-semibold transition-all duration-300 transform hover:-translate-y-1"
              style={{
                borderColor: "#3B82F6",
                color: "#E5E7EB",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#3B82F6";
                e.currentTarget.style.color = "#0B0F19";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#E5E7EB";
              }}
            >
              Let's Connect
            </button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-8 justify-center text-sm"
        >
          {pageInfo?.github && (
            <a
              href={pageInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-colors pb-1"
              style={{ color: "#9CA3AF" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3B82F6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              GitHub
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#3B82F6" }}
              />
            </a>
          )}
          {pageInfo?.linkedin && (
            <a
              href={pageInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-colors pb-1"
              style={{ color: "#9CA3AF" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3B82F6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              LinkedIn
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#3B82F6" }}
              />
            </a>
          )}
          {pageInfo?.email && (
            <a
              href={`mailto:${pageInfo.email}`}
              className="group relative transition-colors pb-1"
              style={{ color: "#9CA3AF" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3B82F6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              Email
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#3B82F6" }}
              />
            </a>
          )}
          <span style={{ color: "#374151" }}>|</span>
          <span style={{ color: "#9CA3AF" }}>
            Based in Addis Ababa, Ethiopia
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 transition-colors group"
          style={{ color: "#9CA3AF" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#3B82F6")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <div
            className="w-5 h-8 rounded-full border-2 flex justify-center"
            style={{ borderColor: "currentColor" }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 rounded-full mt-1"
              style={{ backgroundColor: "currentColor" }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
