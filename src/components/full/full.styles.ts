import { css } from 'lit'

export default css`
  .bg {
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='gradient' x1='0' y1='1' x2='1' y2='0'%3E%3Cstop offset='0%25' stop-color='%231495BD'/%3E%3Cstop offset='100%25' stop-color='%23033242'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' rx='0' ry='0' width='100' height='100' fill='url(%23gradient)'/%3E%3C/svg%3E");
  }

  .fade {
    -webkit-mask: linear-gradient(transparent, #fff);
    mask: linear-gradient(transparent, #fff);
  }

  .stripes {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cline x1='0' y1='50' x2='100' y2='50' stroke='%230332421f' stroke-width='2' stroke-linecap='box' vector-effect='non-scaling-stroke'%3E%3C/line%3E%3C/svg%3E");
  }
`
