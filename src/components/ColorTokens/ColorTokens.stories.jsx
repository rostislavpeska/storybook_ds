import { ColorTokens } from './ColorTokens';

export default {
  title: 'Design Tokens/Color Tokens',
  component: ColorTokens,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

/* ========================================
   GOV.cz Primary Colors (Blue Scale)
   Mode: gov
   ======================================== */
const govPrimaryColors = [
  { name: 'Primary 50', value: '#f3f7fc', cssVar: '--gov-primary-50', usage: 'Lightest primary, subtle backgrounds' },
  { name: 'Primary 100', value: '#e5eef9', cssVar: '--gov-primary-100', usage: 'Light backgrounds, hover states' },
  { name: 'Primary 200', value: '#c5dbf2', cssVar: '--gov-primary-200', usage: 'Borders, dividers' },
  { name: 'Primary 300', value: '#93bde6', cssVar: '--gov-primary-300', usage: 'Disabled states, decorative' },
  { name: 'Primary 400', value: '#599bd7', cssVar: '--gov-primary-400', usage: 'Links, interactive elements' },
  { name: 'Primary 500', value: '#337fc4', cssVar: '--gov-primary-500', usage: 'Primary brand color' },
  { name: 'Primary 600', value: '#2362a2', cssVar: '--gov-primary-600', usage: 'Buttons, key actions' },
  { name: 'Primary 700', value: '#1e5086', cssVar: '--gov-primary-700', usage: 'Hover states, emphasis' },
  { name: 'Primary 800', value: '#1d456f', cssVar: '--gov-primary-800', usage: 'Active states, pressed' },
  { name: 'Primary 900', value: '#1d3c5d', cssVar: '--gov-primary-900', usage: 'Dark backgrounds' },
  { name: 'Primary 950', value: '#13263e', cssVar: '--gov-primary-950', usage: 'Darker backgrounds' },
  { name: 'Primary 1000', value: '#0f1f33', cssVar: '--gov-primary-1000', usage: 'Darkest primary' },
  { name: 'Primary 1050', value: '#010409', cssVar: '--gov-primary-1050', usage: 'Near black' },
];

export const GovPrimary = {
  render: (args) => (
    <div>
      {/* Unified Info Box */}
      <div className="doc-info-box">
        <h1 className="doc-info-box__title">
          Color System
        </h1>
        <p className="doc-info-box__description">
          The GOV.cz color palette is built on a foundation of blue and yellow, 
          representing the national colors of the Czech Republic. It includes semantic status 
          colors and a flexible grayscale for UI depth.
        </p>
        <a 
          href="https://designsystem.gov.cz/principy/barevne-tokeny.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="doc-info-box__link"
        >
          Official Documentation: Color Tokens
        </a>
      </div>

      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Primary Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        The core blue scale used for branding, primary actions, and key interactive elements.
      </p>

      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Blue Scale (Default)',
    colors: govPrimaryColors,
  },
};

/* ========================================
   GOV.cz Secondary Colors (Yellow/Gold)
   Mode: gov
   ======================================== */
const govSecondaryColors = [
  { name: 'Secondary 50', value: '#fff9e9', cssVar: '--gov-secondary-50', usage: 'Lightest secondary' },
  { name: 'Secondary 100', value: '#fff6e1', cssVar: '--gov-secondary-100', usage: 'Light backgrounds' },
  { name: 'Secondary 200', value: '#fef0d0', cssVar: '--gov-secondary-200', usage: 'Subtle backgrounds' },
  { name: 'Secondary 300', value: '#fde1a1', cssVar: '--gov-secondary-300', usage: 'Decorative elements' },
  { name: 'Secondary 400', value: '#ffcf74', cssVar: '--gov-secondary-400', usage: 'Highlights' },
  { name: 'Secondary 500', value: '#fbc342', cssVar: '--gov-secondary-500', usage: 'Secondary brand' },
  { name: 'Secondary 600', value: '#fab413', cssVar: '--gov-secondary-600', usage: 'Key secondary actions' },
  { name: 'Secondary 700', value: '#c8900f', cssVar: '--gov-secondary-700', usage: 'Hover states' },
  { name: 'Secondary 800', value: '#af7a00', cssVar: '--gov-secondary-800', usage: 'Active states' },
  { name: 'Secondary 900', value: '#4a3403', cssVar: '--gov-secondary-900', usage: 'Dark accents' },
  { name: 'Secondary 950', value: '#3d2b00', cssVar: '--gov-secondary-950', usage: 'Darker accents' },
  { name: 'Secondary 1000', value: '#241b04', cssVar: '--gov-secondary-1000', usage: 'Darkest secondary' },
];

export const GovSecondary = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Secondary Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        The gold/yellow scale used for highlights, secondary brand elements, and warnings.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Yellow/Gold Scale',
    colors: govSecondaryColors,
  },
};

