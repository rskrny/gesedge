"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
}

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  const variantClasses = {
    primary:
      "bg-accent text-bg font-semibold hover:bg-accent-hover",
    outline:
      "bg-transparent text-fg border border-border hover:border-accent hover:text-accent",
    ghost:
      "bg-transparent text-accent hover:text-accent-hover",
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-wide font-display rounded-sm transition-colors duration-300";

  const Tag = external ? "a" : Link;
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Tag
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...linkProps}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
