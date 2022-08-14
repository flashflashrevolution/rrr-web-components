import type { StorybookConfig } from '@storybook/core-common'

const config: StorybookConfig = {
  stories: ['../dist/**/*.stories.@(mdx|ts)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/web-components',
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  features: {
    babelModeV7: true,
    breakingChangesV7: true,
    modernInlineRender: true,
    postcss: false,
    previewMdx2: true,
    storyStoreV7: true,
  },
}

export default config