/* ========================================
   GOV.cz Neutral Colors (Grayscale)
   ======================================== */
const govNeutralColors = [
  { name: 'Neutral 0', value: '#ffffff', cssVar: '--gov-neutral-0', usage: 'White, backgrounds' },
  { name: 'Neutral 50', value: '#f6f6f6', cssVar: '--gov-neutral-50', usage: 'Light gray backgrounds' },
  { name: 'Neutral 100', value: '#e7e7e7', cssVar: '--gov-neutral-100', usage: 'Borders, dividers' },
  { name: 'Neutral 200', value: '#d1d1d1', cssVar: '--gov-neutral-200', usage: 'Disabled backgrounds' },
  { name: 'Neutral 300', value: '#b0b0b0', cssVar: '--gov-neutral-300', usage: 'Placeholder text' },
  { name: 'Neutral 400', value: '#888888', cssVar: '--gov-neutral-400', usage: 'Secondary icons' },
  { name: 'Neutral 500', value: '#6d6d6d', cssVar: '--gov-neutral-500', usage: 'Tertiary text' },
  { name: 'Neutral 600', value: '#5d5d5d', cssVar: '--gov-neutral-600', usage: 'Secondary text' },
  { name: 'Neutral 700', value: '#4f4f4f', cssVar: '--gov-neutral-700', usage: 'Body text' },
  { name: 'Neutral 800', value: '#454545', cssVar: '--gov-neutral-800', usage: 'Headings' },
  { name: 'Neutral 900', value: '#3b3b3b', cssVar: '--gov-neutral-900', usage: 'Dark backgrounds' },
  { name: 'Neutral 950', value: '#262626', cssVar: '--gov-neutral-950', usage: 'Primary text' },
  { name: 'Neutral 1000', value: '#000000', cssVar: '--gov-neutral-1000', usage: 'Black' },
];

export const GovNeutral = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Neutral Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Grayscale palette for text, backgrounds, borders, and UI structure.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Grayscale Scale',
    colors: govNeutralColors,
  },
};

/* ========================================
   GOV.cz Error Colors (Red Scale)
   ======================================== */
const govErrorColors = [
  { name: 'Error 50', value: '#fef2f2', cssVar: '--gov-error-50', usage: 'Error background light' },
  { name: 'Error 100', value: '#fde3e3', cssVar: '--gov-error-100', usage: 'Error subtle background' },
  { name: 'Error 200', value: '#fccccc', cssVar: '--gov-error-200', usage: 'Error borders' },
  { name: 'Error 300', value: '#f8a9a9', cssVar: '--gov-error-300', usage: 'Error decorative' },
  { name: 'Error 400', value: '#f37676', cssVar: '--gov-error-400', usage: 'Error text (dark mode)' },
  { name: 'Error 500', value: '#e84b4b', cssVar: '--gov-error-500', usage: 'Error emphasis' },
  { name: 'Error 600', value: '#c62828', cssVar: '--gov-error-600', usage: 'Error primary' },
  { name: 'Error 700', value: '#b32222', cssVar: '--gov-error-700', usage: 'Error text (light mode)' },
  { name: 'Error 800', value: '#7e1414', cssVar: '--gov-error-800', usage: 'Error dark' },
  { name: 'Error 900', value: '#490c0c', cssVar: '--gov-error-900', usage: 'Error darker' },
  { name: 'Error 950', value: '#300606', cssVar: '--gov-error-950', usage: 'Error darkest' },
  { name: 'Error 1000', value: '#240303', cssVar: '--gov-error-1000', usage: 'Error near black' },
];

export const GovError = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Error Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Red palette for error states, destructive actions, and alerts.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Red Scale',
    colors: govErrorColors,
  },
};

/* ========================================
   GOV.cz Warning Colors (Yellow Scale)
   ======================================== */
