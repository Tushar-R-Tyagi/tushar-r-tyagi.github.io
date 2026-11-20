// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeFigures } from './src/lib/rehype-figures.mjs';

export default defineConfig({
  // Your public URL. Needed for RSS and comments.
  // With a GitHub repo named "tushar-r-tyagi.github.io" this is it:
  site: 'https://tushar-r-tyagi.github.io',
  markdown: {
    rehypePlugins: [rehypeFigures],
    shikiConfig: { theme: 'min-light' },
  },
});
