import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/test-utils/module",
    "@nuxtjs/i18n",
  ],

  devtools: {
    enabled: true,
  },

  vite: { plugins: [tailwindcss()] },

  css: ["~/assets/css/main.css"],
  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "hu", name: "Hungarian", file: "hu.json" },
    ],
    defaultLocale: "en",
  },
});
