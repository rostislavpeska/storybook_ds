import { Button } from './Button';
import { Icon } from '../Icon/Icon';
import { expect, fn, userEvent, within } from 'storybook/test';
import './Button.css';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    // Provide a mock function to spy on
    onClick: fn(),
  },
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
    },
    docs: {
      description: {
        component: `
# GOV.cz Button Component

A versatile button component following the GOV.cz design system. The Button supports multiple color variants, types (styles), sizes, and states to cover all UI needs.

## Features

- **6 Color Variants**: Primary, Secondary, Neutral, Error, Warning, Success
- **4 Type Variants**: Solid, Outlined, Base, Link
- **5 Size Variants**: XS (24px), S (32px), M (40px), L (48px), XL (56px)
- **Icon Support**: Left icon, right icon, or icon-only buttons
- **Accessibility**: Full keyboard navigation and focus states

## Usage

\`\`\`jsx
import { Button } from '@gov-cz/design-system';

// Basic usage
<Button>Click me</Button>

// With color and type
<Button color="success" type="outlined">
  Confirm
</Button>

// With icons
<Button 
  color="primary" 
  leftIcon={<Icon name="download" size="m" />}
>
  Download
</Button>
\`\`\`

## Design Tokens

The button uses GOV.cz design tokens for consistent styling:
- Heights: \`--gov-height-component-*\`
- Spacing: \`--gov-space-*\`
- Colors: \`--gov-btn-solid-*\`, \`--gov-btn-outlined-*\`
        `,
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'neutral', 'error', 'warning', 'success'],
      description: 'Color variant based on GOV.cz semantic colors',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'select',
      options: ['solid', 'outlined', 'base', 'link'],
      description: 'Visual style of the button',
      table: {
        defaultValue: { summary: 'solid' },
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl'],
      description: 'Size based on GOV.cz component height tokens',
      table: {
        defaultValue: { summary: 'm' },
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        defaultValue: { summary: false },
      },
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
    leftIcon: {
      control: false,
      description: 'Icon element for the left side',
    },
    rightIcon: {
      control: false,
      description: 'Icon element for the right side',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
};

// ============================================
// All Button Variants - Main Documentation Story
// ============================================
export const AllButtonVariants = {
  name: 'All Button Variants',
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* Documentation Header */}
      <div className="doc-info-box">
        <h1 className="doc-info-box__title">
          GOV.cz Button Component
        </h1>
        <p className="doc-info-box__description">
          Slouží ke spuštění akce nebo k přechodu na další stránku jedním kliknutím.
          Supports 6 color variants, 4 style types, and 5 sizes.
        </p>
        <a 
          href="https://designsystem.gov.cz/komponenty/button.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="doc-info-box__link"
        >
          View Official Documentation →
        </a>
      </div>

      {/* Button Types Section */}
      <section className="button-docs-section">
        <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--gov-neutral-900)', marginBottom: '24px', paddingBottom: '8px', borderBottom: '2px solid var(--gov-neutral-200)' }}>
          Button Types
        </h1>
        
        <div className="button-docs-group">
          <h2 className="button-docs-group__title">Solid (Default)</h2>
          <div className="button-docs-grid">
            <Button color="primary" type="solid">Primary</Button>
            <Button color="secondary" type="solid">Secondary</Button>
            <Button color="neutral" type="solid">Neutral</Button>
            <Button color="error" type="solid">Error</Button>
            <Button color="warning" type="solid">Warning</Button>
            <Button color="success" type="solid">Success</Button>
          </div>
        </div>

        <div className="button-docs-group">
          <h2 className="button-docs-group__title">Outlined</h2>
          <div className="button-docs-grid">
            <Button color="primary" type="outlined">Primary</Button>
            <Button color="secondary" type="outlined">Secondary</Button>
            <Button color="neutral" type="outlined">Neutral</Button>
            <Button color="error" type="outlined">Error</Button>
            <Button color="warning" type="outlined">Warning</Button>
            <Button color="success" type="outlined">Success</Button>
          </div>
        </div>

        <div className="button-docs-group">
          <h2 className="button-docs-group__title">Base (Ghost)</h2>
          <div className="button-docs-grid">
            <Button color="primary" type="base">Primary</Button>
            <Button color="secondary" type="base">Secondary</Button>
            <Button color="neutral" type="base">Neutral</Button>
            <Button color="error" type="base">Error</Button>
            <Button color="warning" type="base">Warning</Button>
            <Button color="success" type="base">Success</Button>
          </div>
        </div>

        <div className="button-docs-group">
          <h2 className="button-docs-group__title">Link</h2>
          <div className="button-docs-grid">
            <Button color="primary" type="link">Primary</Button>
            <Button color="secondary" type="link">Secondary</Button>
            <Button color="neutral" type="link">Neutral</Button>
            <Button color="error" type="link">Error</Button>
            <Button color="warning" type="link">Warning</Button>
            <Button color="success" type="link">Success</Button>
          </div>
        </div>
      </section>

      {/* Size Variants Section */}
      <section className="button-docs-section">
        <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--gov-neutral-900)', marginBottom: '24px', paddingBottom: '8px', borderBottom: '2px solid var(--gov-neutral-200)' }}>
          Size Variants
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--gov-neutral-600)', marginBottom: '16px' }}>
          Use larger buttons for important actions. Maintain consistent sizing when buttons appear together.
        </p>
        
        <div className="button-docs-group">
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>XS (24px)</span>
              <Button size="xs">Button</Button>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>S (32px)</span>
              <Button size="s">Button</Button>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>M (40px)</span>
              <Button size="m">Button</Button>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>L (48px)</span>
              <Button size="l">Button</Button>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>XL (56px)</span>
              <Button size="xl">Button</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Color Variants Section */}
      <section className="button-docs-section">
        <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--gov-neutral-900)', marginBottom: '24px', paddingBottom: '8px', borderBottom: '2px solid var(--gov-neutral-200)' }}>
          Color Variants
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--gov-neutral-600)', marginBottom: '16px' }}>
          Each color has semantic meaning. Error for destructive actions, Success for confirmation, Warning for caution.
        </p>
        
        <div className="button-docs-group">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
            <div style={{ textAlign: 'center' }}>
              <Button color="primary">Primary</Button>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>Main CTA</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button color="secondary">Secondary</Button>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>Alternative</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button color="neutral">Neutral</Button>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>Subtle</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button color="error">Error</Button>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>Destructive</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button color="warning">Warning</Button>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>Caution</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button color="success">Success</Button>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>Confirm</p>
            </div>
          </div>
        </div>
      </section>

      {/* States Section */}
      <section className="button-docs-section">
        <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--gov-neutral-900)', marginBottom: '24px', paddingBottom: '8px', borderBottom: '2px solid var(--gov-neutral-200)' }}>
          Button States
        </h1>
        
        <div className="button-docs-group">
          <h2 className="button-docs-group__title">Enabled vs Disabled</h2>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <div>
              <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>Enabled</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Button type="solid">Solid</Button>
                <Button type="outlined">Outlined</Button>
                <Button type="base">Base</Button>
              </div>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>Disabled</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Button type="solid" disabled>Solid</Button>
                <Button type="outlined" disabled>Outlined</Button>
                <Button type="base" disabled>Base</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* With Icons Section */}
      <section className="button-docs-section">
        <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--gov-neutral-900)', marginBottom: '24px', paddingBottom: '8px', borderBottom: '2px solid var(--gov-neutral-200)' }}>
          Buttons with Icons
        </h1>
        
        <div className="button-docs-group">
          <h2 className="button-docs-group__title">Icon Positions</h2>
          <div className="button-docs-grid">
            <Button leftIcon={<Icon name="download" size="m" color="white" />}>
              Left Icon
            </Button>
            <Button rightIcon={<Icon name="chevron-right" size="m" color="white" />}>
              Right Icon
            </Button>
            <Button 
              leftIcon={<Icon name="file" size="m" color="white" />}
              rightIcon={<Icon name="download" size="m" color="white" />}
            >
              Both Icons
            </Button>
          </div>
        </div>

        <div className="button-docs-group">
          <h2 className="button-docs-group__title">Icon Only (Square)</h2>
          <div className="button-docs-grid">
            <Button size="xs" leftIcon={<Icon name="settings" size="xs" color="white" />} aria-label="Settings" />
            <Button size="s" leftIcon={<Icon name="search" size="s" color="white" />} aria-label="Search" />
            <Button size="m" leftIcon={<Icon name="menu" size="m" color="white" />} aria-label="Menu" />
            <Button size="l" leftIcon={<Icon name="home" size="l" color="white" />} aria-label="Home" />
            <Button size="xl" leftIcon={<Icon name="user" size="xl" color="white" />} aria-label="User" />
          </div>
        </div>
      </section>
    </div>
  ),
};

