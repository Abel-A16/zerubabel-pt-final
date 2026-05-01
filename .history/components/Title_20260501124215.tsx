import React from "react";
import { motion } from "framer-motion";

interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative flex justify-center items-center mb-12 md:mb-16"
    >
      <h2
        className="text-4xl md:text-5xl font-bold tracking-tight"
        style={{ color: "#E5E7EB" }}
      >
        {text}
        <span style={{ color: "#3B82F6" }}>.</span>
      </h2>
      <div
        className="absolute -bottom-3 h-0.5 rounded-full transition-all duration-500"
        style={{ backgroundColor: "#3B82F6", width: "40px" }}
      />
    </motion.div>
  );
}

export default Title;
