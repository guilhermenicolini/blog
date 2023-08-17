import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
import mdx from '@astrojs/mdx';
import { getLanguage, urls } from './src/i18n'

const { LOCALE } = loadEnv(process.env.NODE_ENV, process.cwd(), '');
const mode = import.meta.env.MODE
const language = getLanguage(LOCALE)

export default defineConfig({
  integrations: [mdx()],
  site: urls[mode][language],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: true,
    },
  }
});
