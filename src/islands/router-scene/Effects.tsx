import { EffectComposer, Bloom } from '@react-three/postprocessing';

/* Lazy-loaded so tier-1 devices never download postprocessing. */
export default function Effects() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        mipmapBlur
        intensity={1.15}
        luminanceThreshold={1}
        luminanceSmoothing={0.3}
      />
    </EffectComposer>
  );
}
