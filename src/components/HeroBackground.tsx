"use client";

/* Lightweight CSS-only hero background — no Three.js, no canvas.
   Orb animations run entirely in CSS; particle positions are static. */

const PARTICLES = [
  { x: "7%",  y: "72%", s: 2, c: "#E91E8C", o: 0.45, d: 8,  dl: 0   },
  { x: "14%", y: "85%", s: 3, c: "#00D4FF", o: 0.30, d: 12, dl: -3  },
  { x: "24%", y: "62%", s: 2, c: "#B794F6", o: 0.30, d: 10, dl: -6  },
  { x: "33%", y: "90%", s: 1, c: "#E91E8C", o: 0.50, d: 9,  dl: -1  },
  { x: "44%", y: "76%", s: 2, c: "#00D4FF", o: 0.35, d: 11, dl: -4  },
  { x: "54%", y: "82%", s: 3, c: "#E91E8C", o: 0.25, d: 13, dl: -7  },
  { x: "63%", y: "67%", s: 2, c: "#B794F6", o: 0.40, d: 8,  dl: -2  },
  { x: "74%", y: "89%", s: 1, c: "#00D4FF", o: 0.45, d: 10, dl: -5  },
  { x: "84%", y: "73%", s: 2, c: "#E91E8C", o: 0.30, d: 14, dl: -8  },
  { x: "91%", y: "83%", s: 3, c: "#B794F6", o: 0.35, d: 9,  dl: -3  },
  { x: "11%", y: "46%", s: 1, c: "#00D4FF", o: 0.28, d: 11, dl: -9  },
  { x: "21%", y: "54%", s: 2, c: "#E91E8C", o: 0.22, d: 15, dl: -2  },
  { x: "38%", y: "41%", s: 3, c: "#B794F6", o: 0.18, d: 12, dl: -6  },
  { x: "50%", y: "51%", s: 1, c: "#E91E8C", o: 0.38, d: 8,  dl: -4  },
  { x: "61%", y: "44%", s: 2, c: "#00D4FF", o: 0.28, d: 10, dl: -1  },
  { x: "77%", y: "57%", s: 3, c: "#E91E8C", o: 0.22, d: 13, dl: -7  },
  { x: "87%", y: "43%", s: 1, c: "#B794F6", o: 0.32, d: 9,  dl: -5  },
  { x: "4%",  y: "36%", s: 2, c: "#00D4FF", o: 0.28, d: 11, dl: -3  },
  { x: "41%", y: "31%", s: 3, c: "#E91E8C", o: 0.18, d: 16, dl: -8  },
  { x: "69%", y: "34%", s: 1, c: "#B794F6", o: 0.22, d: 12, dl: -2  },
];

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Gradient orbs */}
      <div className="hero-orb hero-orb-magenta" />
      <div className="hero-orb hero-orb-cyan" />
      <div className="hero-orb hero-orb-purple" />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.s,
            height: p.s,
            background: p.c,
            opacity: p.o,
            animation: `particle-float ${p.d}s linear ${p.dl}s infinite`,
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(233, 30, 140, 0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(233, 30, 140, 0.012) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
