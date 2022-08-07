/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  overrides: [
    {
      customSyntax: 'postcss-lit',
      files: '**/*.css.ts',
    },
  ],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
  },
}
