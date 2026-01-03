import { Icon, BootstrapIcon, AVAILABLE_ICONS } from './Icon';
import './Icon.css';

export default {
  title: 'Design Tokens/Icons',
  component: Icon,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: `
# GOV.cz Icon System

The GOV.cz Design System uses **Bootstrap Icons** as its icon library. This implementation provides:

1. **50 Built-in Core Icons** - Most commonly used icons, embedded as inline SVG for optimal performance
2. **Bootstrap Icons CDN** - Access to 2000+ icons via CDN

## Quick Start

### Using Built-in Icons (Recommended)
\`\`\`jsx
import { Icon } from './components/Icon';

// Basic usage
<Icon name="search" />

// With size and color
<Icon name="check-circle" size="2xl" color="var(--gov-success-600)" />
\`\`\`

### Using Bootstrap Icons CDN
First, add the CDN to your \`index.html\`:
\`\`\`html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
\`\`\`

Then use the \`BootstrapIcon\` component:
\`\`\`jsx
import { BootstrapIcon } from './components/Icon';

<BootstrapIcon name="github" size="xl" />
\`\`\`

## Icon Sizes
Icons use GOV.cz design tokens for consistent sizing:
- \`xs\`: 12px
- \`sm\`: 14px
- \`md\`: 16px (default)
- \`lg\`: 18px
- \`xl\`: 20px
- \`2xl\`: 24px
- \`3xl\`: 32px
- \`4xl\`: 40px
- \`5xl\`: 48px

## Full Icon Library
Browse all 2000+ Bootstrap Icons at: [icons.getbootstrap.com](https://icons.getbootstrap.com/)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: AVAILABLE_ICONS,
      description: 'Icon name from the built-in set',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      description: 'Icon size using GOV.cz tokens',
    },
    color: {
      control: 'color',
      description: 'Icon color (defaults to currentColor)',
    },
  },
};

// ============================================================
//  DEFAULT STORY - Interactive Playground
// ============================================================

export const Default = {
  args: {
    name: 'star',
    size: 'xl',
    color: 'var(--gov-primary-400)',
  },
};

// ============================================================
//  ALL 50 BUILT-IN ICONS
// ============================================================

export const AllBuiltInIcons = {
  render: () => (
    <div className="icon-docs">
      {/* Bootstrap Icons Info */}
      <div className="bootstrap-icons-info">
        <h2 className="bootstrap-icons-info__title">
          <Icon name="info-circle" size="2xl" color="var(--gov-secondary-400)" />
          Full Icon Library
        </h2>
        <p className="bootstrap-icons-info__description">
          This design system includes 50 core icons. For the complete library of <strong>2000+ icons</strong>, 
          use Bootstrap Icons via CDN.
        </p>
        <a 
          href="https://icons.getbootstrap.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bootstrap-icons-info__link"
        >
          Browse All Bootstrap Icons
          <Icon name="box-arrow-up-right" size="sm" />
        </a>
        <div className="bootstrap-icons-info__code">
          <strong>CDN Link (add to index.html):</strong><br/>
          <code>&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"&gt;</code>
        </div>
      </div>

      {/* Icon Grid */}
      <h3 style={{ color: 'var(--gov-neutral-0)', marginBottom: 'var(--gov-space-m)' }}>
        Built-in Icons ({AVAILABLE_ICONS.length} icons)
      </h3>
      <div className="icon-grid">
        {AVAILABLE_ICONS.map((iconName) => (
          <div key={iconName} className="icon-grid__item">
            <Icon name={iconName} size="2xl" />
            <span className="icon-grid__name">{iconName}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## All 50 Built-in Icons

These icons are embedded as inline SVG for optimal performance and are always available without external dependencies.

### Icon Categories:
- **Navigation & UI**: arrow-left, arrow-right, chevron-down, menu, x, check
- **Actions**: search, download, upload, copy, trash, pencil, gear
- **Communication**: envelope, telephone, chat, bell
- **Status**: info-circle, question-circle, exclamation-circle, check-circle-fill
- **Files**: file, file-text, folder, image
- **User**: person, people, lock, unlock
- **Location**: geo-alt, house
- **Time**: calendar, clock
- **Media**: play, pause, star, heart, eye
        `,
      },
    },
  },
};

// ============================================================
//  ICON SIZES
// ============================================================

