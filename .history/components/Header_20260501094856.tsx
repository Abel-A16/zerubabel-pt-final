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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 border-b"
        style={{ backgroundColor: "#ffffe3", borderBottomColor: "#cbcbcb" }}
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
              className="font-semibold text-lg tracking-tight transition-colors"
              style={{ color: "#4a4a4a" }}
            >
              ZE<span style={{ color: "#cbcbcb" }}>.</span>
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
                className="transition-colors hover:opacity-70"
                style={{ color: "#6d8196" }}
              >
                About
              </a>
              <a
                href="#experiance"
                className="transition-colors hover:opacity-70"
                style={{ color: "#6d8196" }}
              >
                Experience
              </a>
              <a
                href="#skills"
                className="transition-colors hover:opacity-70"
                style={{ color: "#6d8196" }}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="transition-colors hover:opacity-70"
                style={{ color: "#6d8196" }}
              >
                Projects
              </a>
            </nav>

            {/* Social Icons */}
            <div
              className="flex items-center gap-2 border-l pl-6"
              style={{ borderLeftColor: "#cbcbcb" }}
            >
              {socials.slice(0, 3).map((social) => (
                <SocialIcon
                  key={social._id}
                  url={social.url}
                  bgColor="transparent"
                  fgColor="#6d8196"
                  style={{ width: 32, height: 32 }}
                  className="hover:scale-110 transition-transform duration-200"
                />
              ))}
            </div>

            {/* Contact Button */}
            <a href="#contact">
              <button
                className="px-5 py-2 rounded-md text-sm transition-all duration-300 flex items-center gap-2"
                style={{
                  border: `1px solid #cbcbcb`,
                  color: "#4a4a4a",
                  backgroundColor: "transparent",
                }}
              >
                <EnvelopeIcon className="h-4 w-4" />
                Contact
              </button>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            style={{ color: "#4a4a4a" }}
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
          className="fixed top-[73px] left-0 right-0 border-b z-40 md:hidden"
          style={{ backgroundColor: "#ffffe3", borderBottomColor: "#cbcbcb" }}
        >
          <div className="flex flex-col p-6 gap-5">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="transition-colors py-2 hover:opacity-70"
              style={{ color: "#6d8196" }}
            >
              About
            </a>
            <a
              href="#experiance"
              onClick={() => setIsMobileMenuOpen(false)}
              className="transition-colors py-2 hover:opacity-70"
              style={{ color: "#6d8196" }}
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={() => setIsMobileMenuOpen(false)}
              className="transition-colors py-2 hover:opacity-70"
              style={{ color: "#6d8196" }}
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="transition-colors py-2 hover:opacity-70"
              style={{ color: "#6d8196" }}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="transition-colors py-2 hover:opacity-70"
              style={{ color: "#6d8196" }}
            >
              Contact
            </a>

            <div
              className="flex gap-4 pt-4 border-t"
              style={{ borderTopColor: "#cbcbcb" }}
            >
              {socials.map((social) => (
                <SocialIcon
                  key={social._id}
                  url={social.url}
                  bgColor="transparent"
                  fgColor="#6d8196"
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
