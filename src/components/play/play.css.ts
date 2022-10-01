import { css } from 'lit'

export default css`
  .grid-template-play {
    grid-template-areas:
      'progress    progress    progress'
      'judgements  notefield      hp   '
      'stats         stats      stats  ';
  }

  .grid-area-progress {
    grid-area: progress;
  }

  .grid-area-judgements {
    grid-area: judgements;
  }

  .grid-area-notefield {
    grid-area: notefield;
  }

  .grid-area-hp {
    grid-area: hp;
  }

  .grid-area-stats {
    grid-area: stats;
  }
`
