import { create } from '@storybook/theming/create';

export const magnetiqTheme = create({
  base: 'light',

  // Brand
  brandTitle:  'Magnetiq Bank — DS Kit',
  brandUrl:    'https://github.com/urazav/ai-design_presentation',
  brandTarget: '_blank',

  // UI
  colorPrimary:   '#5100C0',
  colorSecondary: '#00D180',

  // App chrome
  appBg:          '#EDF3F7',
  appContentBg:   '#FFFFFF',
  appBorderColor: '#D1DDE8',
  appBorderRadius: 8,

  // Typography
  fontBase:  '"Manrope", system-ui, sans-serif',
  fontCode:  '"JetBrains Mono", monospace',

  // Toolbar
  barBg:          '#FFFFFF',
  barTextColor:   '#586977',
  barSelectedColor: '#5100C0',
  barHoverColor:  '#5100C0',

  // Buttons
  buttonBg:          '#5100C0',
  buttonBorder:      '#5100C0',
  booleanBg:         '#EDF3F7',
  booleanSelectedBg: '#5100C0',

  // Text
  textColor:          '#000000',
  textInverseColor:   '#FFFFFF',
  textMutedColor:     '#586977',
});
