import { useState } from 'react';
import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
# Header

Government-style header component with logo, navigation, and language switcher.

## Features

- **Dark blue theme** inspired by portal.gov.cz
- **Skip link** for keyboard accessibility
- **Customizable logo** (default GOV.cz house icon)
- **Navigation links** with active state
- **Language switcher** integrated
- **Action buttons** for login, etc.
- **Blue accent bar** below header
- **Responsive** - navigation hidden on mobile
- **Sticky option** available

## WCAG 2.1 AA Compliance

- Skip link for keyboard users
- Proper \`role="banner"\` landmark
- \`aria-label\` on navigation
- Focus states visible
- Color contrast meets standards

## Usage

\`\`\`jsx
import { Header } from '@/components/Header';

<Header
  appName="My Portal"
  navigation={[
    { label: 'Services', href: '/sluzby', active: true },
    { label: 'Life events', href: '/udalosti' }
  ]}
  currentLanguage="cs"
  onLanguageChange={(code) => setLanguage(code)}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    appName: {
      control: 'text',
      description: 'Application name displayed next to the logo',
    },
    showLogo: {
      control: 'boolean',
      description: 'Show/hide the Czech lion logo',
    },
    sticky: {
      control: 'boolean',
      description: 'Sticky header that stays on top when scrolling',
    },
    showLanguageSwitcher: {
      control: 'boolean',
      description: 'Show/hide language switcher',
    },
    currentLanguage: {
      control: 'select',
      options: ['cs', 'en'],
      description: 'Current language',
    },
    onLanguageChange: {
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
      <div>
        <Header
          {...args}
          currentLanguage={lang}
          onLanguageChange={(code) => {
            setLang(code);
            args.onLanguageChange?.(code);
          }}
        />
        <main id="main-content" style={{ padding: '40px', minHeight: '300px', color: '#262626' }}>
          <h1>Main Content</h1>
          <p>This is the main content area. Try tabbing from the browser address bar to see the skip link.</p>
          <p>Current language: <strong>{lang}</strong></p>
        </main>
      </div>
    );
  },
  args: {
    appName: 'Forms Portal',
    navigation: [
      { label: 'Services for citizens', href: '/sluzby', active: true },
      { label: 'Life events', href: '/udalosti' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
    showLanguageSwitcher: true,
    showLogo: true,
    currentLanguage: 'cs',
    sticky: false,
  },
};

// ============================================================================
// BASIC EXAMPLES
// ============================================================================

export const Default = {
  args: {
    appName: 'Portal',
  },
  parameters: {
    controls: { disable: true },
  },
};

export const WithNavigation = {
  args: {
    appName: 'Forms Portal',
    navigation: [
      { label: 'Formuláře', href: '/formulare', active: true },
      { label: 'Services', href: '/sluzby' },
      { label: 'Help', href: '/napoveda' },
    ],
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Header with navigation links. Active page is highlighted.',
      },
    },
  },
};

export const WithActions = {
  render: () => {
    const [lang, setLang] = useState('cs');
    
    // Simple user icon SVG
    const UserIcon = (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    );
    
    return (
      <Header
        appName="Citizen Portal"
        navigation={[
          { label: 'Services', href: '/sluzby' },
          { label: 'Life events', href: '/udalosti' },
        ]}
        currentLanguage={lang}
        onLanguageChange={setLang}
        actions={[
          { 
            label: 'Sign in', 
            href: '/login',
            icon: UserIcon,
            ariaLabel: 'Sign in to Citizen Portal'
          },
        ]}
      />
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Header with action buttons (e.g., login).',
      },
    },
  },
};

// ============================================================================
// CUSTOM LOGO
// ============================================================================

export const CustomLogo = {
  render: () => {
    const CustomLogoComponent = (
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none' }}>
        <svg viewBox="0 0 32 32" fill="currentColor" width="32" height="32">
          <rect x="4" y="4" width="24" height="24" rx="4" />
          <text x="16" y="21" fontSize="12" fill="#0d2a4a" textAnchor="middle" fontWeight="bold">CZ</text>
        </svg>
        <span style={{ fontWeight: 700, fontSize: '18px' }}>Moje Aplikace</span>
      </a>
    );
    
    return (
      <Header
        customLogo={CustomLogoComponent}
        navigation={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Settings', href: '/nastaveni' },
        ]}
      />
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Header with a completely custom logo component.',
      },
    },
  },
};

// ============================================================================
// STICKY HEADER
// ============================================================================

export const StickyHeader = {
  render: () => {
    const [lang, setLang] = useState('cs');
    return (
      <div>
        <Header
          appName="Portal"
          navigation={[
            { label: 'Services', href: '/sluzby', active: true },
            { label: 'Kontakt', href: '/kontakt' },
          ]}
          currentLanguage={lang}
          onLanguageChange={setLang}
          sticky={true}
        />
        <main id="main-content" style={{ padding: '40px', color: '#262626' }}>
          <h1>Scroll down to test sticky header</h1>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} style={{ marginBottom: '16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Paragraph {i + 1}.
            </p>
          ))}
        </main>
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Header stays fixed at the top while scrolling.',
      },
    },
  },
};

// ============================================================================
// LANGUAGE SWITCHING
// ============================================================================

export const LanguageSwitching = {
  render: () => {
    const [lang, setLang] = useState('cs');
    
    const labels = {
      cs: { services: 'Services', events: 'Life events', help: 'Help' },
      en: { services: 'Services', events: 'Life Events', help: 'Help' },
    };
    
    return (
      <div>
        <Header
          appName="Portal"
          navigation={[
            { label: labels[lang].services, href: '/sluzby' },
            { label: labels[lang].events, href: '/udalosti' },
            { label: labels[lang].help, href: '/napoveda' },
          ]}
          currentLanguage={lang}
          onLanguageChange={setLang}
        />
        <main id="main-content" style={{ padding: '40px', color: '#262626' }}>
          <h1>{lang === 'cs' ? 'Content in Czech' : 'Content in English'}</h1>
          <p>
            {lang === 'cs' 
              ? 'Click on the language switcher in the header to change language.' 
              : 'Click the language switcher in the header to change language.'
            }
          </p>
        </main>
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Demonstration of language switching affecting navigation labels.',
      },
    },
  },
};

// ============================================================================
// MINIMAL HEADER
// ============================================================================

export const MinimalHeader = {
  args: {
    appName: 'Simple App',
    showLanguageSwitcher: false,
    navigation: [],
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Minimal header with just a logo - no navigation or language switcher.',
      },
    },
  },
};

// ============================================================================
// REAL-WORLD EXAMPLE
// ============================================================================

export const PortalExample = {
  render: () => {
    const [lang, setLang] = useState('cs');
    
    const UserIcon = (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    );
    
    return (
      <div>
        <Header
          appName="Public Administration Portal"
          navigation={[
            { label: 'Services for citizens', href: '/sluzby-fo' },
            { label: 'Services for businesses', href: '/sluzby-po' },
            { label: 'Life events', href: '/udalosti', active: true },
            { label: 'Where next', href: '/kam-dal' },
          ]}
          currentLanguage={lang}
          onLanguageChange={setLang}
          actions={[
            { 
              label: 'Citizen Portal', 
              href: 'https://portal.gov.cz',
              icon: UserIcon,
              ariaLabel: 'Go to Citizen Portal'
            },
          ]}
        />
        <main id="main-content" style={{ 
          padding: '40px', 
          maxWidth: '1200px', 
          margin: '0 auto',
          minHeight: '400px',
          backgroundColor: '#f5f5f5',
          color: '#262626'
        }}>
          <h1 style={{ marginTop: 0 }}>Life events</h1>
          <p>Find information about public administration services by life situations.</p>
        </main>
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Real-world example inspired by portal.gov.cz.',
      },
    },
  },
};

