import type { TemplateResult } from "lit";
import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('x-my-element')
export class MyElement extends LitElement
{
  static override styles = css`
    @tailwind base;
    @tailwind utilities;
  `;

  render(): TemplateResult
  {
    return html`
      <div class="text-3xl font-thin hover:underline hover:font-black">Hello from MyElement!</div>
    `;
  }
}
