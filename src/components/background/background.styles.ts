import { css } from 'lit';
import baseComponentStyles from '../../styles/component.styles';

export default css`
    :host {
        --color-bg-start: #1495BD;
        --color-bg-end: red;
        --color-bg-lines: #0332421f;
    }

    .bg {
        overflow: hidden;
        position: relative;
        height: 1024px;
        width: 768px;
    }

    .fade {
        position: absolute;
        height: 100%;
        width: 100%;
        overflow: hidden;
        -webkit-mask: linear-gradient(transparent, #fff);
        mask: linear-gradient(transparent, #fff);
    }

    ${baseComponentStyles};
`;
