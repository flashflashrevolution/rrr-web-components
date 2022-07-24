import type { TemplateResult } from 'lit'
import { html } from 'lit'
import { customElement } from 'lit/decorators'

import { TwLitElement } from './tw-lit-element'

@customElement('x-my-element')
export class MyElement extends TwLitElement {
  protected render(): TemplateResult {
    return html`
      <div
        class="text-3xl text-slate-900 capitalize font-thin hover:text-green-300 hover:uppercase hover:underline hover:font-black"
      >
        Hello from MyElement!
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-my-element': MyElement
  }
}
