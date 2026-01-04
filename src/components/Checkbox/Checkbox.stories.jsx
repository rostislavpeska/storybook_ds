import { useState } from 'react';
import { Checkbox } from './Checkbox';

/**
 * # Checkbox
 * 
 * A form checkbox component following the GOV.cz design system.
 * 
 * ## Features
 * - Supports **controlled** and **uncontrolled** modes
 * - Three visual states: unchecked, checked, indeterminate
 * - Three sizes: small, medium, large
 * - Validation with error messages
 * - Helper text support
 * - Full keyboard and screen reader accessibility
 * 
 * ## Usage
 * 
 * ```jsx
 * // Uncontrolled (simplest)
 * <Checkbox name="terms" label="I agree to terms" />
 * 
 * // Controlled
 * const [checked, setChecked] = useState(false);
 * <Checkbox 
 *   checked={checked} 
 *   onChange={(e) => setChecked(e.target.checked)} 
 *   label="Subscribe" 
 * />
 * ```
 */
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
  },
  tags: ['autodocs'],
  argTypes: {
    // Content
    label: {
      control: 'text',
      description: 'Text label displayed next to the checkbox',
      table: { category: 'Content' },
    },
    helperText: {
      control: 'text',
      description: 'Helper text shown below the checkbox',
      table: { category: 'Content' },
    },
    
    // State
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
      table: { category: 'State' },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial checked state (uncontrolled)',
      table: { category: 'State' },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Shows indeterminate (minus) icon',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox',
      table: { category: 'State' },
    },
    
    // Validation
    invalid: {
      control: 'boolean',
      description: 'Shows invalid/error styling',
      table: { category: 'Validation' },
    },
    invalidMessage: {
      control: 'text',
      description: 'Error message shown when invalid',
      table: { category: 'Validation' },
    },
    required: {
      control: 'boolean',
      description: 'Marks field as required',
      table: { category: 'Validation' },
    },
    
    // Appearance
    size: {
      control: 'radio',
      options: ['s', 'm', 'l'],
      description: 'Size variant',
      table: { category: 'Appearance' },
    },
    
    // Events
    onChange: {
      action: 'changed',
      description: 'Called when checked state changes',
      table: { category: 'Events' },
    },
  },
};

// =============================================================================
// PLAYGROUND (Interactive)
// =============================================================================

/**
 * Interactive playground - click the checkbox or use Controls panel.
 * Uses internal state management for full interactivity.
 */
export const Playground = {
  render: function PlaygroundStory(args) {
    const [checked, setChecked] = useState(args.defaultChecked || false);
    
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          args.onChange?.(e);
        }}
      />
    );
  },
  args: {
    label: 'Accept terms and conditions',
    defaultChecked: false,
    disabled: false,
    invalid: false,
    size: 'm',
  },
};

// =============================================================================
// STATES (Static displays)
// =============================================================================

/**
 * Unchecked state - the default state of a checkbox.
 */
export const Unchecked = {
  args: {
    label: 'Unchecked checkbox',
  },
  parameters: { controls: { disable: true } },
};

/**
 * Checked state - indicates the option is selected.
 */
export const Checked = {
  args: {
    label: 'Checked checkbox',
    defaultChecked: true,
  },
  parameters: { controls: { disable: true } },
};

/**
 * Indeterminate state - represents a partial selection.
 */
export const Indeterminate = {
  args: {
    label: 'Indeterminate checkbox',
    indeterminate: true,
  },
  parameters: { controls: { disable: true } },
};

/**
 * Disabled state - the checkbox cannot be interacted with.
 */
export const Disabled = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
  parameters: { controls: { disable: true } },
};

/**
 * Disabled and checked.
 */
export const DisabledChecked = {
  args: {
    label: 'Disabled checked',
    defaultChecked: true,
    disabled: true,
  },
  parameters: { controls: { disable: true } },
};

// =============================================================================
// SIZES
// =============================================================================

/**
 * Small size (16px box).
 */
export const SizeSmall = {
  args: {
    label: 'Small checkbox',
    size: 's',
    defaultChecked: true,
  },
  parameters: { controls: { disable: true } },
};

/**
 * Medium size (20px box) - default.
 */
export const SizeMedium = {
  args: {
    label: 'Medium checkbox',
    size: 'm',
    defaultChecked: true,
  },
  parameters: { controls: { disable: true } },
};

/**
 * Large size (24px box).
 */
export const SizeLarge = {
  args: {
    label: 'Large checkbox',
    size: 'l',
    defaultChecked: true,
  },
  parameters: { controls: { disable: true } },
};

// =============================================================================
// VALIDATION
// =============================================================================

/**
 * Invalid state with error message.
 */
export const Invalid = {
  args: {
    label: 'I agree to the terms',
    invalid: true,
    invalidMessage: 'You must agree to continue',
  },
  parameters: { controls: { disable: true } },
};

/**
 * Required field indicator.
 */
export const Required = {
  args: {
    label: 'This field is required',
    required: true,
  },
  parameters: { controls: { disable: true } },
};

/**
 * With helper text.
 */
