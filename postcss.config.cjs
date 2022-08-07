module.exports = {
  syntax: 'postcss-lit',
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      flexbox: 'no-2009',
    },
    cssnano: { preset: 'lite' },
  },
}
