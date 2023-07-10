// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '@/assets/css/main.css',
  ],
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'tracking-home',
          path: '/tracking',
          component: resolve(__dirname, 'pages/tracking/index.vue'),
        }
      );
    },
  },
})
