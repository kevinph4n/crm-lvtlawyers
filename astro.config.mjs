// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Set to the production domain once known (needed for canonical URLs and a sitemap).
  // site: 'https://example.vn',
  vite: {
    plugins: [tailwindcss()],
  },
});
