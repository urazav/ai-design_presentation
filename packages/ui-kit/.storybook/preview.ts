import type { Preview } from '@storybook/react';
import '../src/foundations/variables.css';
import '../src/foundations/reset.css';
import '../src/foundations/typography.css';
import { magnetiqTheme } from './theme';

const preview: Preview = {
  parameters: {
    docs: {
      theme: magnetiqTheme,
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'surface', value: '#EDF3F7' },
        { name: 'dark',  value: '#000000' },
        { name: 'violet', value: '#280068' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
    a11y: {
      config: { rules: [{ id: 'color-contrast', enabled: true }] },
    },
  },

  globalTypes: {
    theme: {
      name:        'Theme',
      description: 'Color mode — maps to Figma Semantic Token modes',
      defaultValue: 'light',
      toolbar: {
        icon:  'circlehollow',
        items: [
          { value: 'light', icon: 'sun',  title: 'Light' },
          { value: 'dark',  icon: 'moon', title: 'Dark'  },
        ],
        showName: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'light';
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
      }
      return Story();
    },
  ],
};

export default preview;
