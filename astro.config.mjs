// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.martinpring.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  redirects: {
    // Old Jekyll permalinks (/:year/:title/)
    '/2020/how-to-set-up-a-jekyll-blog-and-host-it-on-github': '/story',
    '/about': '/',
  },
});
