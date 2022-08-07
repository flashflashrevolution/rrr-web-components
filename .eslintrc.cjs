/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:lit/recommended',
    'plugin:lit-a11y/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/csf-strict',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  env: {
    node: true,
  },
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  overrides: [
    {
      files: '*.cjs',
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'storybook/csf-component': 'off',
    'storybook/no-title-property-in-meta': 'off',
  },
}
