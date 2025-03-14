// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import svelte from '@astrojs/svelte';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify({
    imageCDN : false,
  }),
  image: {
    domains: ['pb-sae-203-flashcine.fryg.fr'],
  },
  integrations: [alpinejs(), svelte()],
experimental: { svg: true },
  vite: {
    plugins: [tailwindcss()]
  }
});