export const IconSizes = {
  render: () => (
    <div className="icon-docs">
      <h3 style={{ color: 'var(--gov-neutral-0)', marginBottom: 'var(--gov-space-m)' }}>
        Icon Size Scale
      </h3>
      <p style={{ color: 'var(--gov-neutral-300)', marginBottom: 'var(--gov-space-l)' }}>
        Icons use GOV.cz design tokens for consistent sizing across the design system.
      </p>
      
      <div className="icon-size-demo">
        {['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'].map((size) => (
          <div key={size} className="icon-size-demo__item">
            <Icon name="star" size={size} color="var(--gov-primary-400)" />
            <span className="icon-size-demo__label">{size}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 'var(--gov-space-xl)' }}>
        <h4 style={{ color: 'var(--gov-neutral-0)', marginBottom: 'var(--gov-space-s)' }}>
          Size Token Reference
        </h4>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          color: 'var(--gov-neutral-200)',
          fontSize: 'var(--gov-font-body-s)'
        }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--gov-neutral-700)' }}>
              <th style={{ padding: 'var(--gov-space-s)', textAlign: 'left' }}>Size</th>
              <th style={{ padding: 'var(--gov-space-s)', textAlign: 'left' }}>Token</th>
              <th style={{ padding: 'var(--gov-space-s)', textAlign: 'left' }}>Value</th>
              <th style={{ padding: 'var(--gov-space-s)', textAlign: 'left' }}>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: 'var(--gov-space-s)' }}>xs</td><td><code>--gov-icon-xs</code></td><td>12px</td><td>Inline with small text</td></tr>
            <tr><td style={{ padding: 'var(--gov-space-s)' }}>sm</td><td><code>--gov-icon-s</code></td><td>14px</td><td>Inline with body-s text</td></tr>
            <tr><td style={{ padding: 'var(--gov-space-s)' }}>md</td><td><code>--gov-icon-m</code></td><td>16px</td><td>Default inline icon</td></tr>
            <tr><td style={{ padding: 'var(--gov-space-s)' }}>lg</td><td><code>--gov-icon-l</code></td><td>18px</td><td>Inline with body-l text</td></tr>
            <tr><td style={{ padding: 'var(--gov-space-s)' }}>xl</td><td><code>--gov-icon-xl</code></td><td>20px</td><td>Button icons</td></tr>
            <tr><td style={{ padding: 'var(--gov-space-s)' }}>2xl</td><td><code>--gov-icon-2xl</code></td><td>24px</td><td>Standalone small</td></tr>
            <tr><td style={{ padding: 'var(--gov-space-s)' }}>3xl</td><td><code>--gov-icon-3xl</code></td><td>32px</td><td>Standalone medium</td></tr>
            <tr><td style={{ padding: 'var(--gov-space-s)' }}>4xl</td><td><code>--gov-icon-4xl</code></td><td>40px</td><td>Standalone large</td></tr>
            <tr><td style={{ padding: 'var(--gov-space-s)' }}>5xl</td><td><code>--gov-icon-5xl</code></td><td>48px</td><td>Hero icons</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Icon Sizes

The icon component uses GOV.cz design tokens for sizing, ensuring consistency with the overall design system.

### Usage
\`\`\`jsx
<Icon name="star" size="xs" />
<Icon name="star" size="md" />
<Icon name="star" size="2xl" />
<Icon name="star" size="5xl" />
\`\`\`
        `,
      },
    },
  },
};

// ============================================================
//  ICON COLORS
// ============================================================

