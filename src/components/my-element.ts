import type { TemplateResult } from "lit";
import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('x-my-element')
export class MyElement extends LitElement
{
  static shadowRootOptions = { ...LitElement.shadowRootOptions, mode: 'closed' as const };

  static override styles = css`
    @tailwind base;
    @tailwind utilities;
  `;

  render(): TemplateResult
  {
    return html`
      <div class="text-3xl text-slate-900 capitalize font-thin hover:text-green-300 hover:uppercase hover:underline hover:font-black">Hello from MyElement!</div>
    `;
  }
}

declare global
{
  interface HTMLElementTagNameMap
  {
    'x-my-element': MyElement;
  }
}
