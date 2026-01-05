import { setProjectAnnotations } from '@storybook/react-vite';
import * as projectAnnotations from './preview';
import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const annotations = setProjectAnnotations([
  projectAnnotations,
  a11yAddonAnnotations,
]);

// Run Storybook's beforeAll hook
beforeAll(annotations.beforeAll);