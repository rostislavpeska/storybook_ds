import { useState } from 'react';
import { Radio, RadioGroup } from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  subcomponents: { RadioGroup },
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
The **Radio** component provides radio button inputs following the GOV.cz design system.

## Components
- **RadioGroup** - Container for multiple radio buttons
- **Radio** - Individual radio button

## Features
- **Controlled** and **uncontrolled** modes
- **Horizontal** and **vertical** layouts
- **Size variants** (s, m, l)
- **Validation states** with error messages
- **Helper text** for individual options
- **Accessibility** compliant (WCAG 2.1 AA)

## Usage

\`\`\`jsx
// With RadioGroup (recommended)
<RadioGroup 
  name="gender" 
  label="Gender" 
  value={gender} 
  onChange={(e) => setGender(e.target.value)}
>
  <Radio value="male" label="Male" />
  <Radio value="female" label="Female" />
</RadioGroup>

// Standalone (less common)
<Radio 
  name="option" 
  value="a" 
  label="Option A" 
  checked={selected === 'a'} 
  onChange={(e) => setSelected(e.target.value)} 
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Radio label' },
    value: { control: 'text', description: 'Radio value' },
    size: { control: 'radio', options: ['s', 'm', 'l'] },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    helperText: { control: 'text' },
  },
};

// ============================================
// Playground (Interactive RadioGroup)
// ============================================
export const Playground = {
  render: (args) => {
    const [value, setValue] = useState('option1');
    return (
      <RadioGroup
        name="playground"
        label={args.label || 'Select option'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        direction={args.direction}
        disabled={args.groupDisabled}
        invalid={args.groupInvalid}
        invalidMessage={args.invalidMessage}
        helperText={args.helperText}
        required={args.required}
      >
        <Radio value="option1" label="Option 1" size={args.size} />
        <Radio value="option2" label="Option 2" size={args.size} />
        <Radio value="option3" label="Option 3" size={args.size} />
      </RadioGroup>
    );
  },
  args: {
    label: 'Select option',
    direction: 'vertical',
    size: 'm',
    required: false,
    groupDisabled: false,
    groupInvalid: false,
    invalidMessage: '',
    helperText: '',
  },
  argTypes: {
    direction: { control: 'radio', options: ['vertical', 'horizontal'] },
    groupDisabled: { control: 'boolean', name: 'Disabled (group)' },
    groupInvalid: { control: 'boolean', name: 'Invalid (group)' },
    required: { control: 'boolean' },
  },
};

// ============================================
// Basic RadioGroup
// ============================================
export const BasicRadioGroup = {
  render: () => {
    const [value, setValue] = useState('applicant');
    return (
      <RadioGroup
        name="applicantType"
        label="Applicant type"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      >
        <Radio value="applicant" label="Job applicant" />
        <Radio value="interested" label="Interested in employment" />
      </RadioGroup>
    );
  },
  parameters: {
    docs: { description: { story: 'Basic radio group for applicant type selection.' } },
  },
};

// ============================================
// Gender Selection
// ============================================
export const GenderSelection = {
  render: () => {
    const [gender, setGender] = useState('');
    return (
      <RadioGroup
        name="gender"
        label="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        direction="horizontal"
        required
      >
        <Radio value="male" label="Male" />
        <Radio value="female" label="Female" />
      </RadioGroup>
    );
  },
  parameters: {
    docs: { description: { story: 'Horizontal radio group for gender selection.' } },
  },
};

// ============================================
// Horizontal Layout
// ============================================
export const HorizontalLayout = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <RadioGroup
        name="horizontal"
        label="Horizontal layout"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        direction="horizontal"
      >
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    );
  },
  parameters: {
    controls: { disable: true },
  },
};

// ============================================
// Vertical Layout
// ============================================
export const VerticalLayout = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <RadioGroup
        name="vertical"
        label="Vertical layout"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        direction="vertical"
      >
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    );
  },
  parameters: {
    controls: { disable: true },
  },
};

// ============================================
// Size Variants
// ============================================
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <RadioGroup name="size-s" label="Small (s)" direction="horizontal">
        <Radio value="a" label="Option A" size="s" defaultChecked />
        <Radio value="b" label="Option B" size="s" />
      </RadioGroup>
      
      <RadioGroup name="size-m" label="Medium (m) - Default" direction="horizontal">
        <Radio value="a" label="Option A" size="m" defaultChecked />
        <Radio value="b" label="Option B" size="m" />
      </RadioGroup>
      
      <RadioGroup name="size-l" label="Large (l)" direction="horizontal">
        <Radio value="a" label="Option A" size="l" defaultChecked />
        <Radio value="b" label="Option B" size="l" />
      </RadioGroup>
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <RadioGroup name="default" label="Default" direction="horizontal">
        <Radio value="a" label="Unselected" />
        <Radio value="b" label="Selected" defaultChecked />
      </RadioGroup>
      
      <RadioGroup name="disabled" label="Disabled" direction="horizontal" disabled>
        <Radio value="a" label="Disabled unselected" />
        <Radio value="b" label="Disabled selected" defaultChecked />
      </RadioGroup>
      
      <RadioGroup name="invalid" label="Invalid" direction="horizontal" invalid invalidMessage="Select one of the options">
        <Radio value="a" label="Invalid option A" />
        <Radio value="b" label="Invalid option B" />
      </RadioGroup>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Different radio group states.' } },
  },
};

// ============================================
// With Helper Text
// ============================================
export const WithHelperText = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <RadioGroup
        name="plan"
        label="Select plan"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="You can change the plan anytime"
      >
        <Radio 
          value="basic" 
          label="Basic" 
          helperText="For individuals, limited features"
        />
        <Radio 
          value="standard" 
          label="Standard" 
          helperText="For small teams, full features"
        />
        <Radio 
          value="premium" 
          label="Premium" 
          helperText="For businesses, priority support"
        />
      </RadioGroup>
    );
  },
  parameters: {
    docs: { description: { story: 'Radio options with descriptive helper text.' } },
  },
};

// ============================================
// Invalid State
// ============================================
export const Invalid = {
  render: () => (
    <RadioGroup
      name="required-field"
      label="Required choice"
      invalid
      invalidMessage="This field is required. Select one of the options."
      required
    >
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Error state with validation message.' } },
  },
};

// ============================================
// Disabled State
// ============================================
export const Disabled = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <RadioGroup name="disabled-group" label="Entire group disabled" disabled>
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" defaultChecked />
        <Radio value="c" label="Option C" />
      </RadioGroup>
      
      <RadioGroup name="partial-disabled" label="Some options disabled">
        <Radio value="a" label="Available option" />
        <Radio value="b" label="Unavailable option" disabled />
        <Radio value="c" label="Another available" />
      </RadioGroup>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// ============================================
// Form Example
// ============================================
export const FormExample = {
  render: () => {
    const [formData, setFormData] = useState({
      applicantType: '',
      gender: '',
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
      if (!formData.applicantType) newErrors.applicantType = 'Select applicant type';
      if (!formData.gender) newErrors.gender = 'Select gender';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    return (
      <div style={{ maxWidth: '500px' }}>
        <h3 style={{ marginBottom: '24px', color: '#1e5086' }}>A. Applicant</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <RadioGroup
            name="applicantType"
            label="Applicant type"
            value={formData.applicantType}
            onChange={handleChange('applicantType')}
            invalid={!!errors.applicantType}
            invalidMessage={errors.applicantType}
            required
          >
            <Radio value="uchazeč" label="Uchazeč o zaměstnání" />
            <Radio value="zájemce" label="Zájemce o zaměstnání" />
          </RadioGroup>

          <RadioGroup
            name="gender"
            label="Gender"
            value={formData.gender}
            onChange={handleChange('gender')}
            direction="horizontal"
            invalid={!!errors.gender}
            invalidMessage={errors.gender}
            required
          >
            <Radio value="male" label="Male" />
            <Radio value="female" label="Female" />
          </RadioGroup>

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
              alignSelf: 'flex-start',
            }}
          >
            Validate form
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: { description: { story: 'Form example matching the GOV.cz requalification form structure.' } },
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
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e7e7e7', color: '#262626' }}>Unchecked</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e7e7e7', color: '#262626' }}>Checked</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500, color: '#262626' }}>Default</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Radio name="matrix-default" value="unchecked" label="Unchecked" />
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Radio name="matrix-default" value="checked" label="Checked" defaultChecked />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500, color: '#262626' }}>Disabled</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Radio name="matrix-disabled" value="unchecked" label="Disabled" disabled />
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Radio name="matrix-disabled-checked" value="checked" label="Disabled Checked" disabled defaultChecked />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', fontWeight: 500, color: '#262626' }}>Invalid</td>
            <td style={{ padding: '12px' }}>
              <Radio name="matrix-invalid" value="unchecked" label="Invalid" invalid />
            </td>
            <td style={{ padding: '12px' }}>
              <Radio name="matrix-invalid-checked" value="checked" label="Invalid Checked" invalid defaultChecked />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Complete matrix of all radio states.' } },
  },
};


