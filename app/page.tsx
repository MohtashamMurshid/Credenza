import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ToolsUsed } from "@/components/ToolsUsed";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ToolsUsed />
      <Contact />
    </>
  );
}