const govWarningColors = [
  { name: 'Warning 50', value: '#fefbe8', cssVar: '--gov-warning-50', usage: 'Warning background light' },
  { name: 'Warning 100', value: '#fef7c3', cssVar: '--gov-warning-100', usage: 'Warning subtle background' },
  { name: 'Warning 200', value: '#feed8a', cssVar: '--gov-warning-200', usage: 'Warning borders' },
  { name: 'Warning 300', value: '#fdd835', cssVar: '--gov-warning-300', usage: 'Warning decorative' },
  { name: 'Warning 400', value: '#fac615', cssVar: '--gov-warning-400', usage: 'Warning primary (dark)' },
  { name: 'Warning 500', value: '#eaad08', cssVar: '--gov-warning-500', usage: 'Warning button' },
  { name: 'Warning 600', value: '#ca8504', cssVar: '--gov-warning-600', usage: 'Warning border' },
  { name: 'Warning 700', value: '#e49400', cssVar: '--gov-warning-700', usage: 'Warning icon' },
  { name: 'Warning 800', value: '#be7d02', cssVar: '--gov-warning-800', usage: 'Warning dark' },
  { name: 'Warning 900', value: '#6b4a0d', cssVar: '--gov-warning-900', usage: 'Warning text' },
  { name: 'Warning 950', value: '#432e06', cssVar: '--gov-warning-950', usage: 'Warning darkest' },
  { name: 'Warning 1000', value: '#2a1b00', cssVar: '--gov-warning-1000', usage: 'Warning near black' },
];

export const GovWarning = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Warning Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Yellow/Gold palette for warning states and cautionary information.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Yellow Scale',
    colors: govWarningColors,
  },
};

/* ========================================
   GOV.cz Success Colors (Green Scale)
   ======================================== */
const govSuccessColors = [
  { name: 'Success 50', value: '#f3faf3', cssVar: '--gov-success-50', usage: 'Success background light' },
  { name: 'Success 100', value: '#e2f6e3', cssVar: '--gov-success-100', usage: 'Success subtle background' },
  { name: 'Success 200', value: '#c7ebc9', cssVar: '--gov-success-200', usage: 'Success borders' },
  { name: 'Success 300', value: '#9bda9e', cssVar: '--gov-success-300', usage: 'Success decorative' },
  { name: 'Success 400', value: '#67c16b', cssVar: '--gov-success-400', usage: 'Success text (dark mode)' },
  { name: 'Success 500', value: '#42a547', cssVar: '--gov-success-500', usage: 'Success emphasis' },
  { name: 'Success 600', value: '#2e7d32', cssVar: '--gov-success-600', usage: 'Success primary' },
  { name: 'Success 700', value: '#2a6b2d', cssVar: '--gov-success-700', usage: 'Success text (light)' },
  { name: 'Success 800', value: '#265529', cssVar: '--gov-success-800', usage: 'Success dark' },
  { name: 'Success 900', value: '#204724', cssVar: '--gov-success-900', usage: 'Success darker' },
  { name: 'Success 950', value: '#0d260f', cssVar: '--gov-success-950', usage: 'Success darkest' },
  { name: 'Success 1000', value: '#061b08', cssVar: '--gov-success-1000', usage: 'Success near black' },
];

export const GovSuccess = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Success Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Green palette for success states, confirmations, and positive feedback.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Green Scale',
    colors: govSuccessColors,
  },
};

/* ========================================
   GOV.cz Focus & Visited Colors
   ======================================== */
const govInteractiveColors = [
  { name: 'Focus 300', value: '#6caef4', cssVar: '--gov-focus-300', usage: 'Focus ring (dark mode)' },
  { name: 'Focus 600', value: '#007bff', cssVar: '--gov-focus-600', usage: 'Focus ring (light mode)' },
  { name: 'Visited 300', value: '#c4a7e6', cssVar: '--gov-visited-300', usage: 'Visited link (dark mode)' },
  { name: 'Visited 600', value: '#67329e', cssVar: '--gov-visited-600', usage: 'Visited link (light mode)' },
  { name: 'Visited 700', value: '#60306b', cssVar: '--gov-visited-700', usage: 'Visited link hover' },
];

export const GovInteractive = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Interactive & State Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Colors for focused elements, visited links, and specialized interactive states.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Focus & Visited',
    colors: govInteractiveColors,
  },
};

