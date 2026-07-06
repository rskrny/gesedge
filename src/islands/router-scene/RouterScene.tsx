import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import Scene from './Scene';
import { detectTier, forcedTier, TIER_CONFIG, type Tier } from './tiers';

const Effects = lazy(() => import('./Effects'));

function announceReady(tier: Tier) {
  document.documentElement.classList.add(`tier-${tier}`);
  (window as any).__sceneReady = true;
  window.dispatchEvent(new CustomEvent('scene-ready', { detail: { tier } }));
}

/* ── island root: tiering, visibility gating, runtime demotion ── */
export default function RouterScene() {
  const [tier, setTier] = useState<Tier | null>(null);
  const [active, setActive] = useState(true);
  const [degraded, setDegraded] = useState(false);

  useEffect(() => {
    const t = detectTier();
    setTier(t);
    if (t === 0) announceReady(0);
  }, []);

  // run the loop only while the hero is on screen and the tab is visible
  useEffect(() => {
    if (!tier) return;
    const track = document.getElementById('hero-track');
    let inView = true;
    let visible = document.visibilityState === 'visible';
    const update = () => setActive(inView && visible);

    let io: IntersectionObserver | undefined;
    if (track) {
      io = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          update();
        },
        { rootMargin: '120px' }
      );
      io.observe(track);
    }
    const onVis = () => {
      visible = document.visibilityState === 'visible';
      update();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      io?.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [tier]);

  const cfg = useMemo(() => (tier ? TIER_CONFIG[tier as 1 | 2] : null), [tier]);

  if (!tier || tier === 0 || !cfg) return null;

  const locked = forcedTier()?.locked ?? false;
  const bloomOn = tier === 2 && (!degraded || locked);

  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      dpr={degraded && !locked ? 1 : cfg.dpr}
      camera={{ fov: 42, near: 0.1, far: 60, position: [0, 2.1, 10.8] }}
      gl={{
        antialias: tier === 2,
        alpha: true,
        powerPreference: 'high-performance',
        stencil: false,
        // debug builds can export the canvas (?gfx=…): poster generation + review
        preserveDrawingBuffer: locked,
      }}
      onCreated={() => announceReady(tier)}
      style={{ position: 'absolute', inset: 0 }}
    >
      <PerformanceMonitor
        onDecline={() => setDegraded(true)}
        flipflops={2}
        onFallback={() => setDegraded(true)}
      >
        <Scene tier={tier as 1 | 2} />
        {bloomOn && (
          <Suspense fallback={null}>
            <Effects />
          </Suspense>
        )}
      </PerformanceMonitor>
    </Canvas>
  );
}
