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
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
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
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      alias: {
        map: [
          ['~public', './public'],
          ['~', './src'],
        ],
        extensions: ['.json'],
      },
    },
  },
};
