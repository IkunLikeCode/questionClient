// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: {
    port: 3000,
    host: "0.0.0.0",
  },
  nitro: {
    preset: "vercel",
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || "http://115.190.61.20:9000",
    },
  },
  ssr: true,
});
