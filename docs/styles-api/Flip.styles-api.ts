import type { FlipFactory } from 'mantine-extension-template';
import type { StylesApiData } from '../components/styles-api.types';

export const FlipStylesApi: StylesApiData<FlipFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--test-component-color': 'Controls root element `background-color`',
    },
  },

  modifiers: [{ modifier: 'data-centered', selector: 'root', condition: '`centered` prop is set' }],
};
