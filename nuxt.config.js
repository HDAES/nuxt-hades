/*
 * @Date: 2019-07-31 22:19:50
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-28 21:31:59
 * @Description:
 */

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_1098415_r1xb63h27s.css' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/animate.css/3.7.2/animate.min.css' }
    ],
    script: [
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/reset.css',
    '@/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/element-ui', ssr: true },
    { src: '@/plugins/vue-particles', ssr: false },
    { src: '@/plugins/lazyload', ssr: false },
    { src: '@/plugins/vue-mavon-editor', srr: false },
    { src: '@/plugins/axios', srr: false },
    { src: '@/plugins/bus', srr: false },
    { src: '@/plugins/localStorage', srr: false },
    { src: '@/plugins/APlayer', mode: 'client' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */

  /*
  ** Build configuration
  */
  router: {
  },
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
