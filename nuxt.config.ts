// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: "fr"
      },
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
    mail: process.env.NUXT_MAIL,
    psw: process.env.NUXT_PSW,
    public: {
      siteUrl: process.env.SiteUrl,
    },
  },
  css: ["~/assets/css/main.css", "aos/dist/aos.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  prismic: {
    endpoint: "https://zoegarciaportfolio.cdn.prismic.io/api/v2",
    preview: false,
    toolbar: false,
  },
  modules: ["@nuxtjs/prismic"],
});
