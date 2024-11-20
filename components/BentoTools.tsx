"use client";
import { cn } from "@/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function BentoTools() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <BentoGrid className="max-w-3xl mx-auto md:auto-rows-[20rem] mt-12">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </motion.section>
  );
}

const SkeletonOne = () => {
  const hoverVariants = {
    initial: { x: 0, rotate: 0 },
    hover: { x: [0, 10, 0], rotate: [0, 5, 0], transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={hoverVariants}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-col space-y-2"
    >
      <motion.div className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 bg-black">
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-800 flex-shrink-0" />
        <div className="w-full  h-4 rounded-full bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const growVariants = {
    initial: { width: "0%" },
    animate: { width: "100%", transition: { duration: 0.5 } },
    hover: {
      width: ["0%", "100%", "0%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-two" + i}
          variants={growVariants}
          className="flex flex-row rounded-full border  bg-black h-4"
        />
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const bgVariants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { duration: 5, repeat: Infinity },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={bgVariants}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] rounded-lg  flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="h-full w-full rounded-lg" />
    </motion.div>
  );
};

const items = [
  {
    title: "Portfolio Builder",
    description: (
      <span className="text-sm">
        Create professional portfolios that highlight your skills and
        achievements.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Resume Templates",
    description: (
      <span className="text-sm">
        Access beautifully designed resume templates tailored to your career
        goals.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Customizable Designs",
    description: (
      <span className="text-sm">
        Personalize your portfolio and resume to reflect your unique style.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
