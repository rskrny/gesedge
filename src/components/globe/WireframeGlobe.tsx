"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useTransform } from "framer-motion";
import GlobeSVG from "./GlobeSVG";
import useGlobeAnimation from "./useGlobeAnimation";

const HERO_SIZE = 380;
const HERO_SIZE_MOBILE = 240;
const HEADER_SIZE = 44;

/**
 * Compute the globe-slot position from known layout constants instead of
 * getBoundingClientRect. The header is fixed at top:0, h-18 (72px), with
 * px-6 (24px) on mobile / px-12 (48px) on lg.  The slot is the first child
 * in the flex row, so its left = container left-padding, its top = vertical
 * center of the 72px header minus half the slot size.
 *
 * This eliminates the race with the header entrance animation.
 */
function computeSlotPos(vw: number): { x: number; y: number } {
  const headerH = 72; // h-18 = 4.5rem = 72px
  const slotSize = 44; // w-11 h-11 = 2.75rem = 44px
  const maxW = 1280;   // max-w-7xl
  const padX = vw >= 1024 ? 48 : 24; // lg:px-12 : px-6
  const containerLeft = vw > maxW ? (vw - maxW) / 2 + padX : padX;

  return {
    x: containerLeft,
    y: (headerH - slotSize) / 2,
  };
}

export default function WireframeGlobe() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const rotation = useGlobeAnimation(0.15);
  const [mounted, setMounted] = useState(false);

  const [slotPos, setSlotPos] = useState({ x: 24, y: 14 });
  const [isMobile, setIsMobile] = useState(false);
  const [vpWidth, setVpWidth] = useState(1200);
  const [vpHeight, setVpHeight] = useState(800);

  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const measure = useCallback(() => {
    const vw = window.innerWidth;
    setSlotPos(computeSlotPos(vw));
    setIsMobile(vw < 768);
    setVpWidth(vw);
    setVpHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Scroll listener for homepage hero transition
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
    onScroll();
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
