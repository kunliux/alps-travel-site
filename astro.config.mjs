import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://alps-travel-site.pages.dev",
  output: "static",
  trailingSlash: "never",
  integrations: [sitemap()]
});
