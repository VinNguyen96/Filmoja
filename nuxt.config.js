export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'y',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
      },

      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
      },

      {
        type: 'text/javascript',
        href: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
      },

      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Orbitron',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // mixins
    {src: '@/mixins/Global'},
    {src: '@/mixins/GlobalData'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'

  ],

  axios: {
    headers:{
    common: {

      'X-RapidAPI-Key': 'f8524faad2mshb422cb183985533p11ea5ejsn51054c708620',
      'X-RapidAPI-Host': 'netflix-weekly-top-10.p.rapidapi.com'
    },
  },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
