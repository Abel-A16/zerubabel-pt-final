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
      style={{ backgroundColor: "#ffffe3" }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #4a4a4a 0.5px, transparent 0.5px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Profile Image */}
      <div className="absolute top-8 right-8 z-20">
        <div className="relative group">
          <div
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2"
            style={{ borderColor: "#cbcbcb" }}
          >
            <Image
              src={urlFor(pageInfo?.heroImage).url()}
              alt={pageInfo?.name || "Zerubabel Endale"}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
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
            className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-medium mb-6"
            style={{ backgroundColor: "#cbcbcb", color: "#4a4a4a" }}
          >
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
            style={{ color: "#4a4a4a" }}
          >
            {text}
            <Cursor cursorColor="#6d8196" />
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-8"
          style={{ color: "#6d8196" }}
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
              className="px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#4a4a4a", color: "#ffffe3" }}
            >
              View Projects
            </button>
          </a>
          <a href="#contact">
            <button
              className="px-8 py-3 rounded-md border font-semibold transition-all duration-300"
              style={{
                borderColor: "#cbcbcb",
                color: "#4a4a4a",
                backgroundColor: "transparent",
              }}
            >
              Let's Connect
            </button>
          </a>
        </motion.div>

        {/* Social/Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-6 justify-center text-sm"
        >
          {pageInfo?.github && (
            <a
              href={pageInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "#6d8196" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4a4a4a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6d8196")}
            >
              GitHub
            </a>
          )}
          {pageInfo?.linkedin && (
            <a
              href={pageInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "#6d8196" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4a4a4a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6d8196")}
            >
              LinkedIn
            </a>
          )}
          {pageInfo?.email && (
            <a
              href={`mailto:${pageInfo.email}`}
              className="transition-colors"
              style={{ color: "#6d8196" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4a4a4a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6d8196")}
            >
              Email
            </a>
          )}
          <span style={{ color: "#cbcbcb" }}>|</span>
          <span style={{ color: "#6d8196" }}>
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
          className="flex flex-col items-center gap-1 transition-colors text-xs"
          style={{ color: "#6d8196" }}
        >
          <span>Scroll</span>
          <span className="text-sm">↓</span>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
