import '../src/index.css';

/**
 * GOV.cz Design System - Storybook Preview Configuration
 * 
 * Theme Structure:
 * - Currently forces light mode
 * - Ready for dark mode implementation via the theme toolbar toggle
 * - CSS variables in index.css already support dark mode overrides
 */

/** @type { import('@storybook/react').Preview } */
const preview = {
  // Global types for theme switching (adds a toggle to the toolbar)
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light', // Force light mode by default
      toolbar: {
        icon: 'sun',
        items: [
          { value: 'light', icon: 'sun', title: 'Light Mode' },
          { value: 'dark', icon: 'moon', title: 'Dark Mode' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Background addon - force light by default
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#262626' },
      ],
    },
    // Centered layout for most components
    layout: 'centered',
  },
};

export default preview;
