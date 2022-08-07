/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  overrides: [
    {
      customSyntax: '@stylelint/postcss-css-in-js',
      files: '**/*.css.ts',
    },
  ],
}
