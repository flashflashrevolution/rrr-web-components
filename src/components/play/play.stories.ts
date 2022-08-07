import './play'

import type { Meta, Story } from '@storybook/web-components/types-7-0'
import { html } from 'lit'

export default { title: 'Play' } as Meta

export const Default: Story = {
  render: () => html`<x-play></x-play>`,
}
