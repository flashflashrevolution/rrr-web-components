import type { HTMLTemplateResult } from 'lit'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import TwLitElement from '../tw-lit-element'
import styles from './play.css'

/*
 * https://play.tailwindcss.com/eMFiu2ebhi
 */
@customElement('x-play')
export default class Play extends TwLitElement {
  public static styles = [TwLitElement.styles, styles]

  protected render(): HTMLTemplateResult {
    return html`
      <div
        class="grid grid-template-play grid-cols-[minmax(200px,1fr),minmax(400px,3fr),minmax(200px,1fr)] grid-rows-[1fr,10fr,1fr] bg-black text-white font-sans overflow-auto"
      >
        <header class="grid-area-progress flex justify-center items-center">
          progress bar
        </header>
        <aside class="grid-area-judgements flex flex-col justify-center">
          <ul class="flex flex-col items-end">
            <li class="text-green-300">
              Amazing
              <span class="text-5xl">0</span>
            </li>
            <li class="text-green-500">
              Perfect
              <span class="text-5xl">0</span>
            </li>
            <li class="text-green-700">
              Good
              <span class="text-5xl">0</span>
            </li>
            <li class="text-orange-400">
              Average
              <span class="text-5xl">0</span>
            </li>
            <li class="text-red-500">
              Miss
              <span class="text-5xl">0</span>
            </li>
            <li class="text-amber-800">
              Boo
              <span class="text-5xl">0</span>
            </li>
          </ul>
        </aside>
        <main class="grid-area-notefield flex justify-center items-center">
          Judgement
        </main>
        <aside class="grid-area-hp flex items-center">
          <span class="bg-blue-500 border-4 w-12 h-4/5"></span>
        </aside>
        <footer class="grid-area-stats flex pb-2">
          <span class="flex flex-1 justify-end items-end">
            <span class="text-5xl">0</span>
            combo
          </span>
          <span class="flex flex-1 justify-center text-5xl">0</span>
          <span class="flex flex-1 items-end">
            total
            <span class="text-5xl">0</span>
          </span>
        </footer>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-play': Play
  }
}
