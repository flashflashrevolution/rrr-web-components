import type { HTMLTemplateResult } from 'lit'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { TwLitElement } from '../tw-lit-element'
import styles from './background.css'

@customElement('x-background-element')
export class BackgroundElement extends TwLitElement {
  public static styles = [TwLitElement.styles, styles]

  protected render(): HTMLTemplateResult {
    return html`
      <div class="absolute w-full h-full">
        <div class="fade absolute overflow-hidden w-full h-full">
          <svg class="w-full h-full">
            <defs>
              <pattern
                id="line"
                viewBox="0,0,100,30"
                width="1%"
                height="1%"
                patternTransform="rotate(-45)"
              >
                <line
                  x2="200"
                  stroke="var(--color-bg-lines)"
                  stroke-width="5"
                  stroke-linecap="box"
                  vector-effect="non-scaling-stroke"
                />
              </pattern>
            </defs>
            <rect class="w-full h-full fill-[url(#line)]" />
          </svg>
        </div>
        <svg class="w-full h-full">
          <defs>
            <linearGradient id="bg-gradient" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stop-color="var(--color-bg-start)" />
              <stop offset="100%" stop-color="var(--color-bg-end)" />
            </linearGradient>
          </defs>
          <rect class="w-full h-full fill-[url(#bg-gradient)]" />
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
