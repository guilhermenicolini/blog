import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
import mdx from '@astrojs/mdx';

const { LOCALE } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

const site = `https://${LOCALE !== 'pt-BR' ? 'en.' : '' }guilhermenicolini.com.br`

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site,
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: true,
    },
  }
});
