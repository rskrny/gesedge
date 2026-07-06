/* ── Device tiering ────────────────────────────────────────────────
   Tier 0: no scene. Static poster + normal scrolling. (reduced motion,
           save-data, no WebGL2, very low memory)
   Tier 1: scene without postprocessing, DPR 1, fewer packets. (mobile,
           low cores/memory)
   Tier 2: full scene — bloom, mouse parallax, DPR up to 1.75.
   The scene can still demote itself at runtime if the frame rate drops. */

export type Tier = 0 | 1 | 2;

interface NavigatorExtras extends Navigator {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
}

/** Dev/debug override: ?gfx=0|1|2 forces a tier; ?gfx=2!  also locks out
 *  runtime demotion. Returns null when no override is present. */
export function forcedTier(): { tier: Tier; locked: boolean } | null {
  if (typeof window === 'undefined') return null;
  const raw = new URLSearchParams(window.location.search).get('gfx');
  if (!raw) return null;
  const locked = raw.endsWith('!');
  const n = Number.parseInt(raw, 10);
  if (n === 0 || n === 1 || n === 2) return { tier: n as Tier, locked };
  return null;
}

export function detectTier(): Tier {
  if (typeof window === 'undefined') return 0;
  const forced = forcedTier();
  if (forced) return forced.tier;
  const nav = navigator as NavigatorExtras;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 0;
  if (nav.connection?.saveData) return 0;
  if (nav.deviceMemory !== undefined && nav.deviceMemory <= 2) return 0;

  // WebGL2 probe — bail to poster if the context won't come up
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: false });
    if (!gl) return 0;
    const lose = gl.getExtension('WEBGL_lose_context');
    lose?.loseContext();
  } catch {
    return 0;
  }

  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const lowCores = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4;
  const lowMem = nav.deviceMemory !== undefined && nav.deviceMemory <= 4;

  if (coarse || lowCores || lowMem) return 1;
  return 2;
}

export const TIER_CONFIG = {
  1: { packets: 56, dust: 160, dpr: [1, 1] as [number, number], bloom: false, parallax: false },
  2: { packets: 120, dust: 320, dpr: [1, 1.75] as [number, number], bloom: true, parallax: true },
};