// ============================================
// Default Story with Controls (Playground)
// ============================================
export const Default = {
  name: 'Playground',
  args: {
    children: 'Button',
    color: 'primary',
    type: 'solid',
    size: 'm',
    disabled: false,
  },
  parameters: {
    layout: 'centered',
  },
};

// ============================================
// Interaction Tests with Play Functions
// ============================================

/**
 * Tests that clicking the button triggers the onClick handler
 */
export const ClickInteraction = {
  name: 'Test: Click Fires Event',
  args: {
    children: 'Click Me',
    color: 'primary',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });
    
    // Simulate user clicking the button
    await userEvent.click(button);
    
    // Assert that onClick was called
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

/**
 * Tests that a disabled button does NOT fire onClick
 */
export const DisabledNoClick = {
  name: 'Test: Disabled Blocks Click',
  args: {
    children: 'Disabled Button',
    color: 'primary',
    disabled: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /disabled button/i });
    
    // Assert the button is disabled
    await expect(button).toBeDisabled();
    
    // Assert the button has the disabled class
    await expect(button).toHaveClass('gov-button--disabled');
    
    // Assert that onClick was never called (disabled buttons prevent clicks)
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

/**
 * Tests that the button can be focused via keyboard
 */
export const KeyboardFocus = {
  name: 'Test: Keyboard Focus',
  args: {
    children: 'Focus Me',
    color: 'primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /focus me/i });
    
    // Focus the button via keyboard navigation
    await userEvent.tab();
    
    // Assert that the button is now focused
    await expect(button).toHaveFocus();
  },
};

