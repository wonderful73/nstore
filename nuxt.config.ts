// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  css: ['normalize.css', '~/assets/styles/base.scss'],

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";'	
        }
      }
    }
  },

  postcss: {
    plugins: {
      'autoprefixer': {},
      'postcss-px-to-viewport': {
        unitToConvert: 'px',
        viewportWidth: 750,
        unitPrecision: 3,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: [
          '.ignore', 'root', 'vant'
        ],
        minPixelValue: 1,
        mediaQuery: false
      }
    }
  },
})