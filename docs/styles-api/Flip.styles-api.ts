import type { FlipFactory } from '@gfazioli/mantine-flip';
import type { StylesApiData } from '../components/styles-api.types';

export const FlipStylesApi: StylesApiData<FlipFactory> = {
  selectors: {
    root: 'Root element',
    'flip-container': 'Flip container element',
    'flip-front-face': 'Front face element',
    'flip-back-face': 'Back face element',
  },

  vars: {
    root: {
      '--flip-perspective': 'Controls animation `perspective`',
      '--flip-transition-duration': 'Controls animation `duration`',
      '--flip-transition-timing-function': 'Controls animation `easing`',
    },
    'flip-container': {},
    'flip-front-face': {},
    'flip-back-face': {},
  },

  //modifiers: [{ modifier: 'data-centered', selector: 'root', condition: '`centered` prop is set' }],
};
