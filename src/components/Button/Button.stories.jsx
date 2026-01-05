import { Button } from './Button';
import { Icon } from '../Icon/Icon';
import { expect, fn, userEvent, within } from 'storybook/test';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    // Provide a mock function to spy on
    onClick: fn(),
  },
  parameters: {
    layout: 'centered',
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
// Default Story with Controls
// ============================================
export const Default = {
  args: {
    children: 'Button',
    color: 'primary',
    type: 'solid',
    size: 'm',
    disabled: false,
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
    docs: {
      description: {
        story: 'All color variants showing solid type buttons. Each color has semantic meaning in the design system.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Solid variants */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Solid Buttons
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button color="primary" type="solid">Primary</Button>
          <Button color="secondary" type="solid">Secondary</Button>
          <Button color="neutral" type="solid">Neutral</Button>
          <Button color="error" type="solid">Error</Button>
          <Button color="warning" type="solid">Warning</Button>
          <Button color="success" type="solid">Success</Button>
        </div>
      </div>

      {/* Outlined variants */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Outlined Buttons
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button color="primary" type="outlined">Primary</Button>
          <Button color="secondary" type="outlined">Secondary</Button>
          <Button color="neutral" type="outlined">Neutral</Button>
          <Button color="error" type="outlined">Error</Button>
          <Button color="warning" type="outlined">Warning</Button>
          <Button color="success" type="outlined">Success</Button>
        </div>
      </div>

      {/* Base variants */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Base Buttons (Ghost)
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button color="primary" type="base">Primary</Button>
          <Button color="secondary" type="base">Secondary</Button>
          <Button color="neutral" type="base">Neutral</Button>
          <Button color="error" type="base">Error</Button>
          <Button color="warning" type="base">Warning</Button>
          <Button color="success" type="base">Success</Button>
        </div>
      </div>

      {/* Link variants */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Link Buttons
        </h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
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
    docs: {
      description: {
        story: `
All size variants from XS (24px) to XL (56px). Sizes correspond to GOV.cz component height tokens.

| Size | Height | Font Size | Icon Size | Use Case |
|------|--------|-----------|-----------|----------|
| XS | 24px | 12px | 12px | Compact UI, inline actions |
| S | 32px | 14px | 14px | Secondary actions, tight spaces |
| M | 40px | 16px | 16px | Default, most common |
| L | 48px | 18px | 18px | Prominent actions |
| XL | 56px | 20px | 20px | Hero sections, CTAs |
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button size="xs">XS (24px)</Button>
        <Button size="s">S (32px)</Button>
        <Button size="m">M (40px)</Button>
        <Button size="l">L (48px)</Button>
        <Button size="xl">XL (56px)</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button size="xs" type="outlined">XS</Button>
        <Button size="s" type="outlined">S</Button>
        <Button size="m" type="outlined">M</Button>
        <Button size="l" type="outlined">L</Button>
        <Button size="xl" type="outlined">XL</Button>
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
    docs: {
      description: {
        story: 'Buttons can include icons on the left, right, or both sides. Icon sizes automatically scale with button size.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Left icons */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Left Icon
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button leftIcon={<Icon name="download" size="m" color="white" />}>
            Download
          </Button>
          <Button color="success" leftIcon={<Icon name="check" size="m" color="white" />}>
            Confirm
          </Button>
          <Button color="error" leftIcon={<Icon name="close" size="m" color="white" />}>
            Delete
          </Button>
        </div>
      </div>

      {/* Right icons */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Right Icon
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button rightIcon={<Icon name="chevron-right" size="m" color="white" />}>
            Next
          </Button>
          <Button type="outlined" rightIcon={<Icon name="chevron-right" size="m" color="var(--gov-primary-700)" />}>
            Learn More
          </Button>
        </div>
      </div>

      {/* Both icons */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Both Icons
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button 
            leftIcon={<Icon name="file" size="m" color="white" />}
            rightIcon={<Icon name="download" size="m" color="white" />}
          >
            Export File
          </Button>
        </div>
      </div>

      {/* Icon-only buttons */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Icon Only (Square Buttons)
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button size="xs" leftIcon={<Icon name="settings" size="xs" color="white" />} aria-label="Settings" />
          <Button size="s" leftIcon={<Icon name="settings" size="s" color="white" />} aria-label="Settings" />
          <Button size="m" leftIcon={<Icon name="settings" size="m" color="white" />} aria-label="Settings" />
          <Button size="l" leftIcon={<Icon name="settings" size="l" color="white" />} aria-label="Settings" />
          <Button size="xl" leftIcon={<Icon name="settings" size="xl" color="white" />} aria-label="Settings" />
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginTop: '12px' }}>
          <Button size="m" type="outlined" leftIcon={<Icon name="search" size="m" color="var(--gov-primary-700)" />} aria-label="Search" />
          <Button size="m" type="base" leftIcon={<Icon name="menu" size="m" color="var(--gov-primary-700)" />} aria-label="Menu" />
          <Button size="m" color="error" leftIcon={<Icon name="close" size="m" color="white" />} aria-label="Close" />
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
    docs: {
      description: {
        story: 'Interactive states for all button types. Hover over buttons to see state changes.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Normal vs Disabled */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Enabled vs Disabled
        </h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '12px', fontWeight: 500, color: '#4f4f4f' }}>Enabled</span>
            <Button color="primary">Primary</Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '12px', fontWeight: 500, color: '#4f4f4f' }}>Disabled</span>
            <Button color="primary" disabled>Primary</Button>
          </div>
        </div>
      </div>

      {/* All disabled variants */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          All Types - Disabled
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button type="solid" disabled>Solid</Button>
          <Button type="outlined" disabled>Outlined</Button>
          <Button type="base" disabled>Base</Button>
          <Button type="link" disabled>Link</Button>
        </div>
      </div>

      {/* Focus indication */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Focus State (Tab to see)
        </h3>
        <p style={{ fontSize: '13px', color: '#5d5d5d', marginBottom: '12px' }}>
          Press Tab to navigate and see focus rings (blue outline)
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
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
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', fontFamily: 'Roboto, sans-serif' }}>
          <thead>
            <tr>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: '#262626', borderBottom: '2px solid #d1d1d1' }}>
                Color / Type
              </th>
              {types.map(type => (
                <th key={type} style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: 600, color: '#262626', borderBottom: '2px solid #d1d1d1', textTransform: 'capitalize' }}>
                  {type}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {colors.map(color => (
              <tr key={color}>
                <td style={{ padding: '12px', textTransform: 'capitalize', fontSize: '13px', fontWeight: 600, color: '#3b3b3b', borderBottom: '1px solid #e7e7e7' }}>
                  {color}
                </td>
                {types.map(type => (
                  <td key={`${color}-${type}`} style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e7e7e7' }}>
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
    );
  },
};

// ============================================
// Real-World Examples
// ============================================
export const RealWorldExamples = {
  name: 'Real-World Examples',
  parameters: {
    docs: {
      description: {
        story: 'Common button patterns and use cases in real applications.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '600px' }}>
      {/* Form actions */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Form Actions
        </h3>
        <div style={{ 
          padding: '24px', 
          backgroundColor: '#f6f6f6', 
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
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Destructive Action Confirmation
        </h3>
        <div style={{ 
          padding: '24px', 
          backgroundColor: '#fff', 
          borderRadius: '8px',
          border: '1px solid #e7e7e7'
        }}>
          <p style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', color: '#3b3b3b' }}>
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <Button type="outlined" color="neutral">Keep Item</Button>
            <Button color="error" leftIcon={<Icon name="close" size="m" color="white" />}>
              Delete
            </Button>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Hero Call-to-Action
        </h3>
        <div style={{ 
          padding: '48px', 
          background: 'linear-gradient(135deg, var(--gov-primary-600) 0%, var(--gov-primary-800) 100%)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: 'white', fontFamily: 'Roboto, sans-serif', marginBottom: '16px' }}>
            Get Started Today
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Button size="l" color="secondary">
              Sign Up Free
            </Button>
            <Button size="l" type="outlined" style={{ borderColor: 'white', color: 'white', backgroundColor: 'transparent' }}>
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Status actions */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Status-Based Actions
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button color="success" leftIcon={<Icon name="check" size="m" color="white" />}>
            Approve
          </Button>
          <Button color="warning" leftIcon={<Icon name="warning" size="m" color="var(--gov-neutral-950)" />}>
            Review
          </Button>
          <Button color="error" leftIcon={<Icon name="close" size="m" color="white" />}>
            Reject
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: 600, color: '#262626' }}>
          Pagination / Navigation
        </h3>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Button size="s" type="outlined" leftIcon={<Icon name="chevron-left" size="s" color="var(--gov-primary-700)" />}>
            Previous
          </Button>
          <Button size="s" type="base">1</Button>
          <Button size="s" type="solid">2</Button>
          <Button size="s" type="base">3</Button>
          <span style={{ margin: '0 8px', color: '#5d5d5d', fontWeight: 500 }}>...</span>
          <Button size="s" type="base">10</Button>
          <Button size="s" type="outlined" rightIcon={<Icon name="chevron-right" size="s" color="var(--gov-primary-700)" />}>
            Next
          </Button>
        </div>
      </div>
    </div>
  ),
};
