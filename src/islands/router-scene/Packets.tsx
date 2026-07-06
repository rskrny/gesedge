import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { buildRoutes, sampleRoute, PALETTE, type Route } from './routes';

interface PacketsProps {
  count: number;
  /** mutable bus: Core reads pulse, Endpoints read arrivals */
  pulseRef: React.MutableRefObject<number>;
  onArrive?: (endpointIndex: number) => void;
}

interface PacketState {
  route: Route;
  t: number;
  speed: number;
  size: number;
  passedCore: boolean;
}

const WARM = new THREE.Color(PALETTE.warm);
const COOL = new THREE.Color(PALETTE.cool);

/** One InstancedMesh; positions come from prebaked curve LUTs. One draw call. */
export default function Packets({ count, pulseRef, onArrive }: PacketsProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const routes = useMemo(buildRoutes, []);

  const packets = useMemo<PacketState[]>(() => {
    return Array.from({ length: count }, () => ({
      route: routes[Math.floor(Math.random() * routes.length)],
      // negative t = staggered entry so the tree doesn't start synchronized
      t: -Math.random() * 1.2,
      speed: 0.07 + Math.random() * 0.09,
      size: 0.7 + Math.random() * 0.6,
      passedCore: false,
    }));
  }, [count, routes]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const v = useMemo(() => new THREE.Vector3(), []);
  const color = useMemo(() => new THREE.Color(), []);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const dt = Math.min(delta, 0.05);

    for (let i = 0; i < packets.length; i++) {
      const p = packets[i];
      p.t += p.speed * dt * 1.6;

      if (p.t >= 1) {
        onArrive?.(p.route.endpointIndex);
        p.route = routes[Math.floor(Math.random() * routes.length)];
        p.t = -Math.random() * 0.5;
        p.speed = 0.07 + Math.random() * 0.09;
        p.size = 0.7 + Math.random() * 0.6;
        p.passedCore = false;
      }

      if (!p.passedCore && p.t >= p.route.tCore) {
        p.passedCore = true;
        pulseRef.current = Math.min(pulseRef.current + 0.45, 1.6);
      }

      if (p.t < 0) {
        dummy.position.set(0, -999, 0); // parked offstage until its stagger elapses
        dummy.scale.setScalar(0.0001);
      } else {
        sampleRoute(p.route, p.t, v);
        dummy.position.copy(v);
        // delicate points of light; swell slightly through the middle
        const edge = Math.min(p.t, 1 - p.t);
        const s = (0.014 + Math.min(edge * 0.12, 0.012)) * p.size;
        dummy.scale.setScalar(s);
      }
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);

      // warm (input) → cool (routed) along the journey; >1 so bloom catches it
      color.copy(WARM).lerp(COOL, THREE.MathUtils.smoothstep(p.t, 0.35, 0.75));
      color.multiplyScalar(1.9);
      mesh.setColorAt(i, color);
    }

    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  );
}
