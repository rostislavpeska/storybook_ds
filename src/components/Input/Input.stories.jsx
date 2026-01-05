import { useState } from 'react';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
The **Input** component provides text input fields following the GOV.cz design system.

## Features
- **Single-line** and **multi-line** (textarea) modes
- **Controlled** and **uncontrolled** modes
- **Validation states** with error messages
- **Helper text** for guidance
- **Size variants** (s, m, l)
- **Icon support** (left and right)
- **Character count** display
- **Accessibility** compliant (WCAG 2.1 AA)

## Usage

\`\`\`jsx
// Basic text input
<Input label="Name" name="firstName" />

// With validation
<Input 
  label="E-mail" 
  type="email" 
  required 
  invalid={!isValidEmail} 
  invalidMessage="Enter a valid email" 
/>

// Textarea (multiline)
<Input 
  label="Description" 
  multiline 
  rows={4} 
  placeholder="Describe your experience..." 
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Label text' },
    placeholder: { control: 'text', description: 'Placeholder text' },
    helperText: { control: 'text', description: 'Helper text below input' },
    invalidMessage: { control: 'text', description: 'Error message' },
    type: {
      control: 'select',
      options: ['text', 'email', 'tel', 'number', 'password', 'url'],
    },
    size: { control: 'radio', options: ['s', 'm', 'l'] },
    multiline: { control: 'boolean' },
    rows: { control: 'number', if: { arg: 'multiline' } },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    required: { control: 'boolean' },
    invalid: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    showCharCount: { control: 'boolean' },
    maxLength: { control: 'number' },
  },
};

// ============================================
// Playground (Interactive)
// ============================================
export const Playground = {
  args: {
    label: 'Full name',
    placeholder: 'Enter your name',
    helperText: 'Enter your full name including surname',
    size: 'm',
    required: false,
    disabled: false,
    invalid: false,
    multiline: false,
  },
};

// ============================================
// Text Input Variants
// ============================================
export const TextInput = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Input 
        label="First name" 
        name="firstName" 
        placeholder="Enter first name" 
      />
      <Input 
        label="Last name" 
        name="lastName" 
        placeholder="Enter last name" 
        required 
      />
      <Input 
        label="E-mail" 
        name="email" 
        type="email" 
        placeholder="your@email.com" 
        helperText="We will send confirmation to this email" 
      />
      <Input 
        label="Phone" 
        name="phone" 
        type="tel" 
        placeholder="+420 XXX XXX XXX" 
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Various text input types for form fields.' } },
  },
};

// ============================================
// Textarea (Multiline)
// ============================================
export const Textarea = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px' }}>
      <Input 
        label="Education and skills description" 
        name="education"
        multiline 
        rows={3}
        placeholder="Describe your education, certifications and skills..."
        helperText="Provide relevant information"
      />
      <Input 
        label="Justification for requested requalification" 
        name="justification"
        multiline 
        rows={5}
        placeholder="Explain how requalification will help your employment..."
        required
      />
      <Input 
        label="Note (with character limit)" 
        name="note"
        multiline 
        rows={3}
        maxLength={200}
        showCharCount
        placeholder="Max 200 characters..."
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Multi-line text areas for longer content.' } },
  },
};

// ============================================
// Size Variants
// ============================================
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Input 
        label="Small (s)" 
        size="s" 
        placeholder="Small field" 
      />
      <Input 
        label="Medium (m) - Default" 
        size="m" 
        placeholder="Medium field" 
      />
      <Input 
        label="Large (l)" 
        size="l" 
        placeholder="Large field" 
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Three size variants for different contexts.' } },
  },
};

// ============================================
// States
// ============================================
export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Input 
        label="Default" 
        placeholder="Enter text..." 
      />
      <Input 
        label="With Value" 
        defaultValue="John Smith" 
      />
      <Input 
        label="Disabled" 
        placeholder="Cannot edit" 
        disabled 
      />
      <Input 
        label="Read Only" 
        defaultValue="Read only" 
        readOnly 
      />
      <Input 
        label="Required" 
        placeholder="Required field" 
        required 
      />
      <Input 
        label="Invalid" 
        defaultValue="invalid-email" 
        invalid 
        invalidMessage="Enter a valid email address" 
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Different input states.' } },
  },
};

// ============================================
// With Helper Text
// ============================================
export const WithHelperText = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Input 
        label="Birth number" 
        name="birthNumber"
        placeholder="XXXXXX/XXXX"
        helperText="Format: XXXXXX/XXXX (6 digits/4 digits)"
      />
      <Input 
        label="Postal code" 
        name="postalCode"
        placeholder="12345"
        helperText="5 digits without spaces"
        maxLength={5}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// ============================================
// Invalid States
// ============================================
export const Invalid = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Input 
        label="E-mail" 
        type="email"
        defaultValue="neplatny-email"
        invalid 
        invalidMessage="Enter a valid email address" 
      />
      <Input 
        label="Required field" 
        required
        invalid 
        invalidMessage="This field is required" 
      />
      <Input 
        label="Justification" 
        multiline
        rows={3}
        invalid 
        invalidMessage="Text must contain at least 50 characters" 
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Error states with validation messages.' } },
  },
};

// ============================================
// Input Types
// ============================================
export const InputTypes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Input 
        label="Text" 
        type="text"
        placeholder="Regular text"
      />
      <Input 
        label="E-mail" 
        type="email"
        placeholder="your@email.com"
      />
      <Input 
        label="Phone" 
        type="tel"
        placeholder="+420 XXX XXX XXX"
      />
      <Input 
        label="Number" 
        type="number"
        placeholder="0"
      />
      <Input 
        label="Heslo" 
        type="password"
        placeholder="••••••••"
      />
      <Input 
        label="URL" 
        type="url"
        placeholder="https://example.com"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Different HTML input types.' } },
  },
};

// ============================================
// Character Count
// ============================================
export const CharacterCount = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ maxWidth: '500px' }}>
        <Input 
          label="Note (max 200 characters)" 
          multiline
          rows={4}
          maxLength={200}
          showCharCount
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write a note..."
        />
      </div>
    );
  },
  parameters: {
    docs: { description: { story: 'Textarea with character count display.' } },
  },
};

// ============================================
// Form Example
// ============================================
export const FormExample = {
  render: () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      description: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (field) => (e) => {
      setFormData({ ...formData, [field]: e.target.value });
      if (errors[field]) {
        setErrors({ ...errors, [field]: null });
      }
    };

    const validate = () => {
      const newErrors = {};
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    return (
      <div style={{ maxWidth: '500px' }}>
        <h3 style={{ marginBottom: '24px', color: '#1e5086' }}>Contact information</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Input 
              label="First name" 
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange('firstName')}
              invalid={!!errors.firstName}
              invalidMessage={errors.firstName}
            />
            <Input 
              label="Last name" 
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange('lastName')}
              invalid={!!errors.lastName}
              invalidMessage={errors.lastName}
            />
          </div>
          <Input 
            label="E-mail" 
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange('email')}
            invalid={!!errors.email}
            invalidMessage={errors.email}
            helperText="We will send confirmation to this email"
          />
          <Input 
            label="Phone" 
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange('phone')}
            helperText="Optional"
          />
          <Input 
            label="Note" 
            name="description"
            multiline
            rows={3}
            value={formData.description}
            onChange={handleChange('description')}
            maxLength={500}
            showCharCount
          />
          <button 
            onClick={validate}
            style={{
              padding: '12px 24px',
              backgroundColor: '#2362a2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            Validate form
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: { description: { story: 'Complete form example with validation.' } },
  },
};

// ============================================
// All States Matrix
// ============================================
export const AllStates = {
  render: () => (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e7e7e7', color: '#262626' }}>State</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e7e7e7', color: '#262626' }}>Text Input</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e7e7e7', color: '#262626' }}>Textarea</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500, color: '#262626' }}>Default</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" placeholder="Placeholder" />
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" multiline rows={2} placeholder="Placeholder" />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500, color: '#262626' }}>With Value</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" defaultValue="John Smith" />
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" multiline rows={2} defaultValue="Text description..." />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500, color: '#262626' }}>Required</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" required placeholder="Required" />
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" multiline rows={2} required placeholder="Required" />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500, color: '#262626' }}>Disabled</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" disabled defaultValue="Cannot edit" />
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" multiline rows={2} disabled defaultValue="Cannot edit" />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500, color: '#262626' }}>Invalid</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" invalid invalidMessage="Error message" defaultValue="Invalid value" />
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" multiline rows={2} invalid invalidMessage="Error message" defaultValue="Invalid text" />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', fontWeight: 500, color: '#262626' }}>With Helper</td>
            <td style={{ padding: '12px' }}>
              <Input label="Label" helperText="Field helper text" placeholder="Placeholder" />
            </td>
            <td style={{ padding: '12px' }}>
              <Input label="Label" multiline rows={2} helperText="Field helper text" placeholder="Placeholder" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Complete matrix of all input states for both text input and textarea.' } },
  },
};


