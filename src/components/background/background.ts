import type { TemplateResult } from 'lit'
import { html } from 'lit'
import { customElement } from 'lit/decorators'

import { TwLitElement } from '../tw-lit-element'
import styles from './background.styles'

@customElement('x-background-element')
export class BackgroundElement extends TwLitElement {
  public static styles = [TwLitElement.styles, styles]

  protected render(): TemplateResult {
    return html`
      <div class="absolute w-full h-full">
        <div class="fade absolute overflow-hidden w-full h-full">
          <svg
            class="w-full h-full"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="line"
                viewBox="0,0,100,100"
                width="1%"
                height="1%"
                patternTransform="rotate(-45)"
              >
                <line
                  x1="0"
                  y1="50"
                  x2="100"
                  y2="50"
                  stroke="var(--color-bg-lines)"
                  stroke-width="5"
                  stroke-linecap="box"
                  vector-effect="non-scaling-stroke"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#line)" />
          </svg>
        </div>
        <svg
          class="w-full h-full"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bg-gradient" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stop-color="var(--color-bg-start)" />
              <stop offset="100%" stop-color="var(--color-bg-end)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-gradient)" />
        </svg>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-background-element': BackgroundElement
  }
}
