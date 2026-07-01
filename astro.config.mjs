import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dillo-a-boncio.pages.dev',
  output: 'static',
  vite: {
    publicDir: 'public',
  },
});