/* ========================================
   Alternative Brand: Mode 2 (Green Theme)
   ======================================== */
const govMode2Colors = [
  { name: 'Mode2 Primary 50', value: '#f3fbf6', cssVar: '--gov-mode2-primary-50', usage: 'Lightest green' },
  { name: 'Mode2 Primary 100', value: '#e5f7ed', cssVar: '--gov-mode2-primary-100', usage: 'Light green bg' },
  { name: 'Mode2 Primary 200', value: '#c6ebd8', cssVar: '--gov-mode2-primary-200', usage: 'Green borders' },
  { name: 'Mode2 Primary 300', value: '#92d9b5', cssVar: '--gov-mode2-primary-300', usage: 'Green decorative' },
  { name: 'Mode2 Primary 400', value: '#59bf89', cssVar: '--gov-mode2-primary-400', usage: 'Green links' },
  { name: 'Mode2 Primary 500', value: '#33a66a', cssVar: '--gov-mode2-primary-500', usage: 'Green primary' },
  { name: 'Mode2 Primary 600', value: '#00873e', cssVar: '--gov-mode2-primary-600', usage: 'Green buttons' },
  { name: 'Mode2 Primary 700', value: '#006f34', cssVar: '--gov-mode2-primary-700', usage: 'Green hover' },
  { name: 'Mode2 Primary 800', value: '#005429', cssVar: '--gov-mode2-primary-800', usage: 'Green active' },
  { name: 'Mode2 Primary 900', value: '#00391d', cssVar: '--gov-mode2-primary-900', usage: 'Green dark' },
  { name: 'Mode2 Primary 950', value: '#0d1c14', cssVar: '--gov-mode2-primary-950', usage: 'Green darker' },
  { name: 'Mode2 Primary 1000', value: '#0a1811', cssVar: '--gov-mode2-primary-1000', usage: 'Green darkest' },
];

export const GovMode2Green = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Mode 2: Green Theme
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Alternative green brand palette for specific departmental use.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Mode 2 (Green)',
    colors: govMode2Colors,
  },
};

/* ========================================
   Alternative Brand: Mode 3 (Green Alt)
   ======================================== */
const govMode3Colors = [
  { name: 'Mode3 Primary 50', value: '#f3faf3', cssVar: '--gov-mode3-primary-50', usage: 'Lightest' },
  { name: 'Mode3 Primary 100', value: '#e3f5e3', cssVar: '--gov-mode3-primary-100', usage: 'Light bg' },
  { name: 'Mode3 Primary 200', value: '#c8eac8', cssVar: '--gov-mode3-primary-200', usage: 'Borders' },
  { name: 'Mode3 Primary 300', value: '#9dd89d', cssVar: '--gov-mode3-primary-300', usage: 'Decorative' },
  { name: 'Mode3 Primary 400', value: '#6bbd6c', cssVar: '--gov-mode3-primary-400', usage: 'Links' },
  { name: 'Mode3 Primary 500', value: '#46a148', cssVar: '--gov-mode3-primary-500', usage: 'Primary' },
  { name: 'Mode3 Primary 600', value: '#368537', cssVar: '--gov-mode3-primary-600', usage: 'Buttons' },
  { name: 'Mode3 Primary 700', value: '#2d682e', cssVar: '--gov-mode3-primary-700', usage: 'Hover' },
  { name: 'Mode3 Primary 800', value: '#285329', cssVar: '--gov-mode3-primary-800', usage: 'Active' },
  { name: 'Mode3 Primary 900', value: '#224524', cssVar: '--gov-mode3-primary-900', usage: 'Dark' },
  { name: 'Mode3 Primary 950', value: '#0e2510', cssVar: '--gov-mode3-primary-950', usage: 'Darker' },
  { name: 'Mode3 Primary 1000', value: '#0e2510', cssVar: '--gov-mode3-primary-1000', usage: 'Darkest' },
];

export const GovMode3GreenAlt = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Mode 3: Green Alt
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Alternative light green brand palette.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Mode 3 (Green Alt)',
    colors: govMode3Colors,
  },
};

/* ========================================
   Alternative Brand: Mode 4 (Teal)
   ======================================== */
