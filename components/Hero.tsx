"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import PointerP from "./Pointer";

export default function Hero() {
  return (
    <section className="py-24 flex justify-center overflow-x-clip">
      <div className="container relative">
        {/* Animated Pointers */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <PointerP name={"Aqib"} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <PointerP name={"Rayyan"} />
        </motion.div>

        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center flex-col"
        >
          {/* Highlighted Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-600 to to-pink-400 rounded-full text-neutral-950 font-semibold"
          >
            🔖 We would love to work with You
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 max-w-4xl"
          >
            Your Work, Presented Perfectly
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center text-xl text-white/50 mt-6 max-w-2xl mx-auto"
          >
            Stand out in the competitive job market with a professional
            portfolio and resume built effortlessly. At{" "}
            <span className="font-semibold text-purple-600">Credenza</span>, we
            provide graduating students with the tools to showcase their skills,
            achievements, and potential, all in one seamless platform.
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex border border-white/15 rounded-full p-2 mt-8 max-w-3xl"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent px-4 md:px-10 md:flex-1 focus:outline-none"
            />
            <Button
              variant={"primary"}
              type="submit"
              className="whitespace-nowrap text-white"
              size="sm"
            >
              Get Started
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
