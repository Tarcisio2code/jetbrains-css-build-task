module.exports = {
  map: {
    inline: false,
    annotation: true
  },
  plugins: [
    require('postcss-preset-env')({
      stage: 1
    }),
    require('autoprefixer')
  ]
}
