"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({ value, className = "", duration = 2000 }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  // Extract numeric part and suffix (e.g., "100+" -> 100 and "+")
  const numericMatch = value.match(/^(\d+)/);
  const targetNum = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = value.replace(/^\d+/, "");

  useEffect(() => {
    if (!isInView || targetNum === 0) {
      if (isInView && targetNum === 0) setDisplay(value);
      return;
    }

    let startTime: number;
    let frameId: number;

    function animate(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * targetNum);

      setDisplay(`${current}${suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    }

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, targetNum, suffix, value, duration]);

  return (
    <span ref={ref} className={className}>
      {isInView ? display : `0${suffix}`}
    </span>
  );
}
