import js from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin-ts';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';
import ts from 'typescript-eslint';

// BUG: https://github.com/sindresorhus/globals/issues/239
globals.browser.AudioWorkletGlobalScope = globals.browser['AudioWorkletGlobalScope '];
delete globals.browser['AudioWorkletGlobalScope '];

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ['**/*.{cjs,js,jsx,mjs,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2025,
        ...globals.jest,
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic/ts': stylisticPlugin,
      import: importPlugin,
      react: reactPlugin,
    },
    rules: {
      '@stylistic/ts/padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/no-anonymous-default-export': [
        'warn',
        {
          allowArray: true,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: true,
          allowNew: false,
          allowLiteral: false,
          allowObject: true,
        },
      ],
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
          'newlines-between': 'always',
          pathGroups: [
            { pattern: 'react', group: 'builtin', position: 'after' },
            { pattern: '@/**', group: 'external', position: 'after' },
            { pattern: './**/*.*', group: 'unknown', position: 'after' },
            { pattern: '**/*.css', group: 'unknown', position: 'after' },
            { pattern: '**/*.scss', group: 'unknown', position: 'after' },
            { pattern: 'virtual:*', group: 'unknown', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          warnOnUnassignedImports: true,
        },
      ],
      'react/jsx-sort-props': ['error', { callbacksLast: true }],
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
      react: {
        version: 'detect',
      },
    },
  },
];