/**
 * Tests that pressing Enter on a focused button triggers onClick
 */
export const KeyboardEnter = {
  name: 'Test: Enter Key Clicks',
  args: {
    children: 'Press Enter',
    color: 'success',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /press enter/i });
    
    // Focus the button
    button.focus();
    await expect(button).toHaveFocus();
    
    // Press Enter key
    await userEvent.keyboard('{Enter}');
    
    // Assert onClick was called
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

/**
 * Tests multiple rapid clicks
 */
export const MultipleClicks = {
  name: 'Test: Multiple Clicks',
  args: {
    children: 'Click Multiple Times',
    color: 'secondary',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click multiple times/i });
    
    // Click the button 3 times
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);
    
    // Assert onClick was called exactly 3 times
    await expect(args.onClick).toHaveBeenCalledTimes(3);
  },
};

// ============================================
// All Color Variants
// ============================================
export const ColorVariants = {
  name: 'Color Variants',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'All color variants showing solid type buttons. Each color has semantic meaning in the design system.',
      },
    },
  },
  render: () => (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--gov-neutral-900)', marginBottom: '24px', paddingBottom: '8px', borderBottom: '2px solid var(--gov-neutral-200)' }}>
        Color Variants by Type
      </h1>

      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Solid Buttons</h2>
        <div className="button-docs-grid">
          <Button color="primary" type="solid">Primary</Button>
          <Button color="secondary" type="solid">Secondary</Button>
          <Button color="neutral" type="solid">Neutral</Button>
          <Button color="error" type="solid">Error</Button>
          <Button color="warning" type="solid">Warning</Button>
          <Button color="success" type="solid">Success</Button>
        </div>
      </div>

      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Outlined Buttons</h2>
        <div className="button-docs-grid">
          <Button color="primary" type="outlined">Primary</Button>
          <Button color="secondary" type="outlined">Secondary</Button>
          <Button color="neutral" type="outlined">Neutral</Button>
          <Button color="error" type="outlined">Error</Button>
          <Button color="warning" type="outlined">Warning</Button>
          <Button color="success" type="outlined">Success</Button>
        </div>
      </div>

      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Base Buttons (Ghost)</h2>
        <div className="button-docs-grid">
          <Button color="primary" type="base">Primary</Button>
          <Button color="secondary" type="base">Secondary</Button>
          <Button color="neutral" type="base">Neutral</Button>
          <Button color="error" type="base">Error</Button>
          <Button color="warning" type="base">Warning</Button>
          <Button color="success" type="base">Success</Button>
        </div>
      </div>

      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Link Buttons</h2>
        <div className="button-docs-grid">
          <Button color="primary" type="link">Primary</Button>
          <Button color="secondary" type="link">Secondary</Button>
          <Button color="neutral" type="link">Neutral</Button>
          <Button color="error" type="link">Error</Button>
          <Button color="warning" type="link">Warning</Button>
          <Button color="success" type="link">Success</Button>
        </div>
      </div>
    </div>
  ),
};

