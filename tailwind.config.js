/** @type {import('tailwindcss').Config} */
/* eslint @typescript-eslint/no-var-requires: "off" */

const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      rotate: {
        180: '180deg',
      },
      colors: {
        primary: colors.violet,
        gray: colors.slate,
        violet: {
          ...colors.violet,
          30: '#f9f4fc',
          950: '#170a2d',
          1000: '#120724',
        },
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        'spotify-green': '#1DB954',
      },
      hueRotate: {
        53: '53deg',
      },
      saturate: {
        1000: '10',
      },
      zIndex: {
        '-1': '-1',
      },
      // keyframes: {
      //   'bg-hue-animation': {
      //     '0%': { filter: 'hue-rotate(0deg)' },
      //     '50%': { filter: 'hue-rotate(180deg)' },
      //     '100%': { filter: 'hue-rotate(0deg)' },
      //   },
      //   'fade-away': {
      //     '0%': {
      //       opacity: 1,
      //     },
      //     '100%': {
      //       opacity: 0.2,
      //     },
      //   },
      //   shrink: {
      //     '0% , 100%': {
      //       height: '0.75rem',
      //     },
      //     '50%': {
      //       height: '0.375rem',
      //     },
      //   },
      //   expand: {
      //     '0% , 100%': {
      //       height: '0.375rem',
      //     },
      //     '50%': {
      //       height: '0.75rem',
      //     },
      //   },
      // },
      // animation: {
      //   'fade-text': '10s ease-in-out 3s 1 normal forwards running fade-away',
      //   shrink: 'shrink ease-in-out 1.5s infinite',
      //   expand: 'expand ease-in-out 1.5s infinite',
      //   'hue-animation': 'bg-hue-animation 10s infinite',
      // },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
        })
      })
    }),
  ],}
