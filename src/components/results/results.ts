import type { HTMLTemplateResult } from 'lit'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import TwLitElement from '../tw-lit-element'

/*
 * https://play.tailwindcss.com/ymLfz1NZfo
 */
@customElement('x-results')
export default class Results extends TwLitElement {
  protected render(): HTMLTemplateResult {
    return html`
      <div
        class="relative mx-auto flex max-h-rrr min-h-rrr min-w-rrr max-w-rrr flex-col bg-black"
      >
        <div class="relative flex h-14 flex-row justify-between bg-slate-400">
          <div class="flex flex-row items-center">
            <div>&nbsp;Results for [Lv.89] Zageron:&nbsp;</div>
          </div>
          <button
            type="button"
            class="text-grey h-4/6 w-40 border-2 bg-slate-500 font-semibold"
          >
            Play Random Song
          </button>
          <button
            type="button"
            class="text-grey h-4/6 w-40 border-2 bg-slate-500 font-semibold"
          >
            Save Replay
          </button>
          <button
            type="button"
            class="text-grey h-4/6 w-40 border-2 bg-slate-500 font-semibold"
          >
            Take Screenshot
          </button>
          <div class="items-center, flex bg-slate-500">
            <div class="flex flex-row items-center">2022/08/02 05:27:39 PM</div>
          </div>
        </div>
        <div class="relative flex flex-1 flex-col bg-slate-200">
          <div class="flex flex-col items-center">
            <div>Name of song</div>
            <div>
              Difficulty: 0 - Length: 0 - Artist:
              <span class="underline underline-offset-2">Egg</span> -
              Stepauthor: <span class="underline underline-offset-2">Greg</span>
            </div>
          </div>
          <div class="relative flex flex-1 flex-row bg-slate-500">
            <div
              class="relative flex flex-col items-end justify-center bg-yellow-400 p-4"
            >
              <div class="flex flex-row items-end">
                <div>Amazing:&nbsp;</div>
                <div class="text-xl">0</div>
              </div>
              <div class="flex flex-row items-end">
                <div>Perfect:&nbsp;</div>
                <div class="text-xl">0</div>
              </div>
              <div class="flex flex-row items-end">
                <div>Good:&nbsp;</div>
                <div class="text-xl">0</div>
              </div>
              <div class="flex flex-row items-end">
                <div>Average:&nbsp;</div>
                <div class="text-xl">0</div>
              </div>
              <div class="flex flex-row items-end">
                <div>Miss:&nbsp;</div>
                <div class="text-xl">0</div>
              </div>
              <div class="flex flex-row items-end">
                <div>Boo:&nbsp;</div>
                <div class="text-xl">0</div>
              </div>
            </div>
            <div class="relative flex flex-1">
              <div
                class="relative flex flex-1 flex-col items-center justify-center bg-yellow-600"
              >
                <div class="flex flex-row items-end">
                  <div>AAA Equivalency:&nbsp;</div>
                  <div class="text-xl">0.00</div>
                </div>
                <div class="flex flex-row items-end">
                  <div>Raw Goods:&nbsp;</div>
                  <div class="text-xl">0.0</div>
                </div>
                <div class="flex flex-row items-end">
                  <div>Score:&nbsp;</div>
                  <div class="text-xl">0</div>
                </div>
                <div class="flex flex-row items-end">
                  <div>Grandtotal:&nbsp;</div>
                  <div class="text-xl">0</div>
                </div>
                <div class="flex flex-row items-end">
                  <div>Max Combo:&nbsp;</div>
                  <div class="text-xl">0</div>
                </div>
                <div class="flex flex-row items-end">
                  <div>Credits:&nbsp;</div>
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
    'x-results': Results
  }
}
