// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),


  integrations: [alpinejs(), svelte()],
experimental: { svg: true },
  vite: {
    plugins: [tailwindcss()]
  }
});