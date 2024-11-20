"use client";
import Image from "next/image";
import LogoImage from "@/images/reshot-icon-calculator-V72YFDUG3Q.svg";
import Button from "@/components/Button";
import { LuExternalLink } from "react-icons/lu";
import { motion } from "framer-motion";

const navbarLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Tools ", href: "#tools" },
  { name: "Contact", href: "#contact" },
];
export default function Navbar() {
  return (
    <motion.section
      className="py-4 lg:py-8 flex justify-center"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
          <div className="flex flex-row justify-start items-center">
            <Image
              src={LogoImage}
              alt="logo"
              className="rotate-45 w-auto md:h-auto "
            />
            <h1 className="font-bold text-2xl text-purple-600">Credenza</h1>
          </div>
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex gap-6 font-medium ">
              {navbarLinks.map((link) => (
                <a href={link.href} key={link.name}>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-4 text-purple-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu md:hidden "
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>

            <Button
              variant="primary"
              className="hidden md:flex md:gap-2 items-center text-white"
            >
              <a
                href="https://docs.google.com/forms/d/1c-S8dKDB5245XYebAUcggYvMBQWlmwFUelLTvUB59D4/edit"
                className="flex gap-2 items-center"
              >
                Start now{"  "}
                <span>
                  <LuExternalLink />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
