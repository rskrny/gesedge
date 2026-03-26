/**
 * Globe wireframe path data.
 *
 * ViewBox: 200×200, center (100,100), radius 80.
 * Latitude rings are ellipses with foreshortened ry.
 * Meridians are half-ellipse arcs at different longitudes.
 * Gaps via stroke-dasharray give the "deconstructed" feel.
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

// ── Latitude rings ──────────────────────────────────────────
const latitudes: GlobePath[] = [
  {
    id: "lat-n2",
    type: "ellipse",
    cx: 100, cy: 48, rx: 56, ry: 14,
    dashArray: "28 16 42 18 22 14",
    color: "stroke",
    rotationFactor: 0.8,
  },
  {
    id: "lat-n1",
    type: "ellipse",
    cx: 100, cy: 68, rx: 72, ry: 18,
    dashArray: "50 20 32 16 38 22",
    color: "highlight",
    rotationFactor: 0.9,
  },
  {
    id: "lat-eq",
    type: "ellipse",
    cx: 100, cy: 100, rx: 80, ry: 22,
    dashArray: "65 22 45 18 40 28",
    color: "accent",
    strokeWidth: 1.8,
    rotationFactor: 1.0,
  },
  {
    id: "lat-s1",
    type: "ellipse",
    cx: 100, cy: 132, rx: 72, ry: 18,
    dashArray: "38 18 50 14 32 20",
    color: "stroke",
    rotationFactor: 0.9,
  },
  {
    id: "lat-s2",
    type: "ellipse",
    cx: 100, cy: 152, rx: 56, ry: 14,
    dashArray: "22 16 38 20 28 14",
    color: "highlight",
    rotationFactor: 0.8,
  },
];

// ── Meridian arcs ───────────────────────────────────────────
const meridians: GlobePath[] = [
  {
    id: "mer-0",
    type: "path",
    d: "M100,20 C138,22 156,58 156,100 C156,142 138,178 100,180",
    dashArray: "42 18 52 16 28 22",
    color: "stroke",
    rotationFactor: 1.2,
  },
  {
    id: "mer-60",
    type: "path",
    d: "M100,20 C68,24 52,58 50,100 C52,142 68,176 100,180",
    dashArray: "32 20 45 14 38 18",
    color: "accent",
    strokeWidth: 1.4,
    rotationFactor: 1.0,
  },
  {
    id: "mer-120",
    type: "path",
    d: "M100,20 C118,23 128,58 130,100 C128,142 118,177 100,180",
    dashArray: "48 16 28 20 42 14",
    color: "stroke",
    rotationFactor: 1.1,
  },
];

// ── Accent arcs (bridging motif) ────────────────────────────
const accents: GlobePath[] = [
  {
    id: "arc-br-1",
    type: "path",
    d: "M48,58 C68,78 88,96 112,118 C128,134 148,150 158,158",
    dashArray: "38 14 28 18",
    color: "accent",
    strokeWidth: 1.5,
    rotationFactor: 0.7,
  },
  {
    id: "arc-br-2",
    type: "path",
    d: "M152,48 C138,66 118,86 100,104 C82,122 62,140 50,154",
    dashArray: "32 18 42 14",
    color: "accent",
    strokeWidth: 1.3,
    rotationFactor: 0.6,
  },
];

export const globePaths: GlobePath[] = [
  ...latitudes,
  ...meridians,
  ...accents,
];
