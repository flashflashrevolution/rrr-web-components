import type { HTMLTemplateResult } from 'lit'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { TwLitElement } from '../tw-lit-element'

/*
 * https://play.tailwindcss.com/eMFiu2ebhi
 */
@customElement('x-play-element')
export class PlayElement extends TwLitElement {
  protected render(): HTMLTemplateResult {
    return html`
      <div
        class="max-h-rrr min-h-rrr min-w-rrr max-w-rrr relative mx-auto flex flex-col bg-black"
      >
        <div class="flex h-12 flex-row justify-around bg-slate-400">
          <div>progress bar</div>
          <div>timer</div>
        </div>
        <div class="relative flex flex-1 flex-row">
          <div
            class="relative flex w-1/6 flex-col items-end justify-center bg-yellow-400 p-4"
          >
            <div class="flex flex-row items-end">
              <div>Amazing</div>
              <div class="text-5xl">0</div>
            </div>
            <div class="flex flex-row items-end">
              <div>Perfect</div>
              <div class="text-5xl">0</div>
            </div>
            <div class="flex flex-row items-end">
              <div>Good</div>
              <div class="text-5xl">0</div>
            </div>
            <div class="flex flex-row items-end">
              <div>Average</div>
              <div class="text-5xl">0</div>
            </div>
            <div class="flex flex-row items-end">
              <div>Miss</div>
              <div class="text-5xl">0</div>
            </div>
            <div class="flex flex-row items-end">
              <div>Boo</div>
              <div class="text-5xl">0</div>
            </div>
          </div>
          <div
            class="relative flex flex-1 items-center justify-center text-cyan-400"
          >
            <div class="relative h-10 justify-around bg-purple-400 text-center">
              Judgement
            </div>
          </div>
          <div class="relative flex w-1/6 justify-end bg-yellow-500 p-4">
            <div class="m-2 w-12 border-4">HP</div>
          </div>
        </div>
        <div
          class="relative flex h-14 w-full items-center justify-center bg-red-400"
        >
          <div>0 combo</div>
          <div class="relative -bottom-3 w-2/6 text-center">0</div>
          <div>total 0</div>
          <div
            class="absolute h-[92%] w-[96%] border-2 bg-black/20 text-center"
          ></div>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-play-element': PlayElement
  }
}
