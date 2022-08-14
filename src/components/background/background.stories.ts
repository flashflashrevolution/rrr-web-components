import './background'

import type { Meta, Story } from '@storybook/web-components/types-7-0'
import { html } from 'lit-html'

export default { title: 'Background' } as Meta

export const Background: Story = {
  render: () => html`<x-background></x-background>`,
}
