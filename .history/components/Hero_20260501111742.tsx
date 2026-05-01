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
      style={{ backgroundColor: "#F2F2F2" }}
    >
      {/* Elegant Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#174D38 1px, transparent 1px),
                              linear-gradient(90deg, #174D38 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#174D38]/[0.02]" />

      {/* Profile Image with Glow Effect */}
      <div className="absolute top-8 right-8 z-20">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#174D38] to-[#4D1717] opacity-40 blur-md group-hover:opacity-100 transition duration-500" />
          <div
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2"
            style={{ borderColor: "#CBCBCB", backgroundColor: "#F2F2F2" }}
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
        {/* Professional Badge with Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium mb-6 shadow-sm"
            style={{ backgroundColor: "#174D38", color: "#F2F2F2" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2F2F2] animate-pulse" />
            Fullstack Developer & Technical Trainer
          </span>
        </motion.div>

        {/* Name with Typewriter & Underline Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            style={{ color: "#174D38" }}
          >
            {text}
            <Cursor cursorColor="#4D1717" />
          </h1>
          <div
            className="w-24 h-0.5 mx-auto mt-6"
            style={{ backgroundColor: "#CBCBCB" }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ color: "#174D38", opacity: 0.8 }}
        >
          Building production-level systems for businesses, educational
          institutions, and community organizations while training the next
          generation of developers.
        </motion.p>

        {/* CTA Buttons with Hover Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="#projects">
            <button
              className="group relative px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              style={{ backgroundColor: "#174D38", color: "#F2F2F2" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#4D1717")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#174D38")
              }
            >
              <span className="relative z-10">View Projects</span>
              <span
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                style={{ backgroundColor: "#4D1717" }}
              />
            </button>
          </a>
          <a href="#contact">
            <button
              className="group relative px-8 py-3 rounded-md border font-semibold transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              style={{
                borderColor: "#174D38",
                color: "#174D38",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#174D38";
                e.currentTarget.style.color = "#F2F2F2";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#174D38";
              }}
            >
              Let's Connect
            </button>
          </a>
        </motion.div>

        {/* Social/Contact Links with Hover Underline */}
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
              style={{ color: "#174D38" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4D1717")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#174D38")}
            >
              GitHub
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#4D1717" }}
              />
            </a>
          )}
          {pageInfo?.linkedin && (
            <a
              href={pageInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-colors pb-1"
              style={{ color: "#174D38" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4D1717")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#174D38")}
            >
              LinkedIn
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#4D1717" }}
              />
            </a>
          )}
          {pageInfo?.email && (
            <a
              href={`mailto:${pageInfo.email}`}
              className="group relative transition-colors pb-1"
              style={{ color: "#174D38" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4D1717")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#174D38")}
            >
              Email
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#4D1717" }}
              />
            </a>
          )}
          <span style={{ color: "#CBCBCB" }}>|</span>
          <span style={{ color: "#174D38", opacity: 0.6 }}>
            Based in Addis Ababa, Ethiopia
          </span>
        </motion.div>
      </div>

      {/* Fancy Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 transition-colors group"
          style={{ color: "#174D38" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#4D1717")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#174D38")}
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
