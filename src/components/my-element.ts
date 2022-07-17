import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement
{
  render()
  {
    return html`
      <div>Hello from MyElement!</div>
    `;
  }
}

window.customElements.define('my-element', MyElement);
