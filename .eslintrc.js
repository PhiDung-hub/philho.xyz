module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['next/core-web-vitals'],
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'no-unused-vars': 0,
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'import/order': [
      1,
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        pathGroups: [
          { pattern: 'env', group: 'internal' },
          { pattern: 'types', group: 'internal' },
          { pattern: 'components/**', group: 'internal' },
          { pattern: 'contexts/**', group: 'internal' },
          { pattern: 'hooks/**', group: 'internal' },
          { pattern: 'pages/**', group: 'internal' },
          { pattern: 'views/**', group: 'internal' },
          { pattern: 'utils/**', group: 'internal' },
          { pattern: 'public/**', group: 'internal', position: 'after' },
          { pattern: 'posts/**', group: 'internal', position: 'after' },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  ignorePatterns: ['!.tina', 'node_modules', 'dist', 'next'],
};