export const IconColors = {
  render: () => (
    <div className="icon-docs">
      <h3 style={{ color: 'var(--gov-neutral-0)', marginBottom: 'var(--gov-space-m)' }}>
        Icon Colors
      </h3>
      <p style={{ color: 'var(--gov-neutral-300)', marginBottom: 'var(--gov-space-l)' }}>
        Icons can use any color from the GOV.cz color palette. By default, they inherit <code>currentColor</code>.
      </p>
      
      <div className="icon-color-demo">
        <div className="icon-color-demo__item">
          <Icon name="check-circle-fill" size="3xl" color="var(--gov-primary-500)" />
          <span className="icon-color-demo__label">primary-500</span>
        </div>
        <div className="icon-color-demo__item">
          <Icon name="star" size="3xl" color="var(--gov-secondary-500)" />
          <span className="icon-color-demo__label">secondary-500</span>
        </div>
        <div className="icon-color-demo__item">
          <Icon name="check-circle-fill" size="3xl" color="var(--gov-success-500)" />
          <span className="icon-color-demo__label">success-500</span>
        </div>
        <div className="icon-color-demo__item">
          <Icon name="exclamation-triangle" size="3xl" color="var(--gov-warning-500)" />
          <span className="icon-color-demo__label">warning-500</span>
        </div>
        <div className="icon-color-demo__item">
          <Icon name="x-circle-fill" size="3xl" color="var(--gov-error-500)" />
          <span className="icon-color-demo__label">error-500</span>
        </div>
        <div className="icon-color-demo__item">
          <Icon name="info-circle" size="3xl" color="var(--gov-neutral-400)" />
          <span className="icon-color-demo__label">neutral-400</span>
        </div>
        <div className="icon-color-demo__item">
          <Icon name="heart" size="3xl" color="var(--gov-visited-600)" />
          <span className="icon-color-demo__label">visited-600</span>
        </div>
      </div>

      <h4 style={{ color: 'var(--gov-neutral-0)', marginTop: 'var(--gov-space-xl)', marginBottom: 'var(--gov-space-s)' }}>
        Semantic Icon Colors
      </h4>
      <div className="icon-color-demo">
        <div className="icon-color-demo__item">
          <Icon name="gear" size="3xl" color="var(--gov-icon-default)" />
          <span className="icon-color-demo__label">--gov-icon-default</span>
        </div>
        <div className="icon-color-demo__item">
          <Icon name="star" size="3xl" color="var(--gov-icon-secondary)" />
          <span className="icon-color-demo__label">--gov-icon-secondary</span>
        </div>
        <div className="icon-color-demo__item">
          <Icon name="check-circle-fill" size="3xl" color="var(--gov-icon-success)" />
          <span className="icon-color-demo__label">--gov-icon-success</span>
        </div>
        <div className="icon-color-demo__item">
          <Icon name="exclamation-triangle" size="3xl" color="var(--gov-icon-warning)" />
          <span className="icon-color-demo__label">--gov-icon-warning</span>
        </div>
        <div className="icon-color-demo__item">
          <Icon name="x-circle-fill" size="3xl" color="var(--gov-icon-error)" />
          <span className="icon-color-demo__label">--gov-icon-error</span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Icon Colors

Icons support any CSS color value, including GOV.cz design tokens.

### Semantic Icon Tokens
The design system provides semantic icon color tokens:
- \`--gov-icon-default\`: Default icon color
- \`--gov-icon-secondary\`: Secondary/accent icon color
- \`--gov-icon-success\`: Success state
- \`--gov-icon-warning\`: Warning state
- \`--gov-icon-error\`: Error state
- \`--gov-icon-disabled\`: Disabled state

### Usage
\`\`\`jsx
<Icon name="check" color="var(--gov-success-600)" />
<Icon name="exclamation-triangle" color="var(--gov-warning-500)" />
<Icon name="x-circle" color="var(--gov-error-600)" />
\`\`\`
        `,
      },
    },
  },
};

// ============================================================
//  NAVIGATION ICONS
// ============================================================

