import type { TemplateResult } from "lit";
import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./full.styles";

/** 
 * Backed up from:
 * https://play.tailwindcss.com/OMVlUWN5Ml
 * 
 * Please remember to update this link and content if you work on this component.
 */
@customElement('x-full-element')
export class FullElement extends LitElement
{
    static styles = styles;

    static shadowRootOptions = { ...LitElement.shadowRootOptions, mode: 'closed' as const };

    protected render(): TemplateResult
    {
        return html`
            <div class="relative mx-auto flex max-h-rrr min-h-rrr min-w-rrr max-w-rrr gap-x-2">
            <div class="absolute flex w-full h-full bg z-0">
                <div class="fade">
                    <div class="stripes"></div>
                </div>
            </div>
            <div class="ml-2 flex w-1/6 flex-col z-10">
                <img src="https://i.imgur.com/cdoNl19.png" />
                <div class="flex h-full flex-col">
                <div class="flex items-center justify-around text-white">
                    <button class="h-6 w-6 border-2"><</button>
                    <span>Difficulties</span>
                    <button class="h-6 w-6 border-2">></button>
                </div>
                <div class="flex h-full flex-col justify-around px-1 text-xs">
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">All</button>
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">Easiest</button>
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">Beginner</button>
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">Very Easy</button>
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">Easy</button>
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">Standard</button>
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">Tricky</button>
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">Difficult</button>
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">Very Difficult</button>
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">Challenging</button>
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">Very Challenging</button>
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">Master</button>
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">Guru</button>
                    <button class="rounded-md border-2 bg-cyan-600 p-1 transition ease-in-out hover:bg-cyan-400">Burtal</button>
                </div>
                </div>
            </div>
            <div class="mr-2 flex w-full flex-col space-y-2 z-10">
                <div class="flex h-[10%] items-center justify-around bg-black/20">
                <button type="button" class="h-4/5 w-40 rounded-xl bg-blue-500">PLAY</button>
                <button type="button" class="h-4/5 w-40 rounded-xl bg-blue-500">MULTIPLAYER</button>
                <button type="button" class="h-4/5 w-40 rounded-xl bg-blue-500">STATS</button>
                <button type="button" class="h-4/5 w-40 rounded-xl bg-blue-500">FILTERS</button>
                <button type="button" class="h-4/5 w-40 rounded-xl bg-blue-500">OPTIONS</button>
                </div>
                <div class="relative flex h-4/5 flex-col">
                <ul class="overflow-y-auto bg-black/40 text-white px-3">
                    <li class="flex justify-between">
                    <span>Free Space [FFR Edit]</span><span><span class="text-gray-500 mr-9">UNPLAYED</span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Passengers [Beginner]</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>pause</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Power</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Sea Breeze [Beginner]</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Cid's Theme Piano Concerto</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Control</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Counting Snow</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Fall into Night</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Form, Part 1</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Gymnopedie No.1</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                    <li class="flex justify-between">
                    <span>Mantra</span><span><span class="text-gray-500 mr-9">UNPLAYED</span><span>1</span></span>
                    </li>
                </ul>
                <div class="absolute -bottom-3 w-3/5 self-center border-2 bg-green-500/60 text-center">Special Fancy Pagination Bar</div>
                </div>
                <div class="flex h-[10%] z-10">
                <div class="flex h-4/5 w-full items-end justify-around self-end border-2 bg-black/20">
                    <span class="rounded-t-md border-2 border-b-0 bg-orange-400 p-1">Player: Zageron</span>
                    <span class="rounded-t-md border-2 border-b-0 bg-orange-400 p-1">Games: 10000</span>
                    <span class="rounded-t-md border-2 border-b-0 bg-orange-400 p-1">Total: 15,000,000</span>
                    <span class="rounded-t-md border-2 border-b-0 bg-orange-400 p-1">Rank: 15,000</span>
                    <span class="rounded-t-md border-2 border-b-0 bg-orange-400 p-1">Average: 2,435</span>
                </div>
                </div>
            </div>
            </div>
        `;
    }
}

declare global
{
    interface HTMLElementTagNameMap
    {
        'x-full-element': FullElement;
    }
}
