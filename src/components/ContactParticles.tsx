"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

const COLORS = [
  "232, 131, 107", // salmon accent
  "242, 241, 237", // warm white fg
  "136, 139, 149", // fg-dim
];

function createParticle(w: number, h: number): Particle {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const maxLife = 300 + Math.random() * 400;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: -0.15 - Math.random() * 0.25,
    r: 1 + Math.random() * 2,
    opacity: 0,
    color,
    life: 0,
    maxLife,
  };
}

export default function ContactParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let particles: Particle[] = [];
    const COUNT = 60;

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }

    resize();
    window.addEventListener("resize", resize);

    // Init particles
    const rect = canvas.getBoundingClientRect();
    for (let i = 0; i < COUNT; i++) {
      const p = createParticle(rect.width, rect.height);
      p.life = Math.random() * p.maxLife; // stagger start
      particles.push(p);
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Fade in/out based on life cycle
        const progress = p.life / p.maxLife;
        if (progress < 0.1) {
          p.opacity = progress / 0.1;
        } else if (progress > 0.85) {
          p.opacity = (1 - progress) / 0.15;
        } else {
          p.opacity = 1;
        }

        const finalOpacity = p.opacity * 0.4;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${finalOpacity})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${finalOpacity * 0.15})`;
        ctx.fill();

        // Recycle dead or out-of-bounds particles
        if (p.life >= p.maxLife || p.y < -10 || p.x < -10 || p.x > w + 10) {
          particles[i] = createParticle(w, h);
          particles[i].y = h + 5; // spawn at bottom
        }
      }

      // Draw subtle connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const lineOpacity = (1 - dist / 120) * 0.06 * Math.min(particles[i].opacity, particles[j].opacity);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(232, 131, 107, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