// ============================================
// Size Variants
// ============================================
export const SizeVariants = {
  name: 'Size Variants',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'All size variants from XS (24px) to XL (56px). Sizes correspond to GOV.cz component height tokens.',
      },
    },
  },
  render: () => (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--gov-neutral-900)', marginBottom: '24px', paddingBottom: '8px', borderBottom: '2px solid var(--gov-neutral-200)' }}>
        Size Variants
      </h1>
      <p style={{ fontSize: '14px', color: 'var(--gov-neutral-600)', marginBottom: '24px' }}>
        Use larger buttons for important actions. Maintain consistent sizing when buttons appear together.
      </p>

      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Solid Sizes</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>XS (24px)</span>
            <Button size="xs">Button</Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>S (32px)</span>
            <Button size="s">Button</Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>M (40px)</span>
            <Button size="m">Button</Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>L (48px)</span>
            <Button size="l">Button</Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>XL (56px)</span>
            <Button size="xl">Button</Button>
          </div>
        </div>
      </div>

      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Outlined Sizes</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <Button size="xs" type="outlined">XS</Button>
          <Button size="s" type="outlined">S</Button>
          <Button size="m" type="outlined">M</Button>
          <Button size="l" type="outlined">L</Button>
          <Button size="xl" type="outlined">XL</Button>
        </div>
      </div>

      <div className="button-docs-group" style={{ marginTop: '24px' }}>
        <h2 className="button-docs-group__title">Size Reference</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--gov-neutral-200)' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>Size</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Height</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Font Size</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--gov-neutral-200)' }}>
              <td style={{ padding: '12px' }}>XS</td>
              <td style={{ padding: '12px' }}>24px</td>
              <td style={{ padding: '12px' }}>12px</td>
              <td style={{ padding: '12px' }}>Compact UI, inline actions</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--gov-neutral-200)' }}>
              <td style={{ padding: '12px' }}>S</td>
              <td style={{ padding: '12px' }}>32px</td>
              <td style={{ padding: '12px' }}>14px</td>
              <td style={{ padding: '12px' }}>Secondary actions, tight spaces</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--gov-neutral-200)' }}>
              <td style={{ padding: '12px' }}>M</td>
              <td style={{ padding: '12px' }}>40px</td>
              <td style={{ padding: '12px' }}>16px</td>
              <td style={{ padding: '12px' }}>Default, most common</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--gov-neutral-200)' }}>
              <td style={{ padding: '12px' }}>L</td>
              <td style={{ padding: '12px' }}>48px</td>
              <td style={{ padding: '12px' }}>18px</td>
              <td style={{ padding: '12px' }}>Prominent actions</td>
            </tr>
            <tr>
              <td style={{ padding: '12px' }}>XL</td>
              <td style={{ padding: '12px' }}>56px</td>
              <td style={{ padding: '12px' }}>20px</td>
              <td style={{ padding: '12px' }}>Hero sections, CTAs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};

