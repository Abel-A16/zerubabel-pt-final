"use client";
import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { EnvelopeIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Social } from "@/typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo / Name */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <a
              href="#hero"
              className="text-white font-semibold text-lg tracking-tight hover:text-gray-300 transition-colors"
            >
              ZE<span className="text-gray-500">.</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center gap-8"
          >
            {/* Navigation Links */}
            <nav className="flex gap-6 text-sm">
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#experiance"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </a>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-2 border-l border-gray-800 pl-6">
              {socials.slice(0, 3).map((social) => (
                <SocialIcon
                  key={social._id}
                  url={social.url}
                  bgColor="transparent"
                  fgColor="#9CA3AF"
                  style={{ width: 32, height: 32 }}
                  className="hover:scale-110 transition-transform duration-200"
                />
              ))}
            </div>

            {/* Contact Button */}
            <a href="#contact">
              <button className="px-5 py-2 rounded-md border border-gray-700 text-sm text-white hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                <EnvelopeIcon className="h-4 w-4" />
                Contact
              </button>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[73px] left-0 right-0 bg-gray-900/98 backdrop-blur-sm border-b border-gray-800 z-40 md:hidden"
        >
          <div className="flex flex-col p-6 gap-5">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors py-2"
            >
              About
            </a>
            <a
              href="#experiance"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors py-2"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors py-2"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors py-2"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors py-2"
            >
              Contact
            </a>

            <div className="flex gap-4 pt-4 border-t border-gray-800">
              {socials.map((social) => (
                <SocialIcon
                  key={social._id}
                  url={social.url}
                  bgColor="transparent"
                  fgColor="#9CA3AF"
                  style={{ width: 36, height: 36 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Header;