const govMode4Colors = [
  { name: 'Mode4 Primary 50', value: '#eaf8fb', cssVar: '--gov-mode4-primary-50', usage: 'Lightest teal' },
  { name: 'Mode4 Primary 100', value: '#d1eef5', cssVar: '--gov-mode4-primary-100', usage: 'Light teal bg' },
  { name: 'Mode4 Primary 200', value: '#a2d1f2', cssVar: '--gov-mode4-primary-200', usage: 'Teal borders' },
  { name: 'Mode4 Primary 300', value: '#50b6e8', cssVar: '--gov-mode4-primary-300', usage: 'Teal decorative' },
  { name: 'Mode4 Primary 400', value: '#05a3e0', cssVar: '--gov-mode4-primary-400', usage: 'Teal links' },
  { name: 'Mode4 Primary 500', value: '#0283b3', cssVar: '--gov-mode4-primary-500', usage: 'Teal primary' },
  { name: 'Mode4 Primary 600', value: '#02709d', cssVar: '--gov-mode4-primary-600', usage: 'Teal buttons' },
  { name: 'Mode4 Primary 700', value: '#02597c', cssVar: '--gov-mode4-primary-700', usage: 'Teal hover' },
  { name: 'Mode4 Primary 800', value: '#024768', cssVar: '--gov-mode4-primary-800', usage: 'Teal active' },
  { name: 'Mode4 Primary 900', value: '#013553', cssVar: '--gov-mode4-primary-900', usage: 'Teal dark' },
  { name: 'Mode4 Primary 950', value: '#012b44', cssVar: '--gov-mode4-primary-950', usage: 'Teal darker' },
  { name: 'Mode4 Primary 1000', value: '#011e30', cssVar: '--gov-mode4-primary-1000', usage: 'Teal darkest' },
];

export const GovMode4Teal = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Mode 4: Teal Theme
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Alternative teal brand palette.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Mode 4 (Teal)',
    colors: govMode4Colors,
  },
};

/* ========================================
   All Semantic Status Colors
   ======================================== */
const govSemanticColors = [
  { name: 'Status Error', value: '#c62828', cssVar: '--gov-status-error', usage: 'Error states' },
  { name: 'Status Warning', value: '#fac615', cssVar: '--gov-status-warning', usage: 'Warning states' },
  { name: 'Status Success', value: '#2e7d32', cssVar: '--gov-status-success', usage: 'Success states' },
  { name: 'Status Visited', value: '#67329e', cssVar: '--gov-status-visited', usage: 'Visited links' },
  { name: 'Status Focus', value: '#007bff', cssVar: '--gov-status-focus', usage: 'Focus indicators' },
  { name: 'Interactive Active', value: '#2362a2', cssVar: '--gov-interactive-active', usage: 'Active elements' },
  { name: 'Interactive Inactive', value: '#b0b0b0', cssVar: '--gov-interactive-inactive', usage: 'Inactive elements' },
  { name: 'Interactive Disabled', value: '#d1d1d1', cssVar: '--gov-interactive-disabled', usage: 'Disabled elements' },
];

export const GovSemanticStatus = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Semantic Status Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Core functional colors used across all themes for error, success, and warning states.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Semantic Status',
    colors: govSemanticColors,
  },
};

/* ========================================
   Text Colors (Light Mode)
   ======================================== */
const govTextColors = [
  { name: 'Text Primary', value: '#262626', cssVar: '--gov-text-primary', usage: 'Main body text' },
  { name: 'Text Secondary', value: '#4f4f4f', cssVar: '--gov-text-secondary', usage: 'Secondary text' },
  { name: 'Text Tertiary', value: '#6d6d6d', cssVar: '--gov-text-tertiary', usage: 'Tertiary text' },
  { name: 'Text White', value: '#ffffff', cssVar: '--gov-text-white', usage: 'Text on dark bg' },
  { name: 'Text Disabled', value: '#b0b0b0', cssVar: '--gov-text-disabled', usage: 'Disabled text' },
  { name: 'Text Placeholder', value: '#6d6d6d', cssVar: '--gov-text-placeholder', usage: 'Input placeholder' },
  { name: 'Text Primary Color', value: '#1e5086', cssVar: '--gov-text-primary-color', usage: 'Links' },
  { name: 'Text Secondary Color', value: '#af7a00', cssVar: '--gov-text-secondary-color', usage: 'Secondary links' },
  { name: 'Text Error', value: '#b32222', cssVar: '--gov-text-error', usage: 'Error messages' },
  { name: 'Text Warning', value: '#6b4a0d', cssVar: '--gov-text-warning', usage: 'Warning messages' },
  { name: 'Text Success', value: '#2a6b2d', cssVar: '--gov-text-success', usage: 'Success messages' },
  { name: 'Text Info', value: '#2362a2', cssVar: '--gov-text-info', usage: 'Info messages' },
];

