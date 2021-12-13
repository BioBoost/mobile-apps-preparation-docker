module.exports = {
  devServer: {
    proxy: {
      "^/api": {     // Or "^/api" for example
        target: 'http://backend:3000',
        pathRewrite: { '^/api': '' }
      }
    }
  },
}