export const WithHelperText = {
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'We will send you updates about new features.',
  },
  parameters: { controls: { disable: true } },
};

// =============================================================================
// ALL STATES OVERVIEW (Static matrix)
// =============================================================================

/**
 * Visual overview of all checkbox states.
 * Static display for documentation purposes.
 */
export const AllStates = {
  parameters: {
    controls: { disable: true },
    layout: 'padded',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <section>
        <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600, color: '#374151' }}>
          Unchecked
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox label="Default" />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Invalid" invalid invalidMessage="Error message" />
        </div>
      </section>
      
      <section>
        <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600, color: '#374151' }}>
          Checked
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox label="Default" defaultChecked />
          <Checkbox label="Disabled" defaultChecked disabled />
          <Checkbox label="Invalid" defaultChecked invalid invalidMessage="Error message" />
        </div>
      </section>
      
      <section>
        <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600, color: '#374151' }}>
          Indeterminate
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox label="Default" indeterminate />
          <Checkbox label="Disabled" indeterminate disabled />
        </div>
      </section>
      
      <section>
        <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600, color: '#374151' }}>
          Sizes
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox label="Small (s)" size="s" defaultChecked />
          <Checkbox label="Medium (m)" size="m" defaultChecked />
          <Checkbox label="Large (l)" size="l" defaultChecked />
        </div>
      </section>
    </div>
  ),
};

// =============================================================================
// REAL-WORLD EXAMPLES
// =============================================================================

/**
 * Form group for notification preferences.
 */
export const ExampleFormGroup = {
  parameters: {
    controls: { disable: true },
    layout: 'padded',
  },
  render: () => (
    <fieldset style={{ 
      border: '1px solid #e5e7eb', 
      borderRadius: '8px', 
      padding: '24px',
      maxWidth: '400px',
      margin: 0,
    }}>
      <legend style={{ 
        fontSize: '16px', 
        fontWeight: 600, 
        color: '#111827',
        padding: '0 8px',
      }}>
        Notification Preferences
      </legend>
      <p style={{ margin: '0 0 20px', fontSize: '14px', color: '#6b7280' }}>
        Choose how you would like to receive notifications:
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox
          name="notifications"
          value="email"
          label="Email notifications"
          helperText="Receive updates via email"
          defaultChecked
        />
        <Checkbox
          name="notifications"
          value="sms"
          label="SMS notifications"
          helperText="Receive text messages for important updates"
        />
        <Checkbox
          name="notifications"
          value="push"
          label="Push notifications"
          helperText="Get real-time alerts on your device"
        />
      </div>
    </fieldset>
  ),
};

/**
 * Terms and conditions agreement with validation.
 */
export const ExampleTermsAgreement = {
  parameters: {
    controls: { disable: true },
    layout: 'padded',
  },
  render: function TermsStory() {
    const [agreed, setAgreed] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const showError = submitted && !agreed;

    return (
      <div style={{ 
        border: '1px solid #e5e7eb', 
        borderRadius: '8px', 
        padding: '24px',
        maxWidth: '480px',
      }}>
        <h3 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: 600, color: '#111827' }}>
          Complete Registration
        </h3>
        <div style={{ marginBottom: '20px' }}>
          <Checkbox
            name="terms"
            label="I have read and agree to the Terms of Service and Privacy Policy"
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
              if (e.target.checked) setSubmitted(false);
            }}
            invalid={showError}
            invalidMessage="You must agree to the terms to continue"
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Checkbox
            name="marketing"
            label="I would like to receive marketing emails"
            helperText="You can unsubscribe at any time"
          />
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(true);
            if (agreed) {
              alert('Form submitted!');
            }
          }}
          style={{
            padding: '12px 24px',
            backgroundColor: '#2362a2',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Create Account
        </button>
      </div>
    );
  },
};

/**
 * Select all pattern with indeterminate state.
 */
export const ExampleSelectAll = {
  parameters: {
    controls: { disable: true },
    layout: 'padded',
  },
  render: function SelectAllStory() {
    const [items, setItems] = useState([
      { id: 'item1', label: 'Item 1', checked: true },
      { id: 'item2', label: 'Item 2', checked: false },
      { id: 'item3', label: 'Item 3', checked: true },
    ]);

    const allChecked = items.every((item) => item.checked);
    const someChecked = items.some((item) => item.checked);
    const indeterminate = someChecked && !allChecked;

    const handleSelectAll = () => {
      setItems(items.map((item) => ({ ...item, checked: !allChecked })));
    };

    const handleItemChange = (id) => {
      setItems(items.map((item) => 
        item.id === id ? { ...item, checked: !item.checked } : item
      ));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Checkbox
          label="Select all"
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={handleSelectAll}
        />
        <div style={{ 
          marginLeft: '32px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px',
          borderLeft: '2px solid #e5e7eb',
          paddingLeft: '16px',
        }}>
          {items.map((item) => (
            <Checkbox
              key={item.id}
              label={item.label}
              checked={item.checked}
              onChange={() => handleItemChange(item.id)}
            />
          ))}
        </div>
      </div>
    );
  },
};
