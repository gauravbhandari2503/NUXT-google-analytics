import GoogleAnalytics from '@nuxtjs/google-analytics';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  buildModules: [
    '@nuxt/typescript-build',
    GoogleAnalytics,
  ],
  googleAnalytics: {
    id:  process.env.GOOGLE_ANALYTICS_ID,
  },
})
