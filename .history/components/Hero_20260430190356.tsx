"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [mounted, setMounted] = useState(false);
  const [text] = useTypewriter({
    words: [
      `I'm ${pageInfo?.name}`,
      pageInfo?.role || "Developer",
      "Let's build something great",
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
      </div>

      {/* Profile Image with Modern Frame */}
      <div className="absolute top-8 right-8 z-20">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20">
            <Image
              src={urlFor(pageInfo?.heroImage).url()}
              alt={pageInfo?.name || "Profile"}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 mb-6">
            ✨ {pageInfo?.role || "Creative Developer"}
          </span>
        </motion.div>

        {/* Main Title with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent">
            {text}
          </span>
          <Cursor cursorColor="#8B5CF6" />
        </motion.h1>

        {/* Dynamic Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          {pageInfo?.shortBio ||
            "Building exceptional digital experiences with modern web technologies"}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="#projects">
            <button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
              View My Work
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-1/2" />
            </button>
          </a>
          <a href="#contact">
            <button className="px-8 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Let's Connect
            </button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          {pageInfo?.github && (
            <a
              href={pageInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="w-5 h-5 text-white/80" />
            </a>
          )}
          {pageInfo?.linkedin && (
            <a
              href={pageInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5 text-white/80" />
            </a>
          )}
          {pageInfo?.email && (
            <a
              href={`mailto:${pageInfo.email}`}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 text-white/80" />
            </a>
          )}
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
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
