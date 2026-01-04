import { useState } from 'react';
import { Select } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
The **Select** component provides dropdown selection following the GOV.cz design system.

## Features
- **Controlled** and **uncontrolled** modes
- **Option groups** support
- **Size variants** (s, m, l)
- **Validation states** with error messages
- **Helper text** for guidance
- **Placeholder** option
- **Accessibility** compliant (WCAG 2.1 AA)

## Usage

\`\`\`jsx
// Basic select
<Select 
  label="Kraj" 
  name="region"
  placeholder="-- Vyberte kraj --"
  options={[
    { value: 'praha', label: 'Praha' },
    { value: 'brno', label: 'Jihomoravský kraj' },
    { value: 'ostrava', label: 'Moravskoslezský kraj' },
  ]}
/>

// With option groups
<Select 
  label="Město"
  options={[
    { 
      group: 'Čechy',
      options: [
        { value: 'praha', label: 'Praha' },
        { value: 'plzen', label: 'Plzeň' },
      ]
    },
    { 
      group: 'Morava',
      options: [
        { value: 'brno', label: 'Brno' },
        { value: 'ostrava', label: 'Ostrava' },
      ]
    },
  ]}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Label text' },
    placeholder: { control: 'text', description: 'Placeholder option' },
    helperText: { control: 'text', description: 'Helper text below select' },
    invalidMessage: { control: 'text', description: 'Error message' },
    size: { control: 'radio', options: ['s', 'm', 'l'] },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    invalid: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

// Sample options
const regionOptions = [
  { value: 'praha', label: 'Hlavní město Praha' },
  { value: 'stredocesky', label: 'Středočeský kraj' },
  { value: 'jihocesky', label: 'Jihočeský kraj' },
  { value: 'plzensky', label: 'Plzeňský kraj' },
  { value: 'karlovarsky', label: 'Karlovarský kraj' },
  { value: 'ustecky', label: 'Ústecký kraj' },
  { value: 'liberecky', label: 'Liberecký kraj' },
  { value: 'kralovehradecky', label: 'Královéhradecký kraj' },
  { value: 'pardubicky', label: 'Pardubický kraj' },
  { value: 'vysocina', label: 'Kraj Vysočina' },
  { value: 'jihomoravsky', label: 'Jihomoravský kraj' },
  { value: 'olomoucky', label: 'Olomoucký kraj' },
  { value: 'zlinsky', label: 'Zlínský kraj' },
  { value: 'moravskoslezsky', label: 'Moravskoslezský kraj' },
];

const educationOptions = [
  { value: 'zakladni', label: 'Základní vzdělání' },
  { value: 'stredni', label: 'Střední vzdělání bez maturity' },
  { value: 'stredni-maturita', label: 'Střední vzdělání s maturitou' },
  { value: 'vyssi-odborne', label: 'Vyšší odborné vzdělání' },
  { value: 'bakalarske', label: 'Bakalářské vzdělání' },
  { value: 'magisterske', label: 'Magisterské vzdělání' },
  { value: 'doktorske', label: 'Doktorské vzdělání' },
];

const groupedOptions = [
  {
    group: 'Čechy',
    options: [
      { value: 'praha', label: 'Praha' },
      { value: 'plzen', label: 'Plzeň' },
      { value: 'liberec', label: 'Liberec' },
      { value: 'hradec', label: 'Hradec Králové' },
    ],
  },
  {
    group: 'Morava',
    options: [
      { value: 'brno', label: 'Brno' },
      { value: 'ostrava', label: 'Ostrava' },
      { value: 'olomouc', label: 'Olomouc' },
      { value: 'zlin', label: 'Zlín' },
    ],
  },
];

// ============================================
// Playground (Interactive)
// ============================================
export const Playground = {
  args: {
    label: 'Kraj',
    placeholder: '-- Vyberte kraj --',
    options: regionOptions,
    size: 'm',
    required: false,
    disabled: false,
    invalid: false,
    helperText: '',
  },
};

// ============================================
// Basic Select
// ============================================
export const BasicSelect = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ maxWidth: '400px' }}>
        <Select
          label="Kraj"
          name="region"
          placeholder="-- Vyberte kraj --"
          options={regionOptions}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value && (
          <p style={{ marginTop: '16px', color: '#4f4f4f' }}>
            Vybraná hodnota: <strong>{value}</strong>
          </p>
        )}
      </div>
    );
  },
  parameters: {
    docs: { description: { story: 'Basic select with region options.' } },
  },
};

// ============================================
// With Placeholder
// ============================================
export const WithPlaceholder = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Select
        label="S placeholder"
        placeholder="-- Vyberte možnost --"
        options={educationOptions}
      />
      <Select
        label="Bez placeholder (první možnost vybraná)"
        options={educationOptions}
        defaultValue="zakladni"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// ============================================
// Size Variants
// ============================================
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Select
        label="Small (s)"
        size="s"
        placeholder="-- Vyberte --"
        options={educationOptions.slice(0, 4)}
      />
      <Select
        label="Medium (m) - Default"
        size="m"
        placeholder="-- Vyberte --"
        options={educationOptions.slice(0, 4)}
      />
      <Select
        label="Large (l)"
        size="l"
        placeholder="-- Vyberte --"
        options={educationOptions.slice(0, 4)}
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
      <Select
        label="Default"
        placeholder="-- Vyberte --"
        options={educationOptions.slice(0, 4)}
      />
      <Select
        label="With Value"
        options={educationOptions.slice(0, 4)}
        defaultValue="stredni-maturita"
      />
      <Select
        label="Disabled"
        placeholder="-- Nelze vybrat --"
        options={educationOptions.slice(0, 4)}
        disabled
      />
      <Select
        label="Required"
        placeholder="-- Vyberte (povinné) --"
        options={educationOptions.slice(0, 4)}
        required
      />
      <Select
        label="Invalid"
        placeholder="-- Vyberte --"
        options={educationOptions.slice(0, 4)}
        invalid
        invalidMessage="Toto pole je povinné"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Different select states.' } },
  },
};

// ============================================
// With Helper Text
// ============================================
export const WithHelperText = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Select
        label="Nejvyšší dosažené vzdělání"
        name="education"
        placeholder="-- Vyberte vzdělání --"
        options={educationOptions}
        helperText="Vyberte úroveň vzdělání, kterou jste dokončili"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// ============================================
// Invalid State
// ============================================
export const Invalid = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Select
        label="Kraj"
        placeholder="-- Vyberte kraj --"
        options={regionOptions}
        invalid
        invalidMessage="Vyberte prosím kraj"
        required
      />
      <Select
        label="Vzdělání"
        placeholder="-- Vyberte --"
        options={educationOptions}
        invalid
        invalidMessage="Toto pole je povinné pro pokračování"
        required
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Error states with validation messages.' } },
  },
};

// ============================================
// Option Groups
// ============================================
export const OptionGroups = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ maxWidth: '400px' }}>
        <Select
          label="Město"
          name="city"
          placeholder="-- Vyberte město --"
          options={groupedOptions}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText="Města jsou seskupena podle regionu"
        />
      </div>
    );
  },
  parameters: {
    docs: { description: { story: 'Select with option groups (optgroup).' } },
  },
};

// ============================================
// Disabled Options
// ============================================
export const DisabledOptions = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Select
        label="Dostupné termíny"
        placeholder="-- Vyberte termín --"
        options={[
          { value: '2026-01', label: 'Leden 2026' },
          { value: '2026-02', label: 'Únor 2026', disabled: true },
          { value: '2026-03', label: 'Březen 2026' },
          { value: '2026-04', label: 'Duben 2026', disabled: true },
          { value: '2026-05', label: 'Květen 2026' },
        ]}
        helperText="Některé termíny jsou již obsazeny"
      />
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Select with some disabled options.' } },
  },
};

// ============================================
// Form Example
// ============================================
export const FormExample = {
  render: () => {
    const [formData, setFormData] = useState({
      region: '',
      education: '',
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
      if (!formData.region) newErrors.region = 'Vyberte prosím kraj';
      if (!formData.education) newErrors.education = 'Vyberte prosím vzdělání';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    return (
      <div style={{ maxWidth: '500px' }}>
        <h3 style={{ marginBottom: '24px', color: '#1e5086' }}>Osobní údaje</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Select
            label="Kraj trvalého bydliště"
            name="region"
            placeholder="-- Vyberte kraj --"
            options={regionOptions}
            value={formData.region}
            onChange={handleChange('region')}
            invalid={!!errors.region}
            invalidMessage={errors.region}
            required
          />
          
          <Select
            label="Nejvyšší dosažené vzdělání"
            name="education"
            placeholder="-- Vyberte vzdělání --"
            options={educationOptions}
            value={formData.education}
            onChange={handleChange('education')}
            invalid={!!errors.education}
            invalidMessage={errors.education}
            required
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
              alignSelf: 'flex-start',
            }}
          >
            Ověřit formulář
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
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e7e7e7', color: '#262626', minWidth: '250px' }}>Select</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500 }}>Default</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Select label="Label" placeholder="Placeholder" options={educationOptions.slice(0, 3)} />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500 }}>With Value</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Select label="Label" options={educationOptions.slice(0, 3)} defaultValue="stredni" />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500 }}>Required</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Select label="Label" placeholder="Povinné" options={educationOptions.slice(0, 3)} required />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500 }}>Disabled</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Select label="Label" placeholder="Disabled" options={educationOptions.slice(0, 3)} disabled />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500 }}>Invalid</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Select label="Label" placeholder="Invalid" options={educationOptions.slice(0, 3)} invalid invalidMessage="Chybová zpráva" />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', fontWeight: 500 }}>With Helper</td>
            <td style={{ padding: '12px' }}>
              <Select label="Label" placeholder="Placeholder" options={educationOptions.slice(0, 3)} helperText="Nápověda k poli" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Complete matrix of all select states.' } },
  },
};

