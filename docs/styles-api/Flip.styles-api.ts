import type { FlipFactory } from '@gfazioli/mantine-flip';
import type { StylesApiData } from '../components/styles-api.types';

export const FlipStylesApi: StylesApiData<FlipFactory> = {
  selectors: {
    root: 'Root element',
    'flip-inner': 'Inner element',
    'flip-content': 'Content element',
  },

  vars: {
    root: {
      '--flip-perspective': 'Controls animation `perspective`',
      '--flip-transition-duration': 'Controls animation `duration`',
      '--flip-transition-timing-function': 'Controls animation `easing`',
    },
  },

  //modifiers: [{ modifier: 'data-centered', selector: 'root', condition: '`centered` prop is set' }],
};
