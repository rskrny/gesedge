"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useTransform, useMotionValueEvent } from "framer-motion";
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

  // Manual scroll progress (0-1) — avoids useScroll target ref issues
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Manual scroll listener for homepage (safer than useScroll with target ref)
  useEffect(() => {
    if (!isHome || !mounted) return;

    function onScroll() {
      const heroEl = document.getElementById("hero-section");
      if (!heroEl) return;
      const rect = heroEl.getBoundingClientRect();
      const total = heroEl.offsetHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      scrollProgress.set(progress);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, mounted, scrollProgress]);

  const heroSize = isMobile ? HERO_SIZE_MOBILE : HERO_SIZE;
  const heroX = isMobile ? vpWidth / 2 - heroSize / 2 : vpWidth * 0.58;
  const heroY = vpHeight / 2 - heroSize / 2;

  const size = useTransform(scrollProgress, [0, 0.35], [heroSize, HEADER_SIZE]);
  const x = useTransform(scrollProgress, [0, 0.35], [heroX, slotPos.x]);
  const y = useTransform(scrollProgress, [0, 0.35], [heroY, slotPos.y]);
  const globeOpacity = useTransform(scrollProgress, [0, 0.3], [0.3, 0.9]);

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