// ============================================
// With Icons
// ============================================
export const WithIcons = {
  name: 'With Icons',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Buttons can include icons on the left, right, or both sides. Icon sizes automatically scale with button size.',
      },
    },
  },
  render: () => (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--gov-neutral-900)', marginBottom: '24px', paddingBottom: '8px', borderBottom: '2px solid var(--gov-neutral-200)' }}>
        Buttons with Icons
      </h1>

      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Left Icon</h2>
        <div className="button-docs-grid">
          <Button leftIcon={<Icon name="download" size="m" color="white" />}>
            Download
          </Button>
          <Button color="success" leftIcon={<Icon name="check" size="m" color="white" />}>
            Confirm
          </Button>
          <Button color="error" leftIcon={<Icon name="x" size="m" color="white" />}>
            Delete
          </Button>
        </div>
      </div>

      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Right Icon</h2>
        <div className="button-docs-grid">
          <Button rightIcon={<Icon name="chevron-right" size="m" color="white" />}>
            Next
          </Button>
          <Button type="outlined" rightIcon={<Icon name="chevron-right" size="m" color="var(--gov-primary-700)" />}>
            Learn More
          </Button>
        </div>
      </div>

      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Both Icons</h2>
        <div className="button-docs-grid">
          <Button 
            leftIcon={<Icon name="file" size="m" color="white" />}
            rightIcon={<Icon name="download" size="m" color="white" />}
          >
            Export File
          </Button>
        </div>
      </div>

      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Icon Only (Square Buttons)</h2>
        <div className="button-docs-grid" style={{ marginBottom: '12px' }}>
          <Button size="xs" leftIcon={<Icon name="settings" size="xs" color="white" />} aria-label="Settings" />
          <Button size="s" leftIcon={<Icon name="settings" size="s" color="white" />} aria-label="Settings" />
          <Button size="m" leftIcon={<Icon name="settings" size="m" color="white" />} aria-label="Settings" />
          <Button size="l" leftIcon={<Icon name="settings" size="l" color="white" />} aria-label="Settings" />
          <Button size="xl" leftIcon={<Icon name="settings" size="xl" color="white" />} aria-label="Settings" />
        </div>
        <div className="button-docs-grid">
          <Button size="m" type="outlined" leftIcon={<Icon name="search" size="m" color="var(--gov-primary-700)" />} aria-label="Search" />
          <Button size="m" type="base" leftIcon={<Icon name="menu" size="m" color="var(--gov-primary-700)" />} aria-label="Menu" />
          <Button size="m" color="error" leftIcon={<Icon name="x" size="m" color="white" />} aria-label="Close" />
        </div>
      </div>
    </div>
  ),
};

// ============================================
// States
// ============================================
export const States = {
  name: 'States',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Interactive states for all button types. Hover over buttons to see state changes.',
      },
    },
  },
  render: () => (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--gov-neutral-900)', marginBottom: '24px', paddingBottom: '8px', borderBottom: '2px solid var(--gov-neutral-200)' }}>
        Button States
      </h1>

      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Enabled vs Disabled</h2>
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          <div>
            <span style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#4f4f4f', marginBottom: '12px' }}>Enabled</span>
            <div className="button-docs-grid">
              <Button color="primary">Primary</Button>
              <Button type="outlined">Outlined</Button>
              <Button type="base">Base</Button>
            </div>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#4f4f4f', marginBottom: '12px' }}>Disabled</span>
            <div className="button-docs-grid">
              <Button color="primary" disabled>Primary</Button>
              <Button type="outlined" disabled>Outlined</Button>
              <Button type="base" disabled>Base</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="button-docs-group">
        <h2 className="button-docs-group__title">All Types - Disabled</h2>
        <div className="button-docs-grid">
          <Button type="solid" disabled>Solid</Button>
          <Button type="outlined" disabled>Outlined</Button>
          <Button type="base" disabled>Base</Button>
          <Button type="link" disabled>Link</Button>
        </div>
      </div>

      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Focus State</h2>
        <p style={{ fontSize: '13px', color: 'var(--gov-neutral-600)', marginBottom: '16px' }}>
          Press Tab to navigate and see focus rings (blue outline). WCAG compliant focus indication.
        </p>
        <div className="button-docs-grid">
          <Button>Tab here</Button>
          <Button type="outlined">Then here</Button>
          <Button type="base">And here</Button>
        </div>
      </div>
    </div>
  ),
};

