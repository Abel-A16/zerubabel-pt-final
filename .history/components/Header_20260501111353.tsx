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
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
        style={{
          backgroundColor: isScrolled ? "#F2F2F2" : "transparent",
          borderBottomColor: "#CBCBCB",
          borderBottomWidth: isScrolled ? "1px" : "0px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo / Name with Fancy Accent */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center group"
          >
            <a
              href="#hero"
              className="font-bold text-xl tracking-tight transition-colors"
              style={{ color: "#174D38" }}
            >
              Z<span style={{ color: "#CBCBCB" }}>E</span>
              <span
                className="text-sm ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "#4D1717" }}
              >
                .
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center gap-8"
          >
            {/* Navigation Links with Underline Effect */}
            <nav className="flex gap-6 text-sm">
              {["About", "Experience", "Skills", "Projects"].map(
                (item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="group relative transition-colors pb-1"
                    style={{ color: "#174D38" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#4D1717")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#174D38")
                    }
                  >
                    {item}
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: "#4D1717" }}
                    />
                  </a>
                ),
              )}
            </nav>

            {/* Social Icons with Hover Scale */}
            <div
              className="flex items-center gap-2 border-l pl-6"
              style={{ borderLeftColor: "#CBCBCB" }}
            >
              {socials.slice(0, 3).map((social, idx) => (
                <motion.div
                  key={social._id}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <SocialIcon
                    url={social.url}
                    bgColor="transparent"
                    fgColor="#174D38"
                    style={{ width: 32, height: 32 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Contact Button with Glow Effect */}
            <a href="#contact">
              <button
                className="group relative px-5 py-2 rounded-md text-sm transition-all duration-300 flex items-center gap-2 overflow-hidden"
                style={{
                  border: `1px solid #174D38`,
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
                <EnvelopeIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="relative z-10">Contact</span>
              </button>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md"
            style={{ color: "#174D38" }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-[73px] left-0 right-0 backdrop-blur-md shadow-lg border-b z-40 md:hidden"
          style={{ backgroundColor: "#F2F2F2", borderBottomColor: "#CBCBCB" }}
        >
          <div className="flex flex-col p-6 gap-5">
            {["About", "Experience", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="transition-colors py-2 text-base"
                  style={{ color: "#174D38" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4D1717")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#174D38")
                  }
                >
                  {item}
                </a>
              ),
            )}

            <div
              className="flex gap-4 pt-4 border-t"
              style={{ borderTopColor: "#CBCBCB" }}
            >
              {socials.map((social) => (
                <SocialIcon
                  key={social._id}
                  url={social.url}
                  bgColor="transparent"
                  fgColor="#174D38"
                  style={{ width: 36, height: 36 }}
                  className="hover:scale-110 transition-transform"
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
