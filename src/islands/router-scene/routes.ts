import * as THREE from 'three';

/* ── The Router: scene graph data ──────────────────────────────────
   Work flows in from the left (3 sources), converges at the core,
   and is routed out along 4 named branches. Warm → cool = in → out.
   All geometry is procedural: no assets to load, nothing to fetch. */

export const CORE = new THREE.Vector3(0, 0, 0);

const SOURCES = [
  new THREE.Vector3(-7.6, 1.7, -1.1),
  new THREE.Vector3(-8.0, -0.5, 0.7),
  new THREE.Vector3(-7.2, 0.5, 2.1),
];

const SOURCE_MIDS = [
  new THREE.Vector3(-5.0, 1.1, -0.6),
  new THREE.Vector3(-5.4, -0.3, 0.5),
  new THREE.Vector3(-4.8, 0.35, 1.4),
];

const MERGE = new THREE.Vector3(-2.3, 0.12, 0.15);

export interface EndpointDef {
  id: string;
  name: string;
  outcome: string;
  status: string;
  elbow: THREE.Vector3;
  pos: THREE.Vector3;
}

export const ENDPOINTS: EndpointDef[] = [
  {
    id: 'goldie',
    name: 'Goldie Group',
    outcome: 'Email read, tagged, routed',
    status: 'Client system',
    elbow: new THREE.Vector3(2.2, 0.4, -0.5),
    pos: new THREE.Vector3(4.9, 0.55, -1.0),
  },
  {
    id: 'shopmyroom',
    name: 'ShopMyRoom',
    outcome: 'Photo becomes a 3D room',
    status: 'Live product',
    elbow: new THREE.Vector3(2.0, -0.55, 0.9),
    pos: new THREE.Vector3(4.4, -1.1, 1.55),
  },
  {
    id: 'wallet',
    name: 'Wallet e-writer',
    outcome: 'Handwriting becomes notes',
    status: 'R&D',
    elbow: new THREE.Vector3(1.9, 0.95, 0.75),
    pos: new THREE.Vector3(4.1, 1.65, 1.2),
  },
  {
    id: 'bloodline',
    name: 'Bloodline Charters',
    outcome: 'Request becomes a booking',
    status: 'In production',
    elbow: new THREE.Vector3(2.4, -0.12, -1.35),
    pos: new THREE.Vector3(5.2, -0.45, -2.3),
  },
];

/* Routes: every source × every endpoint = 12 full paths through the core. */

export interface Route {
  lut: Float32Array; // xyz * SAMPLES
  tCore: number; // param where the path passes the core
  endpointIndex: number;
}

export const SAMPLES = 160;

function bakeCurve(points: THREE.Vector3[]): Float32Array {
  const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal', 0.5);
  const lut = new Float32Array(SAMPLES * 3);
  const v = new THREE.Vector3();
  for (let i = 0; i < SAMPLES; i++) {
    curve.getPoint(i / (SAMPLES - 1), v);
    lut[i * 3] = v.x;
    lut[i * 3 + 1] = v.y;
    lut[i * 3 + 2] = v.z;
  }
  return lut;
}

function findCoreParam(lut: Float32Array): number {
  let best = 0;
  let bestD = Infinity;
  for (let i = 0; i < SAMPLES; i++) {
    const dx = lut[i * 3] - CORE.x;
    const dy = lut[i * 3 + 1] - CORE.y;
    const dz = lut[i * 3 + 2] - CORE.z;
    const d = dx * dx + dy * dy + dz * dz;
    if (d < bestD) {
      bestD = d;
      best = i;
    }
  }
  return best / (SAMPLES - 1);
}

export function buildRoutes(): Route[] {
  const routes: Route[] = [];
  for (let s = 0; s < SOURCES.length; s++) {
    for (let e = 0; e < ENDPOINTS.length; e++) {
      const ep = ENDPOINTS[e];
      const lut = bakeCurve([
        SOURCES[s],
        SOURCE_MIDS[s],
        MERGE,
        CORE,
        ep.elbow,
        ep.pos,
      ]);
      routes.push({ lut, tCore: findCoreParam(lut), endpointIndex: e });
    }
  }
  return routes;
}

export function sampleRoute(route: Route, t: number, out: THREE.Vector3): THREE.Vector3 {
  const clamped = Math.min(Math.max(t, 0), 1);
  const f = clamped * (SAMPLES - 1);
  const i = Math.floor(f);
  const j = Math.min(i + 1, SAMPLES - 1);
  const a = f - i;
  const lut = route.lut;
  out.set(
    lut[i * 3] + (lut[j * 3] - lut[i * 3]) * a,
    lut[i * 3 + 1] + (lut[j * 3 + 1] - lut[i * 3 + 1]) * a,
    lut[i * 3 + 2] + (lut[j * 3 + 2] - lut[i * 3 + 2]) * a
  );
  return out;
}

/* Static line work (the visible tree). Fewer points than the packet LUTs. */

function linePoints(points: THREE.Vector3[], n = 56): THREE.Vector3[] {
  const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal', 0.5);
  return curve.getPoints(n);
}

export function buildTreeLines(): {
  inputs: THREE.Vector3[][];
  outputs: THREE.Vector3[][];
} {
  const inputs = SOURCES.map((src, i) =>
    linePoints([src, SOURCE_MIDS[i], MERGE, CORE])
  );
  const outputs = ENDPOINTS.map((ep) => linePoints([CORE, ep.elbow, ep.pos]));
  return { inputs, outputs };
}

/* Camera choreography: position + look-at paths sampled by scroll progress.
   Beats: wide reveal → push to core → bank along the Goldie branch → pull
   back to the constellation. */

export const CAMERA_POS = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(-0.4, 1.9, 10.6),
    new THREE.Vector3(1.0, 0.7, 4.8),
    new THREE.Vector3(2.6, 1.0, 2.2),
    new THREE.Vector3(-2.2, 4.6, 12.4),
  ],
  false,
  'centripetal',
  0.5
);

/* look targets sit LEFT of the action so the tree occupies the right half
   of the screen while the text column owns the left */
export const CAMERA_LOOK = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(-1.15, 0.2, 0),
    new THREE.Vector3(-0.5, 0.1, 0),
    new THREE.Vector3(4.2, 0.45, -0.85),
    new THREE.Vector3(0.2, 0.1, 0),
  ],
  false,
  'centripetal',
  0.5
);

export const PALETTE = {
  stroke: '#ece6d8',
  warm: '#f0c896',
  cool: '#9fb6d6',
  fog: '#08080c',
};
