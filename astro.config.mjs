// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://totorojichang.my',
  redirects: {
    '/work': '/about',
    '/sitemap.xml': '/sitemap-index.xml',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/work'),
    }),
  ],
});
