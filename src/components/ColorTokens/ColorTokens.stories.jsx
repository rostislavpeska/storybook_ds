import { ColorTokens } from './ColorTokens';

export default {
  title: 'Design Tokens/Color Tokens',
  component: ColorTokens,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

// Example: 5 GOV Design System Colors
const govExampleColors = [
  {
    name: 'Primary Blue 500',
    value: '#2563eb',
    cssVar: '--gov-primary-500',
    usage: 'Primary actions, links, focus states',
  },
  {
    name: 'Grey 700',
    value: '#374151',
    cssVar: '--gov-grey-700',
    usage: 'Body text, headings',
  },
  {
    name: 'Success Green',
    value: '#059669',
    cssVar: '--gov-success',
    usage: 'Success messages, confirmations',
  },
  {
    name: 'Warning Yellow',
    value: '#d97706',
    cssVar: '--gov-warning',
    usage: 'Warning alerts, caution states',
  },
  {
    name: 'Error Red',
    value: '#dc2626',
    cssVar: '--gov-error',
    usage: 'Error messages, destructive actions',
  },
];

/**
 * Example with 5 GOV Design System colors.
 * This demonstrates the color token documentation pattern.
 */
export const GovExample = {
  args: {
    title: 'GOV Design System - Example Colors',
    colors: govExampleColors,
  },
};

/**
 * Colors displayed without a title header.
 */
export const WithoutTitle = {
  args: {
    colors: govExampleColors,
  },
};

