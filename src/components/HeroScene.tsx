"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 120;
const CONNECTION_DISTANCE = 2.2;
const SPHERE_RADIUS = 4;

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  // Generate particle positions in a sphere
  const particles = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    const velocities: THREE.Vector3[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = SPHERE_RADIUS * (0.3 + Math.random() * 0.7);
      positions.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003
        )
      );
    }
    return { positions, velocities };
  }, []);

  // Line geometry for connections
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const maxLines = PARTICLE_COUNT * PARTICLE_COUNT;
    const positions = new Float32Array(maxLines * 6);
    const colors = new Float32Array(maxLines * 6);
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setDrawRange(0, 0);
    return geo;
  }, []);

  const handlePointerMove = useCallback(
    (e: { clientX: number; clientY: number }) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    },
    []
  );

  // Add pointer listener
  useMemo(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("pointermove", handlePointerMove);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("pointermove", handlePointerMove);
      }
    };
  }, [handlePointerMove]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);

  useFrame((state) => {
    if (!meshRef.current || !linesRef.current) return;

    const time = state.clock.elapsedTime;
    const { positions, velocities } = particles;

    // Update particle positions
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i].add(velocities[i]);

      // Soft boundary
      const dist = positions[i].length();
      if (dist > SPHERE_RADIUS) {
        positions[i].multiplyScalar(SPHERE_RADIUS / dist);
        velocities[i].multiplyScalar(-1);
      }

      // Gentle orbit
      positions[i].applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.0008);

      // Scale based on z-depth for parallax feel
      const scale = 0.02 + (positions[i].z + SPHERE_RADIUS) / (SPHERE_RADIUS * 2) * 0.03;

      dummy.position.copy(positions[i]);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Gold color with slight variation
      const brightness = 0.5 + (positions[i].z + SPHERE_RADIUS) / (SPHERE_RADIUS * 2) * 0.5;
      color.setRGB(0.78 * brightness, 0.64 * brightness, 0.36 * brightness);
      meshRef.current.setColorAt(i, color);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;

    // Update connections
    const linePositions = lineGeometry.attributes.position.array as Float32Array;
    const lineColors = lineGeometry.attributes.color.array as Float32Array;
    let lineIndex = 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const d = positions[i].distanceTo(positions[j]);
        if (d < CONNECTION_DISTANCE) {
          const alpha = 1 - d / CONNECTION_DISTANCE;
          const idx = lineIndex * 6;

          linePositions[idx] = positions[i].x;
          linePositions[idx + 1] = positions[i].y;
          linePositions[idx + 2] = positions[i].z;
          linePositions[idx + 3] = positions[j].x;
          linePositions[idx + 4] = positions[j].y;
          linePositions[idx + 5] = positions[j].z;

          // Gold tinted lines
          const a = alpha * 0.3;
          lineColors[idx] = 0.78 * a;
          lineColors[idx + 1] = 0.64 * a;
          lineColors[idx + 2] = 0.36 * a;
          lineColors[idx + 3] = 0.78 * a;
          lineColors[idx + 4] = 0.64 * a;
          lineColors[idx + 5] = 0.36 * a;

          lineIndex++;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIndex * 2);
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;

    // Subtle camera movement following mouse
    state.camera.position.x += (mouseRef.current.x * 1.5 - state.camera.position.x) * 0.02;
    state.camera.position.y += (mouseRef.current.y * 1.0 - state.camera.position.y) * 0.02;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group rotation={[0.3, 0, 0]}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial transparent opacity={0.9} />
      </instancedMesh>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={1} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0" style={{ opacity: 0.7 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
