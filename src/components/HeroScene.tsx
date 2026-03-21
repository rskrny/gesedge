"use client";

import { useRef, useMemo, useCallback, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 160;
const CONNECTION_DISTANCE = 2.0;
const SPHERE_RADIUS = 4.5;
const CURSOR_INFLUENCE = 3.0;
const CURSOR_STRENGTH = 0.8;

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouse3D = useRef(new THREE.Vector3());
  const pulseRef = useRef<{ origin: THREE.Vector3; time: number } | null>(null);

  const particles = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    const velocities: THREE.Vector3[] = [];
    const basePositions: THREE.Vector3[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = SPHERE_RADIUS * (0.2 + Math.random() * 0.8);
      const pos = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      positions.push(pos.clone());
      basePositions.push(pos.clone());
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002
        )
      );
    }
    return { positions, velocities, basePositions };
  }, []);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const maxLines = PARTICLE_COUNT * PARTICLE_COUNT;
    const pos = new Float32Array(maxLines * 6);
    const col = new Float32Array(maxLines * 6);
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    geo.setDrawRange(0, 0);
    return geo;
  }, []);

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    },
    []
  );

  const handleClick = useCallback(() => {
    pulseRef.current = { origin: mouse3D.current.clone(), time: 0 };
  }, []);

  useMemo(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("click", handleClick);
    };
  }, [handlePointerMove, handleClick]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);
  const tempVec = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    if (!meshRef.current || !linesRef.current) return;

    const time = state.clock.elapsedTime;
    const { positions, velocities, basePositions } = particles;

    // Project mouse into 3D
    mouse3D.current.set(mouseRef.current.x * 5, mouseRef.current.y * 3, 2);

    // Update pulse
    if (pulseRef.current) {
      pulseRef.current.time += 0.03;
      if (pulseRef.current.time > 2) pulseRef.current = null;
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Drift
      positions[i].add(velocities[i]);

      // Orbit
      positions[i].applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.0006);
      positions[i].applyAxisAngle(new THREE.Vector3(1, 0, 0), 0.0002);

      // Boundary
      const dist = positions[i].length();
      if (dist > SPHERE_RADIUS) {
        positions[i].multiplyScalar(SPHERE_RADIUS / dist);
        velocities[i].multiplyScalar(-0.8);
      }

      // Cursor repulsion
      tempVec.copy(positions[i]).sub(mouse3D.current);
      const cursorDist = tempVec.length();
      if (cursorDist < CURSOR_INFLUENCE && cursorDist > 0.01) {
        const force = (1 - cursorDist / CURSOR_INFLUENCE) * CURSOR_STRENGTH;
        tempVec.normalize().multiplyScalar(force * 0.02);
        positions[i].add(tempVec);
      }

      // Click pulse wave
      if (pulseRef.current) {
        const pulseDist = positions[i].distanceTo(pulseRef.current.origin);
        const waveRadius = pulseRef.current.time * 4;
        const waveDelta = Math.abs(pulseDist - waveRadius);
        if (waveDelta < 0.8) {
          const pushStrength = (1 - waveDelta / 0.8) * 0.05 * (1 - pulseRef.current.time / 2);
          tempVec.copy(positions[i]).sub(pulseRef.current.origin).normalize().multiplyScalar(pushStrength);
          positions[i].add(tempVec);
        }
      }

      // Size: particles near cursor glow larger
      let scale = 0.02 + (positions[i].z + SPHERE_RADIUS) / (SPHERE_RADIUS * 2) * 0.025;
      if (cursorDist < CURSOR_INFLUENCE) {
        scale += (1 - cursorDist / CURSOR_INFLUENCE) * 0.03;
      }

      dummy.position.copy(positions[i]);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Color: periwinkle with proximity glow
      let brightness = 0.4 + (positions[i].z + SPHERE_RADIUS) / (SPHERE_RADIUS * 2) * 0.6;
      if (cursorDist < CURSOR_INFLUENCE) {
        brightness += (1 - cursorDist / CURSOR_INFLUENCE) * 0.5;
      }
      // rgb(108, 142, 239) normalized
      color.setRGB(0.42 * brightness, 0.56 * brightness, 0.94 * brightness);
      meshRef.current.setColorAt(i, color);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;

    // Connections
    const linePos = lineGeometry.attributes.position.array as Float32Array;
    const lineCol = lineGeometry.attributes.color.array as Float32Array;
    let lineIndex = 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const d = positions[i].distanceTo(positions[j]);
        if (d < CONNECTION_DISTANCE) {
          const alpha = 1 - d / CONNECTION_DISTANCE;
          const idx = lineIndex * 6;

          linePos[idx] = positions[i].x;
          linePos[idx + 1] = positions[i].y;
          linePos[idx + 2] = positions[i].z;
          linePos[idx + 3] = positions[j].x;
          linePos[idx + 4] = positions[j].y;
          linePos[idx + 5] = positions[j].z;

          // Periwinkle tinted lines
          const a = alpha * 0.25;
          lineCol[idx] = 0.42 * a;
          lineCol[idx + 1] = 0.56 * a;
          lineCol[idx + 2] = 0.94 * a;
          lineCol[idx + 3] = 0.42 * a;
          lineCol[idx + 4] = 0.56 * a;
          lineCol[idx + 5] = 0.94 * a;

          lineIndex++;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIndex * 2);
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;

    // Camera follows mouse smoothly
    state.camera.position.x += (mouseRef.current.x * 2.0 - state.camera.position.x) * 0.015;
    state.camera.position.y += (mouseRef.current.y * 1.2 - state.camera.position.y) * 0.015;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group rotation={[0.2, 0, 0]}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial transparent opacity={0.85} />
      </instancedMesh>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={1} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0" style={{ opacity: 0.75 }}>
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
