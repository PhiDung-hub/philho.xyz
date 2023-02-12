/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      logo: ['ui-monospace', 'cursive'],
      mono: [
        'ui-monospace',
        'Menlo',
        'Monaco',
        'Cascadia Mono',
        'Segoe UI Mono',
        'Roboto Mono',
        'Oxygen Mono',
        'Ubuntu Monospace',
        'Source Code Pro',
        'Fira Mono',
        'Droid Sans Mono',
        'monospace',
      ],
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
