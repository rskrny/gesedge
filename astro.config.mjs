// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://gesedge.com',
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['@fontsource/ibm-plex-mono', '@fontsource-variable/schibsted-grotesk'],
    },
  },
});
