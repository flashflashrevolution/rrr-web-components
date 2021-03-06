import type { CSSResultGroup } from 'lit'
import { LitElement, css } from 'lit'

export class TwLitElement extends LitElement {
  public static shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    mode: 'closed',
  }

  public static styles: CSSResultGroup = css`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  `
}
