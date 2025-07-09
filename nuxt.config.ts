// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.SiteUrl,
    },
  },
  css: ["~/assets/css/main.css", "aos/dist/aos.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  prismic: {
    endpoint: "https://design-portfolio-template.cdn.prismic.io/api/v2",
    preview: false,
    toolbar: false,
  },
  modules: ["@nuxtjs/prismic"],
});