// ============================================
// Button Matrix (All Combinations)
// ============================================
export const ButtonMatrix = {
  name: 'Complete Matrix',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Complete matrix showing all color and type combinations for the M size.',
      },
    },
  },
  render: () => {
    const colors = ['primary', 'secondary', 'neutral', 'error', 'warning', 'success'];
    const types = ['solid', 'outlined', 'base', 'link'];
    
    return (
      <div style={{ fontFamily: 'Roboto, sans-serif' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--gov-neutral-900)', marginBottom: '24px', paddingBottom: '8px', borderBottom: '2px solid var(--gov-neutral-200)' }}>
          Complete Button Matrix
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--gov-neutral-600)', marginBottom: '24px' }}>
          All 24 combinations of color × type at M size.
        </p>

        <div className="button-docs-group" style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '14px', fontWeight: 600, color: 'var(--gov-neutral-900)', borderBottom: '2px solid var(--gov-neutral-200)' }}>
                  Color / Type
                </th>
                {types.map(type => (
                  <th key={type} style={{ padding: '16px', textAlign: 'center', fontSize: '14px', fontWeight: 600, color: 'var(--gov-neutral-900)', borderBottom: '2px solid var(--gov-neutral-200)', textTransform: 'capitalize' }}>
                    {type}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {colors.map(color => (
                <tr key={color}>
                  <td style={{ padding: '16px', textTransform: 'capitalize', fontSize: '14px', fontWeight: 600, color: 'var(--gov-neutral-800)', borderBottom: '1px solid var(--gov-neutral-200)' }}>
                    {color}
                  </td>
                  {types.map(type => (
                    <td key={`${color}-${type}`} style={{ padding: '16px', textAlign: 'center', borderBottom: '1px solid var(--gov-neutral-200)' }}>
                      <Button color={color} type={type}>
                        Button
                      </Button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};

// ============================================
// Real-World Examples
// ============================================
export const RealWorldExamples = {
  name: 'Real-World Examples',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Common button patterns and use cases in real applications.',
      },
    },
  },
  render: () => (
    <div style={{ fontFamily: 'Roboto, sans-serif', maxWidth: '700px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--gov-neutral-900)', marginBottom: '24px', paddingBottom: '8px', borderBottom: '2px solid var(--gov-neutral-200)' }}>
        Real-World Examples
      </h1>
      <p style={{ fontSize: '14px', color: 'var(--gov-neutral-600)', marginBottom: '32px' }}>
        Common button patterns and use cases in government web applications.
      </p>

      {/* Form actions */}
      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Form Actions</h2>
        <div style={{ 
          padding: '24px', 
          backgroundColor: 'var(--gov-neutral-100)', 
          borderRadius: '8px',
          display: 'flex',
          gap: '12px',
          justifyContent: 'flex-end'
        }}>
          <Button type="base" color="neutral">Cancel</Button>
          <Button color="primary">Save Changes</Button>
        </div>
      </div>

      {/* Destructive action */}
      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Destructive Action Confirmation</h2>
        <div style={{ 
          padding: '24px', 
          backgroundColor: '#fff', 
          borderRadius: '8px',
          border: '1px solid var(--gov-neutral-200)'
        }}>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--gov-neutral-700)' }}>
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <Button type="outlined" color="neutral">Keep Item</Button>
            <Button color="error" leftIcon={<Icon name="x" size="m" color="white" />}>
              Delete
            </Button>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Hero Call-to-Action</h2>
        <div style={{ 
          padding: '48px', 
          background: 'linear-gradient(135deg, var(--gov-primary-600) 0%, var(--gov-primary-800) 100%)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: 'white', marginBottom: '16px', fontSize: '24px' }}>
            Get Started Today
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button size="l" color="secondary">
              Sign Up Free
            </Button>
            <Button size="l" type="outlined" color="neutral">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Status actions */}
      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Status-Based Actions</h2>
        <div className="button-docs-grid">
          <Button color="success" leftIcon={<Icon name="check" size="m" color="white" />}>
            Approve
          </Button>
          <Button color="warning" leftIcon={<Icon name="exclamation-triangle" size="m" color="var(--gov-neutral-950)" />}>
            Review
          </Button>
          <Button color="error" leftIcon={<Icon name="x" size="m" color="white" />}>
            Reject
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="button-docs-group">
        <h2 className="button-docs-group__title">Pagination / Navigation</h2>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="s" type="outlined" leftIcon={<Icon name="chevron-left" size="s" color="var(--gov-primary-700)" />}>
            Previous
          </Button>
          <Button size="s" type="base">1</Button>
          <Button size="s" type="solid">2</Button>
          <Button size="s" type="base">3</Button>
          <span style={{ margin: '0 8px', color: 'var(--gov-neutral-600)', fontWeight: 500 }}>...</span>
          <Button size="s" type="base">10</Button>
          <Button size="s" type="outlined" rightIcon={<Icon name="chevron-right" size="s" color="var(--gov-primary-700)" />}>
            Next
          </Button>
        </div>
      </div>
    </div>
  ),
};
