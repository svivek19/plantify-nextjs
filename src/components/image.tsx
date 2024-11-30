"use client";

import { FocusCards } from "@/components/ui/focus-cards";

interface Card {
  title: string;
  src: string;
}

export function FocusCardsDemo() {
  const cards: Card[] = [
    {
      title: "Adrija Plant",
      src: "/adrija-plant.webp",
    },
    {
      title: "Greenery Nursery Snake Plant",
      src: "/greenery-nursery-snake-plant.webp",
    },
    {
      title: "Lilly Plant",
      src: "/lillyplant.webp",
    },
  ];

  return <FocusCards cards={cards} />;
}
