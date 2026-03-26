"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import GlobeSVG from "./GlobeSVG";
import useGlobeAnimation from "./useGlobeAnimation";

const HERO_SIZE = 360;
const HERO_SIZE_MOBILE = 260;
const HEADER_SIZE = 44;

export default function WireframeGlobe() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const rotation = useGlobeAnimation(0.15);
  const [mounted, setMounted] = useState(false);

  // Slot position in header + viewport info
  const [slotPos, setSlotPos] = useState({ x: 24, y: 14 });
  const [isMobile, setIsMobile] = useState(false);
  const [vpWidth, setVpWidth] = useState(1200);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Measure header slot and viewport
  const measure = useCallback(() => {
    const slot = document.querySelector("[data-globe-slot]");
    if (slot) {
      const rect = slot.getBoundingClientRect();
      setSlotPos({ x: rect.left + (rect.width - HEADER_SIZE) / 2, y: rect.top + (rect.height - HEADER_SIZE) / 2 });
    }
    setIsMobile(window.innerWidth < 768);
    setVpWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure, pathname]);

  // Scroll tracking for homepage hero
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
  const heroCenterX = vpWidth / 2 - heroSize / 2;
  const heroCenterY = isMobile ? 180 : 220;

  // Scroll-driven transforms (homepage only)
  const size = useTransform(scrollYProgress, [0, 0.35], [heroSize, HEADER_SIZE]);
  const x = useTransform(scrollYProgress, [0, 0.35], [heroCenterX, slotPos.x]);
  const y = useTransform(scrollYProgress, [0, 0.35], [heroCenterY, slotPos.y]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.25], [0.3, 0.9]);

  // Don't render until client-side mount to avoid hydration mismatch
  if (!mounted) return null;

  // Non-homepage: static header logo
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

  // Homepage: scroll-linked shrink animation
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
