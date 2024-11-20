"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20  text-white">
      {/* Heading Section */}
      <motion.div
        className="max-w-4xl text-center mx-auto px-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Get in{" "}
          <span className="text-purple-600 hover:text-purple-600 hover:scale-110 transition-transform">
            Touch
          </span>
        </h2>
        <p className="text-gray-400 text-lg leading-7 mb-6">
          We would love to hear from you! If you have any questions or requests,
          feel free to fill out the form below, and we’ll get back to you as
          soon as possible.
        </p>
        <a
          href="https://forms.gle/your-google-form-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            Fill Out the Form
          </button>
        </a>
      </motion.div>
    </section>
  );
}
