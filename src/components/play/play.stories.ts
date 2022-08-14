import './play'

import type { Meta, Story } from '@storybook/web-components/types-7-0'
import { html } from 'lit-html'

export default { title: 'Play' } as Meta

export const Play: Story = {
  render: () => html`<x-play></x-play>`,
}
