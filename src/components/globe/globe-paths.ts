/**
 * Simplified globe wireframe.
 *
 * ViewBox: 200×200, center (100,100), radius 80.
 * Fewer lines = cleaner read at all sizes.
 * Just 3 latitude rings, 2 meridians, and 1 accent arc.
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

const latitudes: GlobePath[] = [
  {
    id: "lat-n",
    type: "ellipse",
    cx: 100, cy: 60, rx: 66, ry: 16,
    dashArray: "40 22 50 20",
    color: "stroke",
    rotationFactor: 0.9,
  },
  {
    id: "lat-eq",
    type: "ellipse",
    cx: 100, cy: 100, rx: 80, ry: 22,
    dashArray: "60 24 48 22",
    color: "accent",
    strokeWidth: 1.8,
    rotationFactor: 1.0,
  },
  {
    id: "lat-s",
    type: "ellipse",
    cx: 100, cy: 140, rx: 66, ry: 16,
    dashArray: "45 20 38 24",
    color: "stroke",
    rotationFactor: 0.9,
  },
];

const meridians: GlobePath[] = [
  {
    id: "mer-main",
    type: "path",
    d: "M100,20 C140,22 158,58 158,100 C158,142 140,178 100,180",
    dashArray: "50 20 45 22",
    color: "highlight",
    strokeWidth: 1.4,
    rotationFactor: 1.2,
  },
  {
    id: "mer-side",
    type: "path",
    d: "M100,20 C65,24 48,58 46,100 C48,142 65,176 100,180",
    dashArray: "42 24 52 18",
    color: "stroke",
    rotationFactor: 1.0,
  },
];

const accents: GlobePath[] = [
  {
    id: "arc-bridge",
    type: "path",
    d: "M42,62 C72,82 100,100 130,120 C150,134 162,148 168,158",
    dashArray: "44 18 36 20",
    color: "accent",
    strokeWidth: 1.4,
    rotationFactor: 0.7,
  },
];

export const globePaths: GlobePath[] = [
  ...latitudes,
  ...meridians,
  ...accents,
];
