import { useState } from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
## GOV.cz Checkbox Component

A form checkbox component following the GOV.cz design system. Supports checked, unchecked, and indeterminate states with error validation.

### Features
- **Three states**: Unchecked, Checked, Indeterminate
- **Three sizes**: Small (s), Medium (m), Large (l)
- **Validation states**: Default, Error
- **Accessibility**: Full keyboard navigation, ARIA attributes
- **Helper text**: Optional descriptive text below the checkbox
- **Error messages**: Validation feedback with icon

### Usage
\`\`\`jsx
import { Checkbox } from './components/Checkbox';

// Basic usage
<Checkbox label="Accept terms and conditions" />

// Controlled checkbox
const [checked, setChecked] = useState(false);
<Checkbox 
  label="Subscribe to newsletter"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>

// With error validation
<Checkbox 
  label="Required field"
  error
  errorMessage="You must accept the terms"
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed next to the checkbox',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state (partially checked)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed when in error state',
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'Size variant',
    },
  },
};

// Default Story
export const Default = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    disabled: false,
    error: false,
  },
};

// Interactive/Controlled Story
export const Interactive = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label="Click to toggle this checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        helperText={checked ? 'Checkbox is checked' : 'Checkbox is unchecked'}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'An interactive checkbox that demonstrates controlled state management.',
      },
    },
  },
};

// All States
export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>Unchecked States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Checkbox label="Default unchecked" />
          <Checkbox label="Disabled unchecked" disabled />
          <Checkbox label="Error unchecked" error errorMessage="This field is required" />
        </div>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>Checked States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Checkbox label="Default checked" checked />
          <Checkbox label="Disabled checked" checked disabled />
          <Checkbox label="Error checked" checked error errorMessage="Invalid selection" />
        </div>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>Indeterminate States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Checkbox label="Indeterminate" indeterminate />
          <Checkbox label="Indeterminate disabled" indeterminate disabled />
          <Checkbox label="Indeterminate error" indeterminate error errorMessage="Mixed state not allowed" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All checkbox states: unchecked, checked, and indeterminate with default, disabled, and error variants.',
      },
    },
  },
};

// Size Variants
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox size="s" label="Small checkbox (size: s)" checked />
        <Checkbox size="m" label="Medium checkbox (size: m) - Default" checked />
        <Checkbox size="l" label="Large checkbox (size: l)" checked />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox size="s" label="Small unchecked" />
        <Checkbox size="m" label="Medium unchecked" />
        <Checkbox size="l" label="Large unchecked" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three size variants: small (s), medium (m), and large (l).',
      },
    },
  },
};

// With Helper Text
export const WithHelperText = {
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'We will send you updates about new features and promotions.',
  },
};

// With Error Message
export const WithError = {
  args: {
    label: 'I agree to the terms and conditions',
    error: true,
    errorMessage: 'You must agree to the terms and conditions to continue.',
  },
};

// Indeterminate State
export const Indeterminate = {
  render: () => {
    const [items, setItems] = useState([
      { id: 1, label: 'Option 1', checked: true },
      { id: 2, label: 'Option 2', checked: false },
      { id: 3, label: 'Option 3', checked: true },
    ]);

    const allChecked = items.every((item) => item.checked);
    const someChecked = items.some((item) => item.checked);
    const indeterminate = someChecked && !allChecked;

    const handleParentChange = () => {
      const newValue = !allChecked;
      setItems(items.map((item) => ({ ...item, checked: newValue })));
    };

    const handleChildChange = (id) => {
      setItems(items.map((item) => 
        item.id === id ? { ...item, checked: !item.checked } : item
      ));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Checkbox
          label="Select all options"
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={handleParentChange}
        />
        <div style={{ marginLeft: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {items.map((item) => (
            <Checkbox
              key={item.id}
              label={item.label}
              checked={item.checked}
              onChange={() => handleChildChange(item.id)}
            />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Indeterminate state is useful for "select all" checkboxes when only some children are selected.',
      },
    },
  },
};

// Form Group Example
export const FormGroup = {
  render: () => {
    const [values, setValues] = useState({
      email: true,
      sms: false,
      push: false,
    });

    const handleChange = (key) => (e) => {
      setValues({ ...values, [key]: e.target.checked });
    };

    return (
      <div style={{ 
        padding: '24px', 
        border: '1px solid #e5e5e5', 
        borderRadius: '8px',
        maxWidth: '400px',
      }}>
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '500',
          color: '#262626',
        }}>
          Notification Preferences
        </h3>
        <p style={{ 
          margin: '0 0 20px 0', 
          fontSize: '14px', 
          color: '#666',
        }}>
          Choose how you would like to receive notifications:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Checkbox
            label="Email notifications"
            helperText="Receive updates via email"
            checked={values.email}
            onChange={handleChange('email')}
          />
          <Checkbox
            label="SMS notifications"
            helperText="Receive text messages for important updates"
            checked={values.sms}
            onChange={handleChange('sms')}
          />
          <Checkbox
            label="Push notifications"
            helperText="Get real-time alerts on your device"
            checked={values.push}
            onChange={handleChange('push')}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of multiple checkboxes used in a form group for notification preferences.',
      },
    },
  },
};

// Terms and Conditions Example
export const TermsExample = {
  render: () => {
    const [agreed, setAgreed] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const showError = submitted && !agreed;

    return (
      <div style={{ 
        padding: '24px', 
        border: '1px solid #e5e5e5', 
        borderRadius: '8px',
        maxWidth: '500px',
      }}>
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '18px', 
          fontWeight: '500',
          color: '#262626',
        }}>
          Complete Registration
        </h3>
        <div style={{ marginBottom: '20px' }}>
          <Checkbox
            label="I have read and agree to the Terms of Service and Privacy Policy"
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
              if (e.target.checked) setSubmitted(false);
            }}
            error={showError}
            errorMessage="You must agree to the terms to continue"
          />
        </div>
        <button
          onClick={() => setSubmitted(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: agreed ? '#2362a2' : '#e5e5e5',
            color: agreed ? '#fff' : '#666',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: agreed ? 'pointer' : 'not-allowed',
          }}
        >
          {agreed ? 'Continue' : 'Please agree to terms'}
        </button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of a terms and conditions checkbox with validation.',
      },
    },
  },
};

// Disabled Examples
export const DisabledStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" checked disabled />
      <Checkbox label="Disabled indeterminate" indeterminate disabled />
      <Checkbox 
        label="Disabled with helper text" 
        disabled 
        helperText="This option is not available at this time."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled checkboxes in various states.',
      },
    },
  },
};

// Complete Matrix
export const CompleteMatrix = {
  render: () => {
    const sizes = ['s', 'm', 'l'];
    const states = [
      { name: 'Default', props: {} },
      { name: 'Checked', props: { checked: true } },
      { name: 'Indeterminate', props: { indeterminate: true } },
      { name: 'Disabled', props: { disabled: true } },
      { name: 'Disabled Checked', props: { disabled: true, checked: true } },
      { name: 'Error', props: { error: true } },
      { name: 'Error Checked', props: { error: true, checked: true } },
    ];

    return (
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ 
                padding: '12px', 
                textAlign: 'left', 
                borderBottom: '2px solid #e5e5e5',
                fontSize: '14px',
                fontWeight: '600',
                color: '#262626',
              }}>
                State
              </th>
              {sizes.map((size) => (
                <th 
                  key={size}
                  style={{ 
                    padding: '12px', 
                    textAlign: 'center', 
                    borderBottom: '2px solid #e5e5e5',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#262626',
                  }}
                >
                  Size {size.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {states.map((state) => (
              <tr key={state.name}>
                <td style={{ 
                  padding: '16px 12px', 
                  borderBottom: '1px solid #f0f0f0',
                  fontSize: '14px',
                  color: '#4f4f4f',
                }}>
                  {state.name}
                </td>
                {sizes.map((size) => (
                  <td 
                    key={`${state.name}-${size}`}
                    style={{ 
                      padding: '16px 12px', 
                      textAlign: 'center',
                      borderBottom: '1px solid #f0f0f0',
                    }}
                  >
                    <div style={{ display: 'inline-block' }}>
                      <Checkbox 
                        size={size} 
                        label="Label"
                        {...state.props} 
                      />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete matrix showing all checkbox variants across sizes and states.',
      },
    },
  },
};

// Long Label Example
export const LongLabels = {
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox 
        label="I acknowledge that I have read and understood all the terms and conditions, privacy policy, and data processing agreement that govern the use of this service."
      />
      <Checkbox 
        label="I consent to receiving marketing communications including newsletters, promotional offers, and product updates via email."
        helperText="You can unsubscribe at any time by clicking the link in our emails."
      />
      <Checkbox 
        label="Short label"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes with long labels that wrap to multiple lines.',
      },
    },
  },
};

