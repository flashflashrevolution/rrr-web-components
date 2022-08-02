import type { HTMLTemplateResult } from 'lit'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { TwLitElement } from '../../../dist/components/tw-lit-element'

/*
 * https://play.tailwindcss.com/NR4ScfiIjA
 */
@customElement('x-results-element')
export class ResultsElement extends TwLitElement {
  protected render(): HTMLTemplateResult {
    return html`
      <div
        class="relative mx-auto flex max-h-rrr min-h-rrr min-w-rrr max-w-rrr flex-col bg-black"
      >
        <div class="relative flex h-14 flex-row justify-between bg-slate-400">
          <div class="flex flex-row items-center">
            <div>results for zageron</div>
            <div>play random song</div>
            <div>save replay</div>
            <div>take screenshot</div>
          </div>
          <div class="flex items-center"><div>current timestamp</div></div>
        </div>
        <div class="relative flex flex-1 flex-col bg-slate-200">
          <div class="flex flex-col items-center">
            <div>Name of song</div>
            <div>difficulty, length, artist, chartist</div>
          </div>
          <div class="relative flex flex-1 flex-row bg-slate-500">
            <div
              class="relative flex flex-col items-end justify-center bg-yellow-400 p-4"
            >
              <div class="flex flex-row items-end">
                <div>Amazing</div>
                <div class="text-xl">0</div>
              </div>
              <div class="flex flex-row items-end">
                <div>Perfect</div>
                <div class="text-xl">0</div>
              </div>
              <div class="flex flex-row items-end">
                <div>Good</div>
                <div class="text-xl">0</div>
              </div>
              <div class="flex flex-row items-end">
                <div>Average</div>
                <div class="text-xl">0</div>
              </div>
              <div class="flex flex-row items-end">
                <div>Miss</div>
                <div class="text-xl">0</div>
              </div>
              <div class="flex flex-row items-end">
                <div>Boo</div>
                <div class="text-xl">0</div>
              </div>
            </div>
            <div class="relative flex flex-1">
              <div
                class="relative flex flex-1 flex-col items-center justify-center bg-yellow-600"
              >
                <div class="flex flex-row items-end">
                  <div>Amazing</div>
                  <div class="text-xl">0</div>
                </div>
                <div class="flex flex-row items-end">
                  <div>AAA Equivalency:</div>
                  <div class="text-xl">0</div>
                </div>
                <div class="flex flex-row items-end">
                  <div>Raw Goods:</div>
                  <div class="text-xl">0</div>
                </div>
                <div class="flex flex-row items-end">
                  <div>Score:</div>
                  <div class="text-xl">0</div>
                </div>
                <div class="flex flex-row items-end">
                  <div>Grandtotal:</div>
                  <div class="text-xl">0</div>
                </div>
                <div class="flex flex-row items-end">
                  <div>Max Combo:</div>
                  <div class="text-xl">0</div>
                </div>
                <div class="flex flex-row items-end">
                  <div>Credits:</div>
                  <div class="text-xl">0</div>
                </div>
              </div>
            </div>
            <div class="flex items-center p-4">
              <div class="box-border h-32 w-32 border-2"></div>
            </div>
          </div>
          <div>Mods and Game Settings</div>
        </div>
        <div class="relative flex flex-1 bg-slate-600">Judgement Graph</div>
        <div class="relative flex h-14 bg-slate-700">
          <div
            class="relative flex flex-1 items-center justify-around bg-black/20"
          >
            <button
              type="button"
              class="h-4/6 w-40 border-2 bg-sky-900 font-semibold text-white"
            >
              Options
            </button>
            <button
              type="button"
              class="h-4/6 w-40 border-2 bg-sky-900 font-semibold text-white"
            >
              Highscores
            </button>
            <button
              type="button"
              class="h-4/6 w-40 border-2 bg-sky-900 font-semibold text-white"
            >
              Replay Song
            </button>
            <button
              type="button"
              class="h-4/6 w-40 border-2 bg-sky-900 font-semibold text-white"
            >
              Exit to Menu
            </button>
          </div>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-results-element': ResultsElement
  }
}
