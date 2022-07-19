import type { TemplateResult } from "lit";
import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./background.styles";

@customElement('x-background-element')
export class BackgroundElement extends LitElement
{
    static styles = styles;

    static shadowRootOptions = { ...LitElement.shadowRootOptions, mode: 'closed' as const };

    protected render(): TemplateResult
    {
        return html`
        <div class="bg">
            <div class="fade">
                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="line" viewBox="0,0,100,100" width="1%" height="1%" patternTransform="rotate(-45)">
                            <line x1='0' y1='50' x2='100' y2='50' stroke='var(--color-bg-lines)' stroke-width='5' stroke-linecap='box' vector-effect='non-scaling-stroke'/>
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#line)" />
                </svg>
            </div>
            <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="bg-gradient" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stop-color="var(--color-bg-start)" />
                        <stop offset="100%" stop-color="var(--color-bg-end)" />
                    </linearGradient>


                </defs>
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" fill="url(#bg-gradient)" />
            </svg>
        </div>
        `;
    }
}

declare global
{
    interface HTMLElementTagNameMap
    {
        'x-background-element': BackgroundElement;
    }
}
