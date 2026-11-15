import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    react(),
  ],
  output: 'static',
  site: 'https://www.cloudconcreteseattle.com',
  build: {
    assets: '_assets',
  },
  vite: {
    css: {
      postcss: './postcss.config.mjs',
    },
    ssr: {
      noExternal: ['react', 'react-dom'],
    },
  },
});
