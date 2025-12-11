// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/mdc'],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    openaiApiKey: 'openai-api-key',
  },

  mdc: {
    highlight: {
      theme: 'material-theme-palenight',
      langs: ['html', 'markdown', 'vue', 'javascript', 'typescript'],
    },
  },

  vite: {
    optimizeDeps: {
      include: ['debug'],
    },
  },
});
