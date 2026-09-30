import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const allowedHosts = [
  'pacifism-tipped-doctrine.ngrok-free.dev',
  '.ngrok-free.dev',
  '.ngrok.io',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://cuadrape.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: allowedHosts,
    },
    preview: {
      host: true,
      allowedHosts: allowedHosts,
    },
  },
});
