const { tailwindTransform } = require('postcss-lit')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['./src/**/*.ts'],
    transform: {
      ts: tailwindTransform,
    },
  },
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "url('https://www.flashflashrevolution.com/images/2008/background-arrows.png')",
      },
      maxWidth: {
        rrr: '1024px',
      },
      maxHeight: {
        rrr: '640px',
      },
      minHeight: {
        rrr: '640px',
      },
      minWidth: {
        rrr: '1024px',
      },
    },
  },
}
