import { create } from '@storybook/theming';

export default create({
  base: 'light',
  
  // Branding
  brandTitle: 'GOV.cz Design System',
  brandUrl: 'https://designsystem.gov.cz',
  brandImage: 'https://designsystem.gov.cz/img/logo.svg',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#2362a2', // --gov-primary-600
  colorSecondary: '#337fc4', // --gov-primary-500

  // UI
  appBg: '#f6f6f6', // --gov-neutral-50
  appContentBg: '#ffffff',
  appBorderColor: '#d1d1d1', // --gov-neutral-200
  appBorderRadius: 8,

  // Typography
  fontBase: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: '"JetBrains Mono", monospace',

  // Text colors
  textColor: '#1a1a1a', // --gov-neutral-950
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#5d5d5d', // --gov-neutral-600
  barSelectedColor: '#2362a2', // --gov-primary-600
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#d1d1d1',
  inputTextColor: '#1a1a1a',
  inputBorderRadius: 4,
});

