import { useState } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';

export default {
  title: 'Components/LanguageSwitcher',
  component: LanguageSwitcher,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
# LanguageSwitcher

A flexible language switcher component for multilingual applications.

## Features

- **Three variants**: Toggle, buttons, dropdown
- **Customizable languages**: Not limited to CZ/EN
- **Globe icon**: Optional visual indicator
- **Accessible**: ARIA labels, keyboard navigation
- **Theme support**: Light/dark variants for different backgrounds

## Usage

\`\`\`jsx
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

<LanguageSwitcher 
  languages={[
    { code: 'cs', label: 'Czech', shortLabel: 'CZ' },
    { code: 'en', label: 'English', shortLabel: 'EN' }
  ]}
  currentLanguage="cs"
  onChange={(code) => setLanguage(code)}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['toggle', 'buttons', 'dropdown'],
      description: 'Display variant',
    },
    currentLanguage: {
      control: 'select',
      options: ['cs', 'en', 'de', 'sk'],
      description: 'Currently selected language',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show globe icon',
    },
    showFullLabel: {
      control: 'boolean',
      description: 'Show full language name instead of short code',
    },
    onChange: {
      action: 'language-changed',
    },
  },
};

// ============================================================================
// PLAYGROUND
// ============================================================================

export const Playground = {
  render: (args) => {
    const [lang, setLang] = useState(args.currentLanguage || 'cs');
    return (
      <div style={{ padding: '40px', backgroundColor: '#0d2a4a', borderRadius: '8px' }}>
        <LanguageSwitcher
          {...args}
          currentLanguage={lang}
          onChange={(code) => {
            setLang(code);
            args.onChange?.(code);
          }}
          className="gov-lang-switcher--light"
        />
      </div>
    );
  },
  args: {
    variant: 'toggle',
    showIcon: true,
    showFullLabel: false,
    languages: [
      { code: 'cs', label: 'Czech', shortLabel: 'CZ' },
      { code: 'en', label: 'English', shortLabel: 'EN' }
    ],
    currentLanguage: 'cs',
  },
};

// ============================================================================
// VARIANTS
// ============================================================================

export const Toggle = {
  render: () => {
    const [lang, setLang] = useState('cs');
    return (
      <div style={{ padding: '40px', backgroundColor: '#0d2a4a', borderRadius: '8px' }}>
        <LanguageSwitcher
          variant="toggle"
          currentLanguage={lang}
          onChange={setLang}
          className="gov-lang-switcher--light"
        />
        <p style={{ color: '#fff', marginTop: '16px', fontSize: '14px' }}>
          Selected: {lang}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple toggle that switches between two languages with a single click.',
      },
    },
  },
};

export const Buttons = {
  render: () => {
    const [lang, setLang] = useState('cs');
    return (
      <div style={{ padding: '40px', backgroundColor: '#0d2a4a', borderRadius: '8px' }}>
        <LanguageSwitcher
          variant="buttons"
          currentLanguage={lang}
          onChange={setLang}
          className="gov-lang-switcher--light"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All language options visible as buttons. Active language is highlighted.',
      },
    },
  },
};

export const Dropdown = {
  render: () => {
    const [lang, setLang] = useState('cs');
    return (
      <div style={{ padding: '40px', backgroundColor: '#0d2a4a', borderRadius: '8px', minHeight: '150px' }}>
        <LanguageSwitcher
          variant="dropdown"
          currentLanguage={lang}
          onChange={setLang}
          className="gov-lang-switcher--light"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu for selecting from multiple languages. Click to open.',
      },
    },
  },
};

// ============================================================================
// ON DIFFERENT BACKGROUNDS
// ============================================================================

export const OnDarkBackground = {
  render: () => {
    const [lang, setLang] = useState('cs');
    return (
      <div style={{ padding: '40px', backgroundColor: '#0d2a4a', borderRadius: '8px' }}>
        <LanguageSwitcher
          currentLanguage={lang}
          onChange={setLang}
          className="gov-lang-switcher--light"
        />
      </div>
    );
  },
};

export const OnLightBackground = {
  render: () => {
    const [lang, setLang] = useState('cs');
    return (
      <div style={{ padding: '40px', backgroundColor: '#ffffff', border: '1px solid #e7e7e7', borderRadius: '8px' }}>
        <LanguageSwitcher
          currentLanguage={lang}
          onChange={setLang}
          className="gov-lang-switcher--dark"
        />
      </div>
    );
  },
};

// ============================================================================
// MULTIPLE LANGUAGES
// ============================================================================

export const MultipleLanguages = {
  render: () => {
    const [lang, setLang] = useState('cs');
    const languages = [
      { code: 'cs', label: 'Czech', shortLabel: 'CZ' },
      { code: 'en', label: 'English', shortLabel: 'EN' },
      { code: 'de', label: 'Deutsch', shortLabel: 'DE' },
      { code: 'sk', label: 'Slovak', shortLabel: 'SK' },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ padding: '40px', backgroundColor: '#0d2a4a', borderRadius: '8px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 16px 0', fontSize: '14px' }}>Dropdown (4 languages)</h4>
          <LanguageSwitcher
            variant="dropdown"
            languages={languages}
            currentLanguage={lang}
            onChange={setLang}
            className="gov-lang-switcher--light"
          />
        </div>
        <div style={{ padding: '40px', backgroundColor: '#0d2a4a', borderRadius: '8px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 16px 0', fontSize: '14px' }}>Buttons (4 languages)</h4>
          <LanguageSwitcher
            variant="buttons"
            languages={languages}
            currentLanguage={lang}
            onChange={setLang}
            className="gov-lang-switcher--light"
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Support for more than 2 languages. Dropdown recommended for 3+ languages.',
      },
    },
  },
};

// ============================================================================
// DISPLAY OPTIONS
// ============================================================================

export const WithFullLabels = {
  render: () => {
    const [lang, setLang] = useState('cs');
    return (
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        <div style={{ padding: '40px', backgroundColor: '#0d2a4a', borderRadius: '8px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 16px 0', fontSize: '14px' }}>Short labels (default)</h4>
          <LanguageSwitcher
            currentLanguage={lang}
            onChange={setLang}
            showFullLabel={false}
            className="gov-lang-switcher--light"
          />
        </div>
        <div style={{ padding: '40px', backgroundColor: '#0d2a4a', borderRadius: '8px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 16px 0', fontSize: '14px' }}>Full labels</h4>
          <LanguageSwitcher
            currentLanguage={lang}
            onChange={setLang}
            showFullLabel={true}
            className="gov-lang-switcher--light"
          />
        </div>
      </div>
    );
  },
};

export const WithoutIcon = {
  render: () => {
    const [lang, setLang] = useState('cs');
    return (
      <div style={{ padding: '40px', backgroundColor: '#0d2a4a', borderRadius: '8px' }}>
        <LanguageSwitcher
          currentLanguage={lang}
          onChange={setLang}
          showIcon={false}
          className="gov-lang-switcher--light"
        />
      </div>
    );
  },
};

// ============================================================================
// ALL VARIANTS OVERVIEW
// ============================================================================

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h4 style={{ margin: 0, color: '#262626', fontSize: '14px', fontWeight: 500 }}>
        On Dark Background (Header)
      </h4>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <div style={{ padding: '24px', backgroundColor: '#0d2a4a', borderRadius: '8px' }}>
          <p style={{ color: '#fff', margin: '0 0 12px', fontSize: '12px' }}>Toggle</p>
          <LanguageSwitcher variant="toggle" className="gov-lang-switcher--light" />
        </div>
        <div style={{ padding: '24px', backgroundColor: '#0d2a4a', borderRadius: '8px' }}>
          <p style={{ color: '#fff', margin: '0 0 12px', fontSize: '12px' }}>Buttons</p>
          <LanguageSwitcher variant="buttons" className="gov-lang-switcher--light" />
        </div>
        <div style={{ padding: '24px', backgroundColor: '#0d2a4a', borderRadius: '8px', minWidth: '200px' }}>
          <p style={{ color: '#fff', margin: '0 0 12px', fontSize: '12px' }}>Dropdown</p>
          <LanguageSwitcher variant="dropdown" className="gov-lang-switcher--light" />
        </div>
      </div>
      
      <h4 style={{ margin: '16px 0 0', color: '#262626', fontSize: '14px', fontWeight: 500 }}>
        On Light Background
      </h4>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <div style={{ padding: '24px', backgroundColor: '#fff', border: '1px solid #e7e7e7', borderRadius: '8px' }}>
          <p style={{ color: '#262626', margin: '0 0 12px', fontSize: '12px' }}>Toggle</p>
          <LanguageSwitcher variant="toggle" className="gov-lang-switcher--dark" />
        </div>
        <div style={{ padding: '24px', backgroundColor: '#fff', border: '1px solid #e7e7e7', borderRadius: '8px' }}>
          <p style={{ color: '#262626', margin: '0 0 12px', fontSize: '12px' }}>Buttons</p>
          <LanguageSwitcher variant="buttons" className="gov-lang-switcher--dark" />
        </div>
        <div style={{ padding: '24px', backgroundColor: '#fff', border: '1px solid #e7e7e7', borderRadius: '8px', minWidth: '200px' }}>
          <p style={{ color: '#262626', margin: '0 0 12px', fontSize: '12px' }}>Dropdown</p>
          <LanguageSwitcher variant="dropdown" className="gov-lang-switcher--dark" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};


