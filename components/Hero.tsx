import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import designImage1 from "@/images/design-example-1.png";
import designImage2 from "@/images/design-example-2.png";
import PointerP from "./Pointer";

export default function Hero() {
  return (
    <section className="py-24 flex justify-center overflow-x-clip">
      <div className="container relative">
        <div className="absolute left-56 top-96 hidden lg:block">
          <PointerP name={"Aqib"} />
        </div>
        <div className="absolute right-80 -top-4 hidden lg:block">
          <PointerP name={"Rayyan"} />
        </div>

        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image src={designImage1} alt="design Image 1" />
        </div>
        <div className="absolute -right-64 -top-16 hidden lg:block">
          <Image src={designImage2} alt="design Image 2" />
        </div>
        <div className="flex items-center flex-col">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-600 to to-pink-400 rounded-full text-neutral-950 font-semibold ">
            🔖 We would love to work with You
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 max-w-4xl">
            Your Work, Presented Perfectly
          </h1>
          <p className="text-center text-xl text-white/50 mt-6 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-3xl ">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent px-4 md:px-10 md:flex-1 focus:outline-none"
            />
            <Button
              variant={"primary"}
              type="submit"
              className="whitespace-nowrap"
              size="sm"
            >
              Get Started
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
