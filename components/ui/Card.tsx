"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/utils";

// Define the type for the Card
type Card = {
  title: string;
  src: string;
  link: string;
};

export const CardComponent = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative light:bg-neutral-900 dark:bg-neutral-900 overflow-hidden h-60 md:h-60 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 text-neutral-50">
          {card.title}
        </div>
      </div>
    </div>
  )
);

CardComponent.displayName = "CardComponent";

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <a href={card.link} key={card.title}>
          <CardComponent
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        </a>
      ))}
    </div>
  );
}
