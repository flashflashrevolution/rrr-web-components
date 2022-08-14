import './results'

import type { Meta, Story } from '@storybook/web-components/types-7-0'
import { html } from 'lit-html'

export default { title: 'Results' } as Meta

export const Results: Story = {
  render: () => html`<x-results></x-results>`,
}
