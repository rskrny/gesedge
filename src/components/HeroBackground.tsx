"use client";

/* Lightweight CSS-only hero background — no Three.js, no canvas.
   Layered gradient orbs + SVG geometric accents + floating particles. */

const PARTICLES = [
  { x: "7%",  y: "72%", s: 2, c: "#E91E8C", o: 0.55, d: 8,  dl: 0   },
  { x: "14%", y: "85%", s: 3, c: "#00D4FF", o: 0.40, d: 12, dl: -3  },
  { x: "24%", y: "62%", s: 2, c: "#B794F6", o: 0.40, d: 10, dl: -6  },
  { x: "33%", y: "90%", s: 1, c: "#E91E8C", o: 0.60, d: 9,  dl: -1  },
  { x: "44%", y: "76%", s: 2, c: "#00D4FF", o: 0.45, d: 11, dl: -4  },
  { x: "54%", y: "82%", s: 3, c: "#E91E8C", o: 0.35, d: 13, dl: -7  },
  { x: "63%", y: "67%", s: 2, c: "#B794F6", o: 0.50, d: 8,  dl: -2  },
  { x: "74%", y: "89%", s: 1, c: "#00D4FF", o: 0.55, d: 10, dl: -5  },
  { x: "84%", y: "73%", s: 2, c: "#E91E8C", o: 0.40, d: 14, dl: -8  },
  { x: "91%", y: "83%", s: 3, c: "#B794F6", o: 0.45, d: 9,  dl: -3  },
  { x: "11%", y: "46%", s: 1, c: "#00D4FF", o: 0.35, d: 11, dl: -9  },
  { x: "21%", y: "54%", s: 2, c: "#E91E8C", o: 0.30, d: 15, dl: -2  },
  { x: "38%", y: "41%", s: 3, c: "#B794F6", o: 0.25, d: 12, dl: -6  },
  { x: "50%", y: "51%", s: 1, c: "#E91E8C", o: 0.45, d: 8,  dl: -4  },
  { x: "61%", y: "44%", s: 2, c: "#00D4FF", o: 0.35, d: 10, dl: -1  },
  { x: "77%", y: "57%", s: 3, c: "#E91E8C", o: 0.30, d: 13, dl: -7  },
  { x: "87%", y: "43%", s: 1, c: "#B794F6", o: 0.40, d: 9,  dl: -5  },
  { x: "4%",  y: "36%", s: 2, c: "#00D4FF", o: 0.35, d: 11, dl: -3  },
  { x: "41%", y: "31%", s: 3, c: "#E91E8C", o: 0.25, d: 16, dl: -8  },
  { x: "69%", y: "34%", s: 1, c: "#B794F6", o: 0.30, d: 12, dl: -2  },
];

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Primary gradient orbs — larger, more saturated */}
      <div className="hero-orb hero-orb-magenta" />
      <div className="hero-orb hero-orb-cyan" />
      <div className="hero-orb hero-orb-purple" />

      {/* Secondary depth layer — softer, offset orbs */}
      <div
        className="hero-orb"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(233, 30, 140, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "40%",
          left: "20%",
          animation: "orb-drift-b 25s ease-in-out infinite",
          animationDelay: "-12s",
        }}
      />
      <div
        className="hero-orb"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "10%",
          right: "25%",
          animation: "orb-drift-a 20s ease-in-out infinite",
          animationDelay: "-15s",
        }}
      />

      {/* SVG geometric accent — diagonal circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.04 }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal grid lines */}
        {[150, 300, 450, 600, 750].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="1440" y2={y} stroke="#E91E8C" strokeWidth="0.5" />
        ))}
        {/* Vertical grid lines */}
        {[240, 480, 720, 960, 1200].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="900" stroke="#00D4FF" strokeWidth="0.5" />
        ))}
        {/* Diagonal accent lines — top-right cluster */}
        <line x1="900" y1="0" x2="1440" y2="400" stroke="#E91E8C" strokeWidth="0.8" />
        <line x1="1000" y1="0" x2="1440" y2="300" stroke="#E91E8C" strokeWidth="0.5" />
        <line x1="1100" y1="0" x2="1440" y2="200" stroke="#00D4FF" strokeWidth="0.6" />
        {/* Node dots at intersections */}
        {[
          [480, 300], [720, 150], [960, 300], [240, 450],
          [1200, 450], [720, 600], [480, 600],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" fill="#E91E8C" opacity="0.8" />
        ))}
        {/* Connection arcs */}
        <path d="M 480 300 Q 600 200 720 150" stroke="#E91E8C" strokeWidth="0.4" fill="none" />
        <path d="M 720 150 Q 840 200 960 300" stroke="#00D4FF" strokeWidth="0.4" fill="none" />
        <path d="M 240 450 Q 360 380 480 300" stroke="#B794F6" strokeWidth="0.4" fill="none" />
      </svg>

      {/* Subtle hex-like corner accent — top right */}
      <svg
        className="absolute top-0 right-0"
        style={{ opacity: 0.06, width: "320px", height: "320px" }}
        viewBox="0 0 320 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Concentric partial rings */}
        <circle cx="320" cy="0" r="80" stroke="#00D4FF" strokeWidth="0.8" fill="none" />
        <circle cx="320" cy="0" r="140" stroke="#E91E8C" strokeWidth="0.6" fill="none" />
        <circle cx="320" cy="0" r="200" stroke="#B794F6" strokeWidth="0.5" fill="none" />
        <circle cx="320" cy="0" r="260" stroke="#00D4FF" strokeWidth="0.4" fill="none" />
        {/* Radial spokes */}
        <line x1="240" y1="0" x2="160" y2="80" stroke="#E91E8C" strokeWidth="0.5" />
        <line x1="320" y1="80" x2="240" y2="160" stroke="#00D4FF" strokeWidth="0.5" />
        <line x1="180" y1="0" x2="80" y2="100" stroke="#B794F6" strokeWidth="0.4" />
      </svg>

      {/* Bottom-left subtle accent */}
      <svg
        className="absolute bottom-0 left-0"
        style={{ opacity: 0.05, width: "280px", height: "280px" }}
        viewBox="0 0 280 280"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="0" cy="280" r="100" stroke="#B794F6" strokeWidth="0.8" fill="none" />
        <circle cx="0" cy="280" r="160" stroke="#E91E8C" strokeWidth="0.5" fill="none" />
        <circle cx="0" cy="280" r="220" stroke="#00D4FF" strokeWidth="0.4" fill="none" />
      </svg>

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
            boxShadow: `0 0 ${p.s * 3}px ${p.c}`,
          }}
        />
      ))}

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(233, 30, 140, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(233, 30, 140, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vignette to keep edges dark */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(10, 14, 26, 0.6) 100%)",
        }}
      />
    </div>
  );
}
