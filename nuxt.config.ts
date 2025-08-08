// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/image'
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: true,
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },

  image: {
    // อนุญาตโดเมนรูปภาพที่ใช้งานอยู่ เพื่อให้แคช/ปรับขนาดภาพได้
    domains: ['img2.pic.in.th', 'img5.pic.in.th'],
    format: ['webp', 'png', 'jpeg']
  },

  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/': { swr: 60 },
      '/product/**': { swr: 60 }
    }
  },

  compatibilityDate: '2025-07-16'
})