export const NavigationIcons = {
  render: () => (
    <div className="icon-docs">
      <h3 style={{ color: 'var(--gov-neutral-0)', marginBottom: 'var(--gov-space-m)' }}>
        Navigation & UI Icons
      </h3>
      <div className="icon-grid">
        {[
          'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down',
          'chevron-left', 'chevron-right', 'chevron-up', 'chevron-down',
          'x', 'x-circle', 'check', 'check-circle',
          'plus', 'dash', 'three-dots', 'menu'
        ].map((iconName) => (
          <div key={iconName} className="icon-grid__item">
            <Icon name={iconName} size="2xl" />
            <span className="icon-grid__name">{iconName}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

// ============================================================
//  ACTION ICONS
// ============================================================

export const ActionIcons = {
  render: () => (
    <div className="icon-docs">
      <h3 style={{ color: 'var(--gov-neutral-0)', marginBottom: 'var(--gov-space-m)' }}>
        Action Icons
      </h3>
      <div className="icon-grid">
        {[
          'search', 'download', 'upload', 'share',
          'copy', 'trash', 'pencil', 'gear',
          'filter', 'sort', 'refresh', 'print', 'save'
        ].map((iconName) => (
          <div key={iconName} className="icon-grid__item">
            <Icon name={iconName} size="2xl" />
            <span className="icon-grid__name">{iconName}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

// ============================================================
//  STATUS ICONS
// ============================================================

export const StatusIcons = {
  render: () => (
    <div className="icon-docs">
      <h3 style={{ color: 'var(--gov-neutral-0)', marginBottom: 'var(--gov-space-m)' }}>
        Status & Feedback Icons
      </h3>
      <div className="icon-grid">
        {[
          'info-circle', 'question-circle', 'exclamation-circle', 'exclamation-triangle',
          'check-circle-fill', 'x-circle-fill'
        ].map((iconName) => (
          <div key={iconName} className="icon-grid__item">
            <Icon name={iconName} size="2xl" />
            <span className="icon-grid__name">{iconName}</span>
          </div>
        ))}
      </div>

      <h4 style={{ color: 'var(--gov-neutral-0)', marginTop: 'var(--gov-space-xl)', marginBottom: 'var(--gov-space-m)' }}>
        Status Icons with Semantic Colors
      </h4>
      <div className="icon-color-demo">
        <div className="icon-color-demo__item">
          <Icon name="info-circle" size="3xl" color="var(--gov-primary-500)" />
          <span className="icon-color-demo__label">Info</span>
        </div>
        <div className="icon-color-demo__item">
          <Icon name="check-circle-fill" size="3xl" color="var(--gov-success-500)" />
          <span className="icon-color-demo__label">Success</span>
        </div>
        <div className="icon-color-demo__item">
          <Icon name="exclamation-triangle" size="3xl" color="var(--gov-warning-500)" />
          <span className="icon-color-demo__label">Warning</span>
        </div>
        <div className="icon-color-demo__item">
          <Icon name="x-circle-fill" size="3xl" color="var(--gov-error-500)" />
          <span className="icon-color-demo__label">Error</span>
        </div>
      </div>
    </div>
  ),
};

// ============================================================
//  BOOTSTRAP ICONS CDN DEMO
// ============================================================

export const BootstrapIconsCDN = {
  render: () => (
    <div className="icon-docs">
      {/* Bootstrap Icons Info */}
      <div className="bootstrap-icons-info">
        <h2 className="bootstrap-icons-info__title">
          <Icon name="box-arrow-up-right" size="2xl" color="var(--gov-secondary-400)" />
          Bootstrap Icons CDN
        </h2>
        <p className="bootstrap-icons-info__description">
          For access to the <strong>full library of 2000+ icons</strong>, include the Bootstrap Icons CSS via CDN.
          This provides icons for every use case including social media, file types, devices, and more.
        </p>
        <a 
          href="https://icons.getbootstrap.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bootstrap-icons-info__link"
        >
          Browse All Bootstrap Icons →
        </a>
        
        <div className="bootstrap-icons-info__code">
          <strong>Step 1: Add CDN to index.html</strong><br/>
          <code>&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"&gt;</code>
          <br/><br/>
          <strong>Step 2: Use BootstrapIcon component</strong><br/>
          <code>import &#123; BootstrapIcon &#125; from './components/Icon';</code><br/>
          <code>&lt;BootstrapIcon name="github" size="xl" /&gt;</code>
          <br/><br/>
          <strong>Or use the CSS class directly:</strong><br/>
          <code>&lt;i className="bi bi-github" style=&#123;&#123; fontSize: '24px' &#125;&#125;&gt;&lt;/i&gt;</code>
        </div>
      </div>

      <h3 style={{ color: 'var(--gov-neutral-0)', marginBottom: 'var(--gov-space-m)' }}>
        Popular Bootstrap Icons Examples
      </h3>
      <p style={{ color: 'var(--gov-neutral-400)', marginBottom: 'var(--gov-space-l)', fontStyle: 'italic' }}>
        Note: These icons require the Bootstrap Icons CDN to be loaded. If you don't see icons below, add the CDN link above to your index.html.
      </p>
      
      <div className="icon-grid">
        {[
          'github', 'twitter', 'facebook', 'linkedin',
          'youtube', 'instagram', 'whatsapp', 'discord',
          'slack', 'microsoft', 'apple', 'google',
          'android', 'windows', 'browser-chrome', 'browser-firefox'
        ].map((iconName) => (
          <div key={iconName} className="icon-grid__item">
            <BootstrapIcon name={iconName} size="2xl" color="var(--gov-primary-400)" />
            <span className="icon-grid__name">{iconName}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Bootstrap Icons CDN Integration

For the complete icon library, use Bootstrap Icons via CDN. This gives you access to:
- 2000+ icons
- Social media icons (GitHub, Twitter, Facebook, etc.)
- File type icons (PDF, Word, Excel, etc.)
- Device icons (phone, tablet, laptop, etc.)
- And much more!

### Installation
1. Add the CDN link to your \`index.html\`:
   \`\`\`html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
   \`\`\`

2. Use the \`BootstrapIcon\` component:
   \`\`\`jsx
   <BootstrapIcon name="github" size="xl" />
   \`\`\`

### Or use native HTML
\`\`\`html
<i class="bi bi-github" style="font-size: 24px;"></i>
\`\`\`
        `,
      },
    },
  },
};

// ============================================================
//  USAGE IN CONTEXT
// ============================================================

export const UsageExamples = {
  render: () => (
    <div className="icon-docs">
      <h3 style={{ color: 'var(--gov-neutral-0)', marginBottom: 'var(--gov-space-m)' }}>
        Icon Usage Examples
      </h3>

      {/* Inline with Text */}
      <div style={{ 
        background: 'var(--gov-neutral-900)', 
        padding: 'var(--gov-space-l)', 
        borderRadius: 'var(--gov-radius-m)',
        marginBottom: 'var(--gov-space-m)'
      }}>
        <h4 style={{ color: 'var(--gov-neutral-200)', marginBottom: 'var(--gov-space-s)' }}>
          Inline with Text
        </h4>
        <p style={{ color: 'var(--gov-neutral-0)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon name="envelope" size="md" color="var(--gov-primary-400)" />
          Contact us at support@gov.cz
        </p>
        <p style={{ color: 'var(--gov-neutral-0)', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
          <Icon name="telephone" size="md" color="var(--gov-primary-400)" />
          +420 123 456 789
        </p>
        <p style={{ color: 'var(--gov-neutral-0)', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
          <Icon name="geo-alt" size="md" color="var(--gov-primary-400)" />
          Praha, Czech Republic
        </p>
      </div>

      {/* Button Examples */}
      <div style={{ 
        background: 'var(--gov-neutral-900)', 
        padding: 'var(--gov-space-l)', 
        borderRadius: 'var(--gov-radius-m)',
        marginBottom: 'var(--gov-space-m)'
      }}>
        <h4 style={{ color: 'var(--gov-neutral-200)', marginBottom: 'var(--gov-space-s)' }}>
          In Buttons
        </h4>
        <div style={{ display: 'flex', gap: 'var(--gov-space-m)', flexWrap: 'wrap' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'var(--gov-primary-600)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--gov-radius-s)',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            <Icon name="download" size="md" />
            Download
          </button>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'var(--gov-success-600)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--gov-radius-s)',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            <Icon name="check" size="md" />
            Confirm
          </button>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'var(--gov-error-600)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--gov-radius-s)',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            <Icon name="trash" size="md" />
            Delete
          </button>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            background: 'var(--gov-neutral-700)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--gov-radius-s)',
            cursor: 'pointer'
          }}>
            <Icon name="gear" size="lg" />
          </button>
        </div>
      </div>

      {/* Alert Examples */}
      <div style={{ 
        background: 'var(--gov-neutral-900)', 
        padding: 'var(--gov-space-l)', 
        borderRadius: 'var(--gov-radius-m)'
      }}>
        <h4 style={{ color: 'var(--gov-neutral-200)', marginBottom: 'var(--gov-space-s)' }}>
          In Alerts
        </h4>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '16px',
          background: 'var(--gov-success-950)',
          border: '1px solid var(--gov-success-600)',
          borderRadius: 'var(--gov-radius-s)',
          marginBottom: '12px'
        }}>
          <Icon name="check-circle-fill" size="xl" color="var(--gov-success-500)" />
          <div>
            <strong style={{ color: 'var(--gov-success-400)' }}>Success!</strong>
            <p style={{ color: 'var(--gov-neutral-200)', margin: 0 }}>Your form has been submitted successfully.</p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '16px',
          background: 'var(--gov-warning-950)',
          border: '1px solid var(--gov-warning-600)',
          borderRadius: 'var(--gov-radius-s)',
          marginBottom: '12px'
        }}>
          <Icon name="exclamation-triangle" size="xl" color="var(--gov-warning-500)" />
          <div>
            <strong style={{ color: 'var(--gov-warning-400)' }}>Warning</strong>
            <p style={{ color: 'var(--gov-neutral-200)', margin: 0 }}>Please review your information before proceeding.</p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '16px',
          background: 'var(--gov-error-950)',
          border: '1px solid var(--gov-error-600)',
          borderRadius: 'var(--gov-radius-s)'
        }}>
          <Icon name="x-circle-fill" size="xl" color="var(--gov-error-500)" />
          <div>
            <strong style={{ color: 'var(--gov-error-400)' }}>Error</strong>
            <p style={{ color: 'var(--gov-neutral-200)', margin: 0 }}>Something went wrong. Please try again.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Usage Examples

Icons are commonly used in:
- **Inline with text**: Contact information, lists, labels
- **Buttons**: Action buttons with descriptive icons
- **Alerts**: Status indicators in feedback messages
- **Navigation**: Menu items, breadcrumbs, pagination

### Accessibility
Always provide meaningful \`title\` prop for decorative icons that convey information:
\`\`\`jsx
<Icon name="envelope" title="Email" />
\`\`\`

For purely decorative icons, the component automatically sets \`aria-hidden="true"\`.
        `,
      },
    },
  },
};

