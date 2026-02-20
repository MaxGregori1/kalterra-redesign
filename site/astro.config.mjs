// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://MaxGregori1.github.io',
  base: '/kalterra-redesign',
  vite: {
    plugins: [tailwindcss()]
  }
});