export const GovTextColors = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Text Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Semantic tokens for text content in light mode.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Text (Light Mode)',
    colors: govTextColors,
  },
};

/* ========================================
   Background Colors (Light Mode)
   ======================================== */
const govBackgroundColors = [
  { name: 'Page Background', value: '#f6f6f6', cssVar: '--gov-bg-page', usage: 'Page background' },
  { name: 'Block Primary', value: '#ffffff', cssVar: '--gov-bg-block-primary', usage: 'Card backgrounds' },
  { name: 'Block Secondary', value: '#f6f6f6', cssVar: '--gov-bg-block-secondary', usage: 'Secondary blocks' },
  { name: 'Primary', value: '#2362a2', cssVar: '--gov-bg-primary', usage: 'Primary backgrounds' },
  { name: 'Primary Subtle', value: '#e5eef9', cssVar: '--gov-bg-primary-subtle', usage: 'Subtle primary bg' },
  { name: 'Primary Subtlest', value: '#f3f7fc', cssVar: '--gov-bg-primary-subtlest', usage: 'Subtlest primary' },
  { name: 'Secondary', value: '#fab413', cssVar: '--gov-bg-secondary', usage: 'Secondary backgrounds' },
  { name: 'Error Subtle', value: '#fde3e3', cssVar: '--gov-bg-error-subtle', usage: 'Error backgrounds' },
  { name: 'Warning Subtle', value: '#fef7c3', cssVar: '--gov-bg-warning-subtle', usage: 'Warning backgrounds' },
  { name: 'Success Subtle', value: '#e2f6e3', cssVar: '--gov-bg-success-subtle', usage: 'Success backgrounds' },
];

export const GovBackgroundColors = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Background Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Tokens for page, block, and component backgrounds.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Background (Light Mode)',
    colors: govBackgroundColors,
  },
};

/* ========================================
   Button Colors (Solid)
   ======================================== */
const govButtonSolidColors = [
  { name: 'Primary', value: '#2362a2', cssVar: '--gov-btn-solid-primary', usage: 'Primary button' },
  { name: 'Primary Hover', value: '#1e5086', cssVar: '--gov-btn-solid-primary-hover', usage: 'Primary hover' },
  { name: 'Primary Active', value: '#1d456f', cssVar: '--gov-btn-solid-primary-active', usage: 'Primary active' },
  { name: 'Secondary', value: '#fab413', cssVar: '--gov-btn-solid-secondary', usage: 'Secondary button' },
  { name: 'Neutral', value: '#5d5d5d', cssVar: '--gov-btn-solid-neutral', usage: 'Neutral button' },
  { name: 'Error', value: '#c62828', cssVar: '--gov-btn-solid-error', usage: 'Error/Delete button' },
  { name: 'Warning', value: '#eaad08', cssVar: '--gov-btn-solid-warning', usage: 'Warning button' },
  { name: 'Success', value: '#2e7d32', cssVar: '--gov-btn-solid-success', usage: 'Success button' },
  { name: 'Disabled', value: '#d1d1d1', cssVar: '--gov-btn-solid-disabled', usage: 'Disabled button' },
];

export const GovButtonSolid = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Button Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Tokens specifically for solid button backgrounds and states.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Buttons (Solid)',
    colors: govButtonSolidColors,
  },
};

/* ========================================
   Border Colors
   ======================================== */
