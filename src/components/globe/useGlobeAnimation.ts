"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Drives a continuous rotation value (0–360) via requestAnimationFrame.
 * Respects prefers-reduced-motion — returns 30 (static 3/4 view) when active.
 *
 * @param speed Degrees per frame at 60 fps. Default 0.15 = ~40s full rotation.
 */
export default function useGlobeAnimation(speed = 0.15): number {
  const [angle, setAngle] = useState(30); // start at a nice 3/4 view
  const frameRef = useRef<number>(0);
  const angleRef = useRef(30);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let lastTime = performance.now();

    function tick(now: number) {
      const delta = now - lastTime;
      lastTime = now;

      // Normalize to 60fps — if running at 120fps, move half as much per frame
      const normalizedSpeed = speed * (delta / 16.667);
      angleRef.current = (angleRef.current + normalizedSpeed) % 360;
      setAngle(angleRef.current);

      frameRef.current = requestAnimationFrame(tick);
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [speed]);

  return angle;
}
