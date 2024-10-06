// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  sr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@nuxt/image'
  ],

  content: {
    experimental: {
      search: true
    }
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  routeRules: {
    '/': { prerender: true }
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  colorMode: {
    classSuffix: ''
  },

  compatibilityDate: '2024-09-24'
})
