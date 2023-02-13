module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'import/no-unresolved': [
      2,
      {
        ignore: ['contentlayer/generated', 'next-contentlayer/hooks'],
      },
    ],
  },
  ignorePatterns: ['!.tina', 'node_modules', 'dist', 'next'],
  settings: {
    'import/parsers': {
      '@typescrip-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
