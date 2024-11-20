"use client";

import { motion } from "framer-motion";
import { FaFistRaised, FaPeopleArrows } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { PiStudentBold } from "react-icons/pi";
import { BentoTools } from "./BentoTools";

export default function AboutSection() {
  const gridItems = [
    {
      icon: <FaFistRaised />,
      title: "Empowering Graduates",
      text: "We help you present your skills and achievements in the best light.",
    },
    {
      icon: <HiHomeModern />,
      title: "Seamless Creation",
      text: "Build professional portfolios and resumes without any technical hassle.",
    },
    {
      icon: <PiStudentBold />,
      title: "Tailored for Students",
      text: "Designed to help you stand out in a competitive job market.",
    },
    {
      icon: <FaPeopleArrows />,
      title: "Modern and Professional",
      text: "Showcase your talent with sleek, professional designs.",
    },
  ];

  return (
    <section
      id="about"
      className=" text-white flex flex-col justify-center items-center mt-20"
    >
      {/* Heading Section */}
      <motion.div
        className="max-w-4xl text-center px-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          About{" "}
          <span className="text-purple-600 hover:text-purple-600 hover:scale-110 transition-transform">
            Credenza
          </span>
        </h2>
        <p className="text-gray-400 text-lg leading-7">
          At Credenza, we empower graduating students to stand out in a
          competitive world. Our platform simplifies the process of creating
          stunning portfolios and professional resumes, ensuring your skills and
          achievements shine.
          <a href="#contact" className="text-bold text-purple-600">
            {" "}
            Your future deserves to look its best—start with Credenza.
          </a>
        </p>
      </motion.div>
      <BentoTools />

      {/* Grid Section */}
      <motion.div
        className="max-w-4xl px-4 mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="grid grid-cols-2 gap-6">
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-purple-600 text-3xl">{item.icon}</span>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
