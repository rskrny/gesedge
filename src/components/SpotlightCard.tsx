"use client";

import { useRef, useState } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(233, 30, 140, 0.08)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight position
    setSpotlight({ x, y, opacity: 1 });

    // 3D tilt — max ±6 degrees
    const rx = ((y / rect.height) - 0.5) * -12;
    const ry = ((x / rect.width) - 0.5) * 12;
    setTilt({ rx, ry });
  }

  function handleMouseLeave() {
    setSpotlight((s) => ({ ...s, opacity: 0 }));
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: "transform 0.15s ease",
        transformStyle: "preserve-3d",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Spotlight radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 2,
          background: `radial-gradient(350px circle at ${spotlight.x}px ${spotlight.y}px, ${spotlightColor}, transparent 80%)`,
          opacity: spotlight.opacity,
          transition: "opacity 0.3s ease",
        }}
      />
      {children}
    </div>
  );
}
