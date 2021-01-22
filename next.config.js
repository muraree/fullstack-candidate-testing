// next.config.js
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withCSS(
  withImages({
    cssLoaderOptions: {
      url: false,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  })
)
