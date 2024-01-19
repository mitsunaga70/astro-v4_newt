import { defineConfig } from 'astro/config';
import postcssMergeQueries from "postcss-merge-queries";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import netlify from '@astrojs/netlify/functions';
import node from "@astrojs/node";
const siteUrl = import.meta.env.PUBLIC_SITE_URL;


// https://astro.build/config
export default defineConfig({
  integrations: [sitemap({
    lastmod: new Date()
  }), preact()],
  vite: {
    css: {
      postcss: {
        plugins: [postcssMergeQueries]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/assets/styles/variables.scss";`
        }
      }
    }
  },
  server: {
    open: true
  },
  // image: {
  //   domains: ["blog-739442.assets.newt.so"]
  // },
  site: siteUrl,
  output: "hybrid",
  adapter: netlify({
    edgeMiddleware: true
  }),

  // adapter: node({
  //   mode: "standalone"
  // })
});