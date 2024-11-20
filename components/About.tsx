"use client";

import { useEffect, useState } from "react";
import { FaFistRaised, FaPeopleArrows } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { PiStudentBold } from "react-icons/pi";

export default function AboutSection() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowContent(true);
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="about"
      className="h-[100vh] text-white flex flex-col justify-center items-center mt-12"
    >
      {/* Heading Section */}
      <div className="max-w-2xl text-center px-6">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-opacity duration-1000 ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          About{" "}
          <span className="text-purple-600 hover:text-purple-600 hover:scale-110 transition-all transform">
            Credenza
          </span>
        </h2>
        <p
          className={`text-gray-400 text-lg leading-7 transition-opacity duration-1000 ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          At Credenza, we empower graduating students to stand out in a
          competitive world. Our platform simplifies the process of creating
          stunning portfolios and professional resumes, ensuring your skills and
          achievements shine.
          <a href="#contact" className="text-bold text-purple-600">
            Your future deserves to look its best—start with Credenza.
          </a>
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-3xl px-4 mt-10">
        <div className="grid grid-cols-2 gap-6">
          {[
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
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6  rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 ${
                showContent
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-purple-600 text-3xl">{item.icon}</span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
