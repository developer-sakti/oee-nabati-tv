import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Machine Vision',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/mvl.ico' },
      {
        rel: 'stylesheet',
        href: '/css/font.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl', '~/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: ['@/plugins/vuetify', '@/plugins/bootstrap'],
  plugins: [
    '@/plugins/vuetify',
    { src: '~/plugins/nuxt-client.js', ssr: false }
  ],
  // https://nuxtjs.org/api/configuration-watch
  watch: ['~/vuex/**/*.js', '~/mixins/**/*.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    SERVICE_URL:
      'http://ec2-13-250-42-181.ap-southeast-1.compute.amazonaws.com:8081/api/v1'
  }
}
