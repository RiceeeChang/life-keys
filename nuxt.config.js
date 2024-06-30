export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '伯克錸物業管理顧問有限公司',
    htmlAttrs: {
      lang: 'zh-hant'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    API_URL: 'https://dashboard.life-keys.com.tw/',
    SITE_TITLE: '伯克錸物業管理顧問有限公司',
  },

  styleResources : {
    scss: [
      '@/style/reset.scss',
      '@/style/functions.scss',
      '@/style/variables.scss',
      '@/style/mixins.scss',
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/style/custom.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    'nuxt-gsap-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  bootstrapVue: {
    icons: true
  },

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimizeCss: {
      cssProcessorOptions: {
        discardUnused: false,
        reduceIdents: false
      }
    }
  },

  loading: '~/components/IndexLoading.vue',
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },

}
