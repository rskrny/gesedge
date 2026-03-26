"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import GlobeSVG from "./GlobeSVG";
import useGlobeAnimation from "./useGlobeAnimation";

const HERO_SIZE = 380;
const HERO_SIZE_MOBILE = 240;
const HEADER_SIZE = 56;

export default function WireframeGlobe() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const rotation = useGlobeAnimation(0.15);
  const [mounted, setMounted] = useState(false);

  const [slotPos, setSlotPos] = useState({ x: 24, y: 8 });
  const [isMobile, setIsMobile] = useState(false);
  const [vpWidth, setVpWidth] = useState(1200);
  const [vpHeight, setVpHeight] = useState(800);

  useEffect(() => { setMounted(true); }, []);

  const measure = useCallback(() => {
    const slot = document.querySelector("[data-globe-slot]");
    if (slot) {
      const rect = slot.getBoundingClientRect();
      setSlotPos({
        x: rect.left + (rect.width - HEADER_SIZE) / 2,
        y: rect.top + (rect.height - HEADER_SIZE) / 2,
      });
    }
    setIsMobile(window.innerWidth < 768);
    setVpWidth(window.innerWidth);
    setVpHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure, pathname]);

  const heroRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    heroRef.current = isHome ? document.getElementById("hero-section") : null;
  }, [isHome]);

  const { scrollYProgress } = useScroll(
    isHome && heroRef.current
      ? { target: heroRef as React.RefObject<HTMLElement>, offset: ["start start", "end start"] }
      : undefined
  );

  const heroSize = isMobile ? HERO_SIZE_MOBILE : HERO_SIZE;

  // Position globe in the open right side of the hero (text is left-aligned)
  const heroX = isMobile
    ? vpWidth / 2 - heroSize / 2          // centered on mobile
    : vpWidth * 0.58;                       // right side on desktop
  const heroY = vpHeight / 2 - heroSize / 2; // vertically centered in viewport

  const size = useTransform(scrollYProgress, [0, 0.35], [heroSize, HEADER_SIZE]);
  const x = useTransform(scrollYProgress, [0, 0.35], [heroX, slotPos.x]);
  const y = useTransform(scrollYProgress, [0, 0.35], [heroY, slotPos.y]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.3], [0.25, 0.9]);

  if (!mounted) return null;

  if (!isHome) {
    return (
      <div
        className="fixed z-[55] pointer-events-none"
        style={{
          left: slotPos.x,
          top: slotPos.y,
          width: HEADER_SIZE,
          height: HEADER_SIZE,
        }}
      >
        <GlobeSVG size={HEADER_SIZE} rotationOffset={rotation} opacity={0.9} />
      </div>
    );
  }

  return (
    <motion.div
      className="fixed z-[55] pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        opacity: globeOpacity,
      }}
    >
      <GlobeSVG rotationOffset={rotation} className="w-full h-full" />
    </motion.div>
  );
}