const govBorderColors = [
  { name: 'Border Primary', value: '#2362a2', cssVar: '--gov-border-primary', usage: 'Primary borders' },
  { name: 'Border Primary Subtle', value: '#599bd7', cssVar: '--gov-border-primary-subtle', usage: 'Subtle primary' },
  { name: 'Border Secondary', value: '#fab413', cssVar: '--gov-border-secondary', usage: 'Secondary borders' },
  { name: 'Border Neutral', value: '#4f4f4f', cssVar: '--gov-border-neutral', usage: 'Neutral borders' },
  { name: 'Border Subtle', value: '#b0b0b0', cssVar: '--gov-border-subtle', usage: 'Subtle borders' },
  { name: 'Border Subtlest', value: '#e7e7e7', cssVar: '--gov-border-subtlest', usage: 'Subtlest borders' },
  { name: 'Border Error', value: '#c62828', cssVar: '--gov-border-error', usage: 'Error borders' },
  { name: 'Border Warning', value: '#ca8504', cssVar: '--gov-border-warning', usage: 'Warning borders' },
  { name: 'Border Success', value: '#2e7d32', cssVar: '--gov-border-success', usage: 'Success borders' },
  { name: 'Border Disabled', value: '#d1d1d1', cssVar: '--gov-border-disabled', usage: 'Disabled borders' },
];

export const GovBorderColors = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Border Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Tokens for primary, secondary, and functional borders.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Borders',
    colors: govBorderColors,
  },
};

/* ========================================
   Component: Navigation Colors
   ======================================== */
const govNavColors = [
  { name: 'Nav Background', value: '#ffffff', cssVar: '--gov-nav-background', usage: 'Navigation bg' },
  { name: 'Nav Separator', value: '#c5dbf2', cssVar: '--gov-nav-separator', usage: 'Nav dividers' },
  { name: 'Nav Text Link', value: '#1d3c5d', cssVar: '--gov-nav-text-link', usage: 'Nav links' },
  { name: 'Nav Text Primary', value: '#1d456f', cssVar: '--gov-nav-text-primary', usage: 'Nav primary text' },
  { name: 'Nav Text Secondary', value: '#3b3b3b', cssVar: '--gov-nav-text-secondary', usage: 'Nav secondary text' },
];

export const GovNavigationColors = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Navigation Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Component-specific tokens for site navigation.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Navigation',
    colors: govNavColors,
  },
};

/* ========================================
   Component: Footer Colors
   ======================================== */
const govFooterColors = [
  { name: 'Footer Background', value: '#1d3c5d', cssVar: '--gov-footer-background', usage: 'Footer bg' },
  { name: 'Footer Separator', value: '#2362a2', cssVar: '--gov-footer-separator', usage: 'Footer dividers' },
  { name: 'Footer Text Link', value: '#c5dbf2', cssVar: '--gov-footer-text-link', usage: 'Footer links' },
  { name: 'Footer Text Primary', value: '#ffffff', cssVar: '--gov-footer-text-primary', usage: 'Footer primary' },
  { name: 'Footer Text Secondary', value: '#d1d1d1', cssVar: '--gov-footer-text-secondary', usage: 'Footer secondary' },
];

export const GovFooterColors = {
  render: (args) => (
    <div>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Footer Colors
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Component-specific tokens for the global footer.
      </p>
      <ColorTokens {...args} />
    </div>
  ),
  args: {
    title: 'Footer',
    colors: govFooterColors,
  },
};

/* ========================================
   Complete Overview - All Core Scales
   ======================================== */
export const CompleteOverview = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Core Palette Overview
      </h1>
      <ColorTokens title="Primary (Blue)" colors={govPrimaryColors} />
      <ColorTokens title="Secondary (Yellow/Gold)" colors={govSecondaryColors} />
      <ColorTokens title="Neutral (Grayscale)" colors={govNeutralColors} />
      <ColorTokens title="Error (Red)" colors={govErrorColors} />
      <ColorTokens title="Warning (Yellow)" colors={govWarningColors} />
      <ColorTokens title="Success (Green)" colors={govSuccessColors} />
      <ColorTokens title="Focus & Visited" colors={govInteractiveColors} />
    </div>
  ),
};

/* ========================================
   All Brand Modes Comparison
   ======================================== */
export const BrandModesComparison = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Brand Mode Comparison
      </h1>
      <ColorTokens title="Mode: GOV (Default Blue)" colors={govPrimaryColors.slice(4, 8)} />
      <ColorTokens title="Mode 2: Green" colors={govMode2Colors.slice(4, 8)} />
      <ColorTokens title="Mode 3: Green Alt" colors={govMode3Colors.slice(4, 8)} />
      <ColorTokens title="Mode 4: Teal" colors={govMode4Colors.slice(4, 8)} />
    </div>
  ),
};
