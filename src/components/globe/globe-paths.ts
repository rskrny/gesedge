/**
 * Globe logo: bold swoosh arcs implying a sphere.
 *
 * Inspired by orbital ring aesthetics. 2 bold arcs + 1 accent arc
 * sweep around a center to create a globe impression.
 * Thick strokes, confident, reads at any size.
 *
 * ViewBox: 200×200, center (100,100).
 */

export interface GlobePath {
  id: string;
  type: "ellipse" | "path";
  cx?: number;
  cy?: number;
  rx?: number;
  ry?: number;
  d?: string;
  dashArray?: string;
  color: "stroke" | "accent" | "highlight";
  strokeWidth?: number;
  rotationFactor?: number;
}

const arcs: GlobePath[] = [
  // Primary arc — wide horizontal orbit (equator-like)
  {
    id: "orbit-main",
    type: "ellipse",
    cx: 100, cy: 100, rx: 82, ry: 28,
    dashArray: "120 40 80 30",
    color: "highlight",
    strokeWidth: 2.5,
    rotationFactor: 1.0,
  },
  // Secondary arc — tilted, wraps top-to-bottom
  {
    id: "orbit-tilt",
    type: "path",
    d: "M55,28 C20,65 18,135 55,172 C92,209 160,180 175,130 C190,80 155,20 110,18 C80,17 62,22 55,28",
    dashArray: "100 35 70 40",
    color: "stroke",
    strokeWidth: 2.2,
    rotationFactor: 0.8,
  },
  // Salmon accent arc — crossing arc that "bridges" the other two
  {
    id: "orbit-accent",
    type: "path",
    d: "M145,28 C180,65 182,135 145,172 C108,209 40,180 25,130 C10,80 45,20 90,18 C120,17 138,22 145,28",
    dashArray: "90 45 60 35",
    color: "accent",
    strokeWidth: 2.8,
    rotationFactor: 1.2,
  },
];

export const globePaths: GlobePath[] = arcs;
