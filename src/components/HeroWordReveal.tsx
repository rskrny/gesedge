"use client";

import { motion } from "framer-motion";

interface HeroWordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function HeroWordReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.06,
}: HeroWordRevealProps) {
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block pb-[0.15em]" style={{ verticalAlign: "bottom" }}>
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.65,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
