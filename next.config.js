// next.config.js
const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withImages(withTypescript(withSass({
    cssModules: true,
    webpack: (config) => {
        return config
    }
})));