/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`
        })
      })
    }),
  ],
}
