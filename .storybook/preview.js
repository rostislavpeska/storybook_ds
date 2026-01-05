import '../src/index.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Strict Light Mode
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f6f6f6' },
      ],
    },
    // Consistent padding for all stories
    layout: 'padded',
    // Options for the UI
    options: {
      storySort: {
        order: ['Introduction', 'Design Tokens', 'Components'],
      },
    },
  },
};

export default preview;
