module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['next/core-web-vitals'],
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {},
  ignorePatterns: ['!.tina', 'node_modules', 'dist', 'next'],
};
