// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.delhitattooshop.com',
  trailingSlash: 'never',
  redirects: {
    '/artist/maddy-realism-tattoo-artist-delhi': { status: 301, destination: '/artists' },
    '/artist/guru-color-tattoo-specialist-delhi': { status: 301, destination: '/artists' },
    '/artist/ram-blackwork-mythology-tattoo-delhi': { status: 301, destination: '/artists' },
    '/artist/sharan-japanese-tattoo-master-delhi': { status: 301, destination: '/artists' },
    '/artists/ravi-mehta': { status: 301, destination: '/artists' },
    '/connaught-place-tattoo-studio': { status: 301, destination: '/visit-studio' },
    '/karol-bagh-tattoo-shop': { status: 301, destination: '/visit-studio' },
    '/khan-market-tattoo-studio': { status: 301, destination: '/visit-studio' },
    '/greater-kailash-tattoo': { status: 301, destination: '/visit-studio' },
    '/nehru-place-tattoo-services': { status: 301, destination: '/visit-studio' },
  },
  output: 'static',
  adapter: vercel(),
});
