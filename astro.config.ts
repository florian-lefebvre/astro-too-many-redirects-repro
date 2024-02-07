import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  trailingSlash: "always",
  output: "hybrid",
  adapter: vercel({
    imageService: true,
    functionPerRoute: false,
  }),
});