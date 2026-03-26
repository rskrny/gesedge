/**
 * Globe logo: three orbital arcs forming a sphere.
 *
 * All arcs are symmetric about the center (100,100).
 * - Equator: horizontal ellipse
 * - Left meridian: vertical ellipse tilted left (via SVG arc)
 * - Right meridian: vertical ellipse tilted right (via SVG arc), salmon accent
 *
 * The two meridian arcs mirror each other across the vertical axis,
 * creating visual balance. Dashed strokes give the deconstructed feel.
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
  // Equator — wide horizontal ellipse
  {
    id: "equator",
    type: "ellipse",
    cx: 100, cy: 100, rx: 80, ry: 26,
    dashArray: "110 35 75 30",
    color: "highlight",
    strokeWidth: 2.2,
    rotationFactor: 1.0,
  },
  // Left meridian — tilted vertical orbit (grey)
  // Symmetric path: starts top-center, curves left, comes back
  {
    id: "meridian-left",
    type: "path",
    d: "M100,18 C60,18 22,55 22,100 C22,145 60,182 100,182 C120,182 135,165 140,145",
    dashArray: "95 35 65 35",
    color: "stroke",
    strokeWidth: 2.0,
    rotationFactor: 0.8,
  },
  // Right meridian — tilted vertical orbit (salmon accent)
  // Mirror of left: starts top-center, curves right, comes back
  {
    id: "meridian-right",
    type: "path",
    d: "M100,18 C140,18 178,55 178,100 C178,145 140,182 100,182 C80,182 65,165 60,145",
    dashArray: "95 35 65 35",
    color: "accent",
    strokeWidth: 2.5,
    rotationFactor: 1.2,
  },
];

export const globePaths: GlobePath[] = arcs;
