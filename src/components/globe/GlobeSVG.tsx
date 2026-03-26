"use client";

import { globePaths, type GlobePath } from "./globe-paths";

interface GlobeSVGProps {
  /** Rendered size in px */
  size?: number;
  /** Rotation offset 0-360, drives pseudo-3D rotation */
  rotationOffset?: number;
  /** Overall opacity */
  opacity?: number;
  className?: string;
}

const COLOR_MAP = {
  stroke: "var(--globe-stroke, #4A4D5A)",
  accent: "var(--globe-accent, #E8836B)",
  highlight: "var(--globe-highlight, rgba(255,255,255,0.6))",
};

function GlobePathElement({ path, rotationOffset }: { path: GlobePath; rotationOffset: number }) {
  const stroke = COLOR_MAP[path.color];
  const sw = path.strokeWidth ?? 1.5;
  const factor = path.rotationFactor ?? 1.0;
  const dashOffset = (rotationOffset * factor * 1.5) % 400;

  const shared = {
    fill: "none",
    stroke,
    strokeWidth: sw,
    strokeLinecap: "round" as const,
    strokeDasharray: path.dashArray,
    strokeDashoffset: dashOffset,
    vectorEffect: "non-scaling-stroke" as const,
  };

  if (path.type === "ellipse") {
    const ryShift = Math.sin((rotationOffset * factor * Math.PI) / 180) * 3;
    return (
      <ellipse
        {...shared}
        cx={path.cx}
        cy={path.cy}
        rx={path.rx}
        ry={(path.ry ?? 20) + ryShift}
      />
    );
  }

  return <path {...shared} d={path.d} />;
}

export default function GlobeSVG({
  size,
  rotationOffset = 0,
  opacity = 1,
  className = "",
}: GlobeSVGProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        width: size ? `${size}px` : undefined,
        height: size ? `${size}px` : undefined,
        opacity,
      }}
    >
      {/* Globe arc paths */}
      {globePaths.map((p) => (
        <GlobePathElement key={p.id} path={p} rotationOffset={rotationOffset} />
      ))}
    </svg>
  );
}
