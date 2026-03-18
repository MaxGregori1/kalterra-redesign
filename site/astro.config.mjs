// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Constance-IT.github.io',
  base: '/kalterra-redesign/',
  vite: {
    plugins: [tailwindcss()]
  }
});