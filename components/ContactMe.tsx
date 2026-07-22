"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    const { name, email, subject, message } = data;
    const body = `Hi, I am ${name}\n\n${message}\n\nEmail: ${email}`;
    const mailtoLink = `mailto:zerubabelendale16@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
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
              id="contactWave"
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
          <rect width="100%" height="100%" fill="url(#contactWave)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#3B82F6] opacity-5 blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#22C55E] opacity-5 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-32 w-full">
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
            Contact<span style={{ color: "#3B82F6" }}>.</span>
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-3"
            style={{ backgroundColor: "#3B82F6" }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 space-y-4"
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "#E5E7EB" }}
            >
              Let&apos;s Work<span style={{ color: "#22C55E" }}> Together</span>
            </h3>
            <p
              className="text-sm md:text-base mb-8"
              style={{ color: "#9CA3AF" }}
            >
              Have a project in mind? I&apos;d love to hear about it. Reach out
              to me and let&apos;s create something amazing together.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid #1F2937",
                }}
              >
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                >
                  <PhoneIcon className="w-6 h-6" style={{ color: "#3B82F6" }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "#6B7280" }}>
                    Phone
                  </p>
                  <p
                    className="text-sm md:text-base font-medium"
                    style={{ color: "#E5E7EB" }}
                  >
                    +251 967 423 187
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid #1F2937",
                }}
              >
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                >
                  <EnvelopeIcon
                    className="w-6 h-6"
                    style={{ color: "#22C55E" }}
                  />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "#6B7280" }}>
                    Email
                  </p>
                  <p
                    className="text-sm md:text-base font-medium"
                    style={{ color: "#E5E7EB" }}
                  >
                    zerubabelendale16@gmail.com
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid #1F2937",
                }}
              >
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                >
                  <MapPinIcon
                    className="w-6 h-6"
                    style={{ color: "#3B82F6" }}
                  />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "#6B7280" }}>
                    Location
                  </p>
                  <p
                    className="text-sm md:text-base font-medium"
                    style={{ color: "#E5E7EB" }}
                  >
                    Yeka, Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 focus:ring-2"
                    style={{
                      backgroundColor: "#111827",
                      border: `1px solid ${errors.name ? "#ef4444" : "#1F2937"}`,
                      color: "#E5E7EB",
                    }}
                  />
                  {errors.name && (
                    <p className="text-xs mt-1" style={{ color: "#ef4444" }}>
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 focus:ring-2"
                    style={{
                      backgroundColor: "#111827",
                      border: `1px solid ${errors.email ? "#ef4444" : "#1F2937"}`,
                      color: "#E5E7EB",
                    }}
                  />
                  {errors.email && (
                    <p className="text-xs mt-1" style={{ color: "#ef4444" }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <input
                {...register("subject", { required: "Subject is required" })}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 focus:ring-2"
                style={{
                  backgroundColor: "#111827",
                  border: `1px solid ${errors.subject ? "#ef4444" : "#1F2937"}`,
                  color: "#E5E7EB",
                }}
              />
              {errors.subject && (
                <p className="text-xs -mt-2" style={{ color: "#ef4444" }}>
                  {errors.subject.message}
                </p>
              )}

              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 focus:ring-2 resize-none"
                style={{
                  backgroundColor: "#111827",
                  border: `1px solid ${errors.message ? "#ef4444" : "#1F2937"}`,
                  color: "#E5E7EB",
                }}
              />
              {errors.message && (
                <p className="text-xs -mt-2" style={{ color: "#ef4444" }}>
                  {errors.message.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex items-center justify-center gap-2"
                style={{ backgroundColor: "#3B82F6", color: "#0B0F19" }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center p-3 rounded-lg"
                  style={{
                    backgroundColor: "rgba(34, 197, 94, 0.1)",
                    border: "1px solid rgba(34, 197, 94, 0.3)",
                    color: "#22C55E",
                  }}
                >
                  Opening your email client to send this message...
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
