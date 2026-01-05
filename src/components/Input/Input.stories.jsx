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
<Input label="Jméno" name="firstName" />

// With validation
<Input 
  label="E-mail" 
  type="email" 
  required 
  invalid={!isValidEmail} 
  invalidMessage="Zadejte platný e-mail" 
/>

// Textarea (multiline)
<Input 
  label="Popis" 
  multiline 
  rows={4} 
  placeholder="Popište vaše zkušenosti..." 
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
    label: 'Jméno a příjmení',
    placeholder: 'Zadejte vaše jméno',
    helperText: 'Uveďte celé jméno včetně příjmení',
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
        label="Jméno" 
        name="firstName" 
        placeholder="Zadejte jméno" 
      />
      <Input 
        label="Příjmení" 
        name="lastName" 
        placeholder="Zadejte příjmení" 
        required 
      />
      <Input 
        label="E-mail" 
        name="email" 
        type="email" 
        placeholder="vas@email.cz" 
        helperText="Na tento e-mail vám zašleme potvrzení" 
      />
      <Input 
        label="Telefon" 
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
        label="Popis vzdělání a dovedností" 
        name="education"
        multiline 
        rows={3}
        placeholder="Popište vaše vzdělání, certifikace a dovednosti..."
        helperText="Uveďte relevantní informace"
      />
      <Input 
        label="Zdůvodnění požadované rekvalifikace" 
        name="justification"
        multiline 
        rows={5}
        placeholder="Uveďte, jak rekvalifikace přispěje k Vašemu uplatnění na trhu práce..."
        required
      />
      <Input 
        label="Poznámka (s limitem znaků)" 
        name="note"
        multiline 
        rows={3}
        maxLength={200}
        showCharCount
        placeholder="Max 200 znaků..."
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
        placeholder="Malé pole" 
      />
      <Input 
        label="Medium (m) - Default" 
        size="m" 
        placeholder="Střední pole" 
      />
      <Input 
        label="Large (l)" 
        size="l" 
        placeholder="Velké pole" 
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
        placeholder="Zadejte text..." 
      />
      <Input 
        label="With Value" 
        defaultValue="Jan Novák" 
      />
      <Input 
        label="Disabled" 
        placeholder="Nelze upravit" 
        disabled 
      />
      <Input 
        label="Read Only" 
        defaultValue="Pouze pro čtení" 
        readOnly 
      />
      <Input 
        label="Required" 
        placeholder="Povinné pole" 
        required 
      />
      <Input 
        label="Invalid" 
        defaultValue="neplatný-email" 
        invalid 
        invalidMessage="Zadejte platnou e-mailovou adresu" 
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
        label="Rodné číslo" 
        name="birthNumber"
        placeholder="XXXXXX/XXXX"
        helperText="Formát: XXXXXX/XXXX (6 číslic/4 číslice)"
      />
      <Input 
        label="PSČ" 
        name="postalCode"
        placeholder="12345"
        helperText="5 číslic bez mezer"
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
        invalidMessage="Zadejte platnou e-mailovou adresu" 
      />
      <Input 
        label="Povinné pole" 
        required
        invalid 
        invalidMessage="Toto pole je povinné" 
      />
      <Input 
        label="Zdůvodnění" 
        multiline
        rows={3}
        invalid 
        invalidMessage="Text musí obsahovat alespoň 50 znaků" 
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
        placeholder="Běžný text"
      />
      <Input 
        label="E-mail" 
        type="email"
        placeholder="vas@email.cz"
      />
      <Input 
        label="Telefon" 
        type="tel"
        placeholder="+420 XXX XXX XXX"
      />
      <Input 
        label="Číslo" 
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
          label="Poznámka (max 200 znaků)" 
          multiline
          rows={4}
          maxLength={200}
          showCharCount
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Napište poznámku..."
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
      if (!formData.firstName) newErrors.firstName = 'Jméno je povinné';
      if (!formData.lastName) newErrors.lastName = 'Příjmení je povinné';
      if (!formData.email) newErrors.email = 'E-mail je povinný';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Neplatný e-mail';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    return (
      <div style={{ maxWidth: '500px' }}>
        <h3 style={{ marginBottom: '24px', color: '#1e5086' }}>Kontaktní údaje</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Input 
              label="Jméno" 
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange('firstName')}
              invalid={!!errors.firstName}
              invalidMessage={errors.firstName}
            />
            <Input 
              label="Příjmení" 
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
            helperText="Na tento e-mail vám zašleme potvrzení"
          />
          <Input 
            label="Telefon" 
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange('phone')}
            helperText="Nepovinné"
          />
          <Input 
            label="Poznámka" 
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
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e7e7e7', color: '#262626' }}>Text Input</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e7e7e7', color: '#262626' }}>Textarea</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500 }}>Default</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" placeholder="Placeholder" />
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" multiline rows={2} placeholder="Placeholder" />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500 }}>With Value</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" defaultValue="Jan Novák" />
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" multiline rows={2} defaultValue="Popis textu..." />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500 }}>Required</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" required placeholder="Povinné" />
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" multiline rows={2} required placeholder="Povinné" />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500 }}>Disabled</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" disabled defaultValue="Nelze upravit" />
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" multiline rows={2} disabled defaultValue="Nelze upravit" />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7', fontWeight: 500 }}>Invalid</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" invalid invalidMessage="Chybová zpráva" defaultValue="Chybná hodnota" />
            </td>
            <td style={{ padding: '12px', borderBottom: '1px solid #e7e7e7' }}>
              <Input label="Label" multiline rows={2} invalid invalidMessage="Chybová zpráva" defaultValue="Chybný text" />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', fontWeight: 500 }}>With Helper</td>
            <td style={{ padding: '12px' }}>
              <Input label="Label" helperText="Nápověda k poli" placeholder="Placeholder" />
            </td>
            <td style={{ padding: '12px' }}>
              <Input label="Label" multiline rows={2} helperText="Nápověda k poli" placeholder="Placeholder" />
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


