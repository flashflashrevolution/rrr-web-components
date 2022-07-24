import { css } from 'lit'

export default css`
  :host {
    --color-bg-start: #1495bd;
    --color-bg-end: red;
    --color-bg-lines: #0332421f;
  }

  .fade {
    -webkit-mask: linear-gradient(transparent, #fff);
    mask: linear-gradient(transparent, #fff);
  }
`
