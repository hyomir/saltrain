
  module.exports = {
    outputDir: 'dist',
    assetsDir: 'assets',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/saltrain/'
      : '/'
};