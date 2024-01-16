// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id:  'G-S6VCY6TKFK',
    dev: true
  },
})
