import type { CSSResultGroup } from 'lit'
import { css, LitElement } from 'lit'

export default class TwLitElement extends LitElement {
  public static shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    mode: 'open',
  }

  public static styles: CSSResultGroup = css`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  `
}
