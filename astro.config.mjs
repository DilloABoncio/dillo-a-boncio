import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://dilloaboncio.netlify.app',
  output: 'static',
  adapter: cloudflare(),
});