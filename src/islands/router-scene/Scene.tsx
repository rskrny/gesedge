import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Line, Html } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Packets from './Packets';
import {
  buildTreeLines,
  ENDPOINTS,
  CAMERA_POS,
  CAMERA_LOOK,
  PALETTE,
  CORE,
} from './routes';
import { TIER_CONFIG } from './tiers';

gsap.registerPlugin(ScrollTrigger);

interface SceneProps {
  tier: 1 | 2;
}

/* ── camera rig: scroll drives progress; frame-rate independent damping ── */
function CameraRig({ parallax }: { parallax: boolean }) {
  const progressRef = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useMemo(() => new THREE.Vector3(0, 2.1, 10.8), []);
  const look = useMemo(() => new THREE.Vector3(0.4, 0.2, 0), []);
  const targetPos = useMemo(() => new THREE.Vector3(), []);
  const targetLook = useMemo(() => new THREE.Vector3(), []);

  useEffect(() => {
    const track = document.getElementById('hero-track');
    if (!track) return;
    const st = ScrollTrigger.create({
      trigger: track,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });
    return () => st.kill();
  }, []);

  useEffect(() => {
    if (!parallax) return;
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [parallax]);

  useFrame(({ camera, viewport }, delta) => {
    const p = THREE.MathUtils.clamp(progressRef.current, 0, 1);
    CAMERA_POS.getPoint(p, targetPos);
    CAMERA_LOOK.getPoint(p, targetLook);

    // portrait screens: pull back so the tree still fits, and push the
    // scene right so it clears the text column
    if (viewport.aspect < 0.9) {
      targetPos.z *= 1.4;
      targetPos.x *= 1.15;
      targetPos.y += 0.4;
      targetLook.x -= 0.7;
    }

    if (parallax) {
      targetPos.x += mouse.current.x * 0.35;
      targetPos.y += -mouse.current.y * 0.22;
    }

    const k = 1 - Math.exp(-4.5 * delta);
    pos.lerp(targetPos, k);
    look.lerp(targetLook, k);
    camera.position.copy(pos);
    camera.lookAt(look);
  });

  return null;
}

/* ── the router core: emissive heart + counter-rotating cages + key light ── */
function Core({ pulseRef }: { pulseRef: React.MutableRefObject<number> }) {
  const heart = useRef<THREE.Mesh>(null);
  const cageA = useRef<THREE.Mesh>(null);
  const cageB = useRef<THREE.Mesh>(null);
  const light = useRef<THREE.PointLight>(null);

  useFrame((_, delta) => {
    pulseRef.current *= Math.exp(-2.6 * delta);
    const pulse = pulseRef.current;
    const t = performance.now() * 0.001;

    if (heart.current) {
      const s = 0.23 * (1 + pulse * 0.12 + Math.sin(t * 1.4) * 0.02);
      heart.current.scale.setScalar(s);
    }
    if (cageA.current) {
      cageA.current.rotation.y = t * 0.18;
      cageA.current.rotation.x = Math.sin(t * 0.12) * 0.25;
    }
    if (cageB.current) {
      cageB.current.rotation.y = -t * 0.12;
      cageB.current.rotation.z = Math.cos(t * 0.1) * 0.2;
    }
    if (light.current) light.current.intensity = 5 + pulse * 5;
  });

  const heartColor = useMemo(
    () => new THREE.Color(PALETTE.warm).multiplyScalar(2.1),
    []
  );

  return (
    <group position={CORE}>
      <mesh ref={heart}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color={heartColor} toneMapped={false} />
      </mesh>
      <mesh ref={cageA}>
        <icosahedronGeometry args={[0.58, 1]} />
        <meshBasicMaterial
          color={PALETTE.stroke}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh ref={cageB}>
        <icosahedronGeometry args={[0.88, 1]} />
        <meshBasicMaterial
          color={PALETTE.cool}
          wireframe
          transparent
          opacity={0.14}
        />
      </mesh>
      {/* the single key light of the scene */}
      <pointLight ref={light} color={PALETTE.warm} intensity={5} distance={14} decay={1.6} />
    </group>
  );
}

/* ── endpoints: node mesh + screen-space label that flashes on arrival ── */
function Endpoints({
  registerArrive,
}: {
  registerArrive: (fn: (i: number) => void) => void;
}) {
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastHit = useRef<number[]>(ENDPOINTS.map(() => 0));

  useEffect(() => {
    registerArrive((i: number) => {
      const el = labelRefs.current[i];
      const now = performance.now();
      if (!el || now - lastHit.current[i] < 700) return;
      lastHit.current[i] = now;
      el.classList.remove('is-hit');
      // restart the CSS animation
      void el.offsetWidth;
      el.classList.add('is-hit');
    });
  }, [registerArrive]);

  return (
    <>
      {ENDPOINTS.map((ep, i) => (
        <group key={ep.id} position={ep.pos}>
          <mesh>
            <octahedronGeometry args={[0.11, 0]} />
            <meshStandardMaterial
              color={PALETTE.cool}
              emissive={PALETTE.cool}
              emissiveIntensity={0.9}
              roughness={0.35}
              metalness={0.1}
            />
          </mesh>
          <Html
            center
            zIndexRange={[5, 0]}
            wrapperClass="ep-wrapper"
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="ep-label"
              ref={(el) => {
                labelRefs.current[i] = el;
              }}
            >
              <span className="ep-name">{ep.name}</span>
              <span className="ep-outcome">{ep.outcome}</span>
              <span className="ep-status">{ep.status}</span>
            </div>
          </Html>
        </group>
      ))}
    </>
  );
}

/* ── ambient dust: one Points cloud, drifts as a whole ── */
function Dust({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = -9 + Math.random() * 16.5;
      arr[i * 3 + 1] = -3.2 + Math.random() * 7.4;
      arr[i * 3 + 2] = -4.5 + Math.random() * 7.5;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={PALETTE.stroke}
        transparent
        opacity={0.32}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ── the visible tree line-work ── */
function TreeLines() {
  const { inputs, outputs } = useMemo(buildTreeLines, []);
  const highlightMat = useRef<any>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const track = document.getElementById('hero-track');
    if (!track) return;
    const st = ScrollTrigger.create({
      trigger: track,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });
    return () => st.kill();
  }, []);

  useFrame(() => {
    // brighten the Goldie branch while the camera rides it (beat 2)
    const line = highlightMat.current;
    if (line?.material) {
      const p = progressRef.current;
      const inRamp = THREE.MathUtils.clamp((p - 0.38) / 0.12, 0, 1);
      const outRamp = THREE.MathUtils.clamp((0.82 - p) / 0.12, 0, 1);
      line.material.opacity = 0.85 * inRamp * outRamp;
    }
  });

  const goldie = outputs[0];

  return (
    <group>
      {inputs.map((pts, i) => (
        <Line
          key={`in-${i}`}
          points={pts}
          color={PALETTE.warm}
          transparent
          opacity={0.13}
          lineWidth={1}
        />
      ))}
      {outputs.map((pts, i) => (
        <Line
          key={`out-${i}`}
          points={pts}
          color={PALETTE.cool}
          transparent
          opacity={0.16}
          lineWidth={1}
        />
      ))}
      {/* animated highlight over the Goldie branch */}
      <Line
        ref={highlightMat as any}
        points={goldie}
        color={PALETTE.warm}
        transparent
        opacity={0}
        lineWidth={2}
      />
    </group>
  );
}

export default function Scene({ tier }: SceneProps) {
  const cfg = TIER_CONFIG[tier];
  const pulseRef = useRef(0);
  const arriveFns = useRef<((i: number) => void)[]>([]);

  const registerArrive = useMemo(
    () => (fn: (i: number) => void) => {
      arriveFns.current.push(fn);
    },
    []
  );

  const onArrive = useMemo(
    () => (i: number) => {
      for (const fn of arriveFns.current) fn(i);
    },
    []
  );

  return (
    <>
      <fog attach="fog" args={[PALETTE.fog, 9, 24]} />
      <ambientLight intensity={0.12} />
      <CameraRig parallax={cfg.parallax} />
      <TreeLines />
      <Core pulseRef={pulseRef} />
      <Endpoints registerArrive={registerArrive} />
      <Packets count={cfg.packets} pulseRef={pulseRef} onArrive={onArrive} />
      <Dust count={cfg.dust} />
    </>
  );
}
