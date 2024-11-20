"use client";
import { motion } from "framer-motion";
import { FocusCards } from "./ui/Card";

export function ToolsUsed() {
  const cards = [
    {
      title: "Next JS",
      src: "https://i.pinimg.com/736x/a4/52/ea/a452eae371f079b141494c5aff07a140.jpg",
      link: "https://nextjs.org/",
    },
    {
      title: "tailwindcss",
      src: "https://i.pinimg.com/736x/08/a3/2f/08a32fc73758025add069aefdde61b80.jpg",
      link: "https://tailwindcss.com/",
    },
    {
      title: "Latex",
      src: "https://i.pinimg.com/736x/b5/fd/de/b5fddeebd89df826b39f5069142fda0c.jpg",
      link: "https://www.latex-project.org/",
    },
    {
      title: "OverLeaf",
      src: "https://images.ctfassets.net/nrgyaltdicpt/3nesOc6iRhdzatUCC5OKWo/ea0fc03647a5f6a903a9aacc357481b2/overleaf-o-logo-primary.jpg",
      link: "https://www.overleaf.com/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mt-20 max-w-4xl items-center mx-auto justify-center"
    >
      {/* Heading Section */}
      <motion.div
        className="max-w-4xl text-center px-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          Tools{" "}
          <span className="text-purple-600 hover:text-purple-600 hover:scale-110 transition-transform">
            Used
          </span>
        </h1>
        <p className="text-gray-400 text-lg leading-7">
          We use tools like Latex, Next.js, Tailwind CSS, and Overleaf to
          enhance productivity and streamline project creation.{" "}
        </p>
      </motion.div>

      {/* Focus Cards Section */}
      <motion.div
        className="max-w-4xl px-4 mt-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <FocusCards cards={cards} />
      </motion.div>
    </motion.div>
  );
}
