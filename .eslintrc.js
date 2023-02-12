module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
  },
  ignorePatterns: ['!.tina', 'node_modules', 'dist', 'next'],
};
