/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  sourceType: 'unambiguous',
  assumptions: {
    privateFieldsAsProperties: true,
    setPublicClassFields: true,
    setSpreadProperties: true,
  },
  presets: [
    [
      '@babel/env',
      { corejs: '3.24.1', shippedProposals: true, useBuiltIns: 'usage' },
    ],
    '@babel/typescript',
  ],
  plugins: [
    ['@babel/proposal-decorators', { version: 'legacy' }],
    '@babel/proposal-export-default-from',
    'macros',
  ],
}
