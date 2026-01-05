import { SizeTokens, SizeBar, SizeBox, LineHeightDemo, SizeTokenTable } from './SizeTokens';
import './SizeTokens.css';

export default {
  title: 'Design Tokens/Size',
  component: SizeTokens,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
};

/* ========================================
   GOV.cz Design System Size Tokens
   Source: Figma gov-materials-4-2-5
   Reference: https://designsystem.gov.cz/principy/velikostni-tokeny.html
   ======================================== */

// ============================================================
//  SPACING TOKENS
// ============================================================

const spacingTokens = [
  { name: 'none', value: '0px', cssVar: '--gov-space-none', description: 'No spacing' },
  { name: '2xs', value: '4px', cssVar: '--gov-space-2xs', description: 'Extra extra small' },
  { name: 'xs', value: '8px', cssVar: '--gov-space-xs', description: 'Extra small' },
  { name: 'xs-nudge', value: '10px', cssVar: '--gov-space-xs-nudge', description: 'XS with nudge' },
  { name: 's', value: '12px', cssVar: '--gov-space-s', description: 'Small' },
  { name: 's-nudge', value: '14px', cssVar: '--gov-space-s-nudge', description: 'Small with nudge' },
  { name: 'm', value: '16px', cssVar: '--gov-space-m', description: 'Medium (base)' },
  { name: 'm-nudge', value: '20px', cssVar: '--gov-space-m-nudge', description: 'Medium with nudge' },
  { name: 'l', value: '24px', cssVar: '--gov-space-l', description: 'Large' },
  { name: 'xl', value: '32px', cssVar: '--gov-space-xl', description: 'Extra large' },
  { name: '2xl', value: '40px', cssVar: '--gov-space-2xl', description: '2× extra large' },
  { name: '3xl', value: '48px', cssVar: '--gov-space-3xl', description: '3× extra large' },
  { name: '4xl', value: '56px', cssVar: '--gov-space-4xl', description: '4× extra large' },
  { name: '5xl', value: '64px', cssVar: '--gov-space-5xl', description: '5× extra large' },
  { name: '6xl', value: '72px', cssVar: '--gov-space-6xl', description: '6× extra large' },
  { name: '7xl', value: '80px', cssVar: '--gov-space-7xl', description: '7× extra large' },
  { name: '8xl', value: '120px', cssVar: '--gov-space-8xl', description: '8× extra large (max)' },
];

export const SpacingTokens = {
  render: () => (
    <div className="size-tokens-docs">
      {/* Info Box (Unified Design) */}
      <div className="size-info-box">
        <h1 className="size-info-box__title">
          Size & Spacing System
        </h1>
        <p className="size-info-box__description">
          The GOV.cz Design System uses a consistent set of size tokens for spacing, components, and layout. 
          This ensures vertical and horizontal rhythm across all applications.
        </p>
        <a 
          href="https://designsystem.gov.cz/principy/velikostni-tokeny.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="size-info-box__link"
        >
          Official Documentation: Size Tokens
        </a>
      </div>

      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Spacing Tokens
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Consistent spacing values for gaps, margins, and paddings across all components.
      </p>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Visual Scale</h1>
        </div>
        {spacingTokens.map((token, i) => (
          <SizeBar 
            key={i} 
            name={token.name} 
            value={token.value} 
            cssVar={token.cssVar}
            maxValue={120}
            description={token.description}
          />
        ))}
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Token Reference</h1>
        </div>
        <SizeTokenTable tokens={spacingTokens} />
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Usage Guidelines</h1>
        </div>
        <div className="usage-guidelines">
          <div className="guideline-section guideline-section--do">
            <h3>Do's</h3>
            <ul>
              <li>Use spacing tokens for all gaps, margins, and paddings</li>
              <li>Start with base size (m = 16px) and scale up/down</li>
              <li>Use "nudge" variants for fine adjustments</li>
              <li>Maintain consistent spacing rhythm across components</li>
            </ul>
          </div>
          <div className="guideline-section guideline-section--dont">
            <h3>Don'ts</h3>
            <ul>
              <li>Use arbitrary pixel values outside the token scale</li>
              <li>Mix spacing tokens inconsistently</li>
              <li>Override spacing tokens without good reason</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Code Example</h1>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">CSS Usage</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`.card {
  padding: var(--gov-space-m);      /* 16px */
  margin-bottom: var(--gov-space-l); /* 24px */
  gap: var(--gov-space-s);           /* 12px */
}

.button-group {
  gap: var(--gov-space-xs);          /* 8px */
}

.section {
  padding: var(--gov-space-3xl) var(--gov-space-xl);
}`}</pre>
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Spacing Tokens - GOV.cz Design System

Spacing tokens define consistent gaps, margins, and paddings.

### Scale Overview
| Token | Value | Common Usage |
|-------|-------|--------------|
| \`2xs\` | 4px | Tight spacing, icon gaps |
| \`xs\` | 8px | Small gaps, compact layouts |
| \`s\` | 12px | Default small spacing |
| \`m\` | 16px | Base spacing (default) |
| \`l\` | 24px | Section padding |
| \`xl\` | 32px | Large section gaps |
| \`2xl-8xl\` | 40-120px | Hero sections, page margins |
        `
      }
    }
  }
};

// ============================================================
//  COMPONENT HEIGHT TOKENS
// ============================================================

const componentHeightTokens = [
  { name: 'xs', value: '24px', cssVar: '--gov-height-component-xs', description: 'Extra small components (chips, badges)' },
  { name: 's', value: '32px', cssVar: '--gov-height-component-s', description: 'Small buttons, compact inputs' },
  { name: 'm', value: '40px', cssVar: '--gov-height-component-m', description: 'Standard buttons, inputs (default)' },
  { name: 'l', value: '48px', cssVar: '--gov-height-component-l', description: 'Large buttons, prominent CTAs' },
  { name: 'xl', value: '56px', cssVar: '--gov-height-component-xl', description: 'Extra large, hero buttons' },
];

export const ComponentHeights = {
  render: () => (
    <div className="size-tokens-docs">
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Component Height Tokens
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Standardized heights for interactive components like buttons, inputs, and selects.
      </p>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Visual Scale</h1>
        </div>
        <div className="component-height-demos">
          {componentHeightTokens.map((token, i) => (
            <div key={i} className="component-height-demo">
              <div 
                className="component-height-demo__visual"
                style={{ height: token.value }}
              >
                Button {token.name.toUpperCase()}
              </div>
              <div className="component-height-demo__meta">
                <span className="component-height-demo__name">{token.name}</span>
                <span className="component-height-demo__value">{token.value}</span>
                <code className="component-height-demo__var">{token.cssVar}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Token Reference</h1>
        </div>
        <SizeTokenTable tokens={componentHeightTokens} />
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Usage Guidelines</h1>
        </div>
        <div className="usage-guidelines">
          <div className="guideline-section guideline-section--do">
            <h3>Do's</h3>
            <ul>
              <li>Use consistent heights within component groups</li>
              <li>Match button heights with adjacent inputs</li>
              <li>Use size M (40px) as the default for most UI</li>
              <li>Use size L/XL for primary CTAs and hero sections</li>
            </ul>
          </div>
          <div className="guideline-section guideline-section--dont">
            <h3>Don'ts</h3>
            <ul>
              <li>Mix different heights in the same row</li>
              <li>Use XS for important actions (too small for touch)</li>
              <li>Set custom heights outside the token scale</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Code Example</h1>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">CSS Usage</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`.button {
  height: var(--gov-height-component-m);  /* 40px default */
}

.button--small {
  height: var(--gov-height-component-s);  /* 32px */
}

.button--large {
  height: var(--gov-height-component-l);  /* 48px */
}

.input {
  height: var(--gov-height-component-m);  /* Match button height */
}`}</pre>
          </div>
        </div>
      </section>
    </div>
  ),
};

// ============================================================
//  LINE HEIGHT TOKENS
// ============================================================

const lineHeightTokens = [
  { name: 'xs', value: '18px', cssVar: '--gov-height-line-xs', fontSize: '12px' },
  { name: 's', value: '21px', cssVar: '--gov-height-line-s', fontSize: '14px' },
  { name: 'm', value: '24px', cssVar: '--gov-height-line-m', fontSize: '16px' },
  { name: 'l', value: '27px', cssVar: '--gov-height-line-l', fontSize: '18px' },
  { name: 'xl', value: '30px', cssVar: '--gov-height-line-xl', fontSize: '20px' },
  { name: '2xl', value: '36px', cssVar: '--gov-height-line-2xl', fontSize: '24px' },
  { name: '3xl', value: '48px', cssVar: '--gov-height-line-3xl', fontSize: '32px' },
];

export const LineHeights = {
  render: () => (
    <div className="size-tokens-docs">
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Line Height Tokens
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Fixed line heights for aligning icons with the first line of multi-line text.
      </p>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Visual Demonstration</h1>
          <span className="size-section__subtitle">Icon aligned to first line height</span>
        </div>
        <div className="line-height-demos">
          {lineHeightTokens.map((token, i) => (
            <LineHeightDemo 
              key={i}
              name={token.name}
              value={token.value}
              cssVar={token.cssVar}
              fontSize={token.fontSize}
            />
          ))}
        </div>
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Token Reference</h1>
        </div>
        <SizeTokenTable tokens={lineHeightTokens.map(t => ({
          ...t,
          description: `Pairs with font-size ${t.fontSize}`
        }))} />
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Code Example</h1>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">Icon Alignment Pattern</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`/* Align icon to first line of text */
.list-item {
  display: flex;
  align-items: flex-start;
}

.list-item__icon {
  height: var(--gov-height-line-m);  /* 24px - matches text line height */
  display: flex;
  align-items: center;
}

.list-item__text {
  font-size: 16px;
  line-height: var(--gov-height-line-m);  /* 24px */
}`}</pre>
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Line Height Tokens - GOV.cz Design System

Line height tokens provide fixed pixel values for precise vertical alignment, especially useful for aligning icons with the first line of multi-line text blocks.

### Key Use Case
> "Hodí se např., když potřebujeme zarovnat ikonu na střed prvního řádku víceřádkového textu."
> (Useful when we need to align an icon to the center of the first line in multi-line text)

Source: [designsystem.gov.cz](https://designsystem.gov.cz/principy/velikostni-tokeny.html)
        `
      }
    }
  }
};

// ============================================================
//  ICON SIZE TOKENS
// ============================================================

const iconSizeTokens = [
  { name: 'xs', value: '12px', cssVar: '--gov-icon-xs', description: 'Inline micro icons' },
  { name: 's', value: '14px', cssVar: '--gov-icon-s', description: 'Small inline icons' },
  { name: 'm', value: '16px', cssVar: '--gov-icon-m', description: 'Default icon size' },
  { name: 'l', value: '18px', cssVar: '--gov-icon-l', description: 'Slightly larger icons' },
  { name: 'xl', value: '20px', cssVar: '--gov-icon-xl', description: 'Button icons' },
  { name: '2xl', value: '24px', cssVar: '--gov-icon-2xl', description: 'Navigation icons' },
  { name: '3xl', value: '32px', cssVar: '--gov-icon-3xl', description: 'Feature icons' },
  { name: '4xl', value: '40px', cssVar: '--gov-icon-4xl', description: 'Large feature icons' },
  { name: '5xl', value: '48px', cssVar: '--gov-icon-5xl', description: 'Hero icons' },
];

export const IconSizes = {
  render: () => (
    <div className="size-tokens-docs">
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Icon Size Tokens
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Standardized dimensions for icons across the design system.
      </p>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Visual Scale</h1>
        </div>
        <div className="size-boxes-grid">
          {iconSizeTokens.map((token, i) => (
            <SizeBox 
              key={i}
              name={token.name}
              value={token.value}
              cssVar={token.cssVar}
              type="icon"
              description={token.description}
            />
          ))}
        </div>
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Token Reference</h1>
        </div>
        <SizeTokenTable tokens={iconSizeTokens} />
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Code Example</h1>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">CSS Usage</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`.icon {
  width: var(--gov-icon-m);   /* 16px */
  height: var(--gov-icon-m);  /* 16px */
}

.icon--small {
  width: var(--gov-icon-s);   /* 14px */
  height: var(--gov-icon-s);
}

.button .icon {
  width: var(--gov-icon-xl);  /* 20px - for button icons */
  height: var(--gov-icon-xl);
}

.feature-card .icon {
  width: var(--gov-icon-3xl); /* 32px */
  height: var(--gov-icon-3xl);
}`}</pre>
          </div>
        </div>
      </section>
    </div>
  ),
};

// ============================================================
//  CORNER RADIUS TOKENS
// ============================================================

const cornerRadiusTokens = [
  { name: 'none', value: '0px', cssVar: '--gov-radius-none', description: 'Sharp corners' },
  { name: '2xs', value: '2px', cssVar: '--gov-radius-2xs', description: 'Subtle rounding' },
  { name: 'xs', value: '4px', cssVar: '--gov-radius-xs', description: 'Default small radius' },
  { name: 'xs-nudge', value: '6px', cssVar: '--gov-radius-xs-nudge', description: 'XS with nudge' },
  { name: 's', value: '8px', cssVar: '--gov-radius-s', description: 'Standard radius' },
  { name: 's-nudge', value: '12px', cssVar: '--gov-radius-s-nudge', description: 'S with nudge' },
  { name: 'm', value: '16px', cssVar: '--gov-radius-m', description: 'Medium radius' },
  { name: 'm-nudge', value: '20px', cssVar: '--gov-radius-m-nudge', description: 'M with nudge' },
  { name: 'l', value: '24px', cssVar: '--gov-radius-l', description: 'Large radius' },
  { name: 'xl', value: '32px', cssVar: '--gov-radius-xl', description: 'Extra large radius' },
  { name: '2xl', value: '40px', cssVar: '--gov-radius-2xl', description: 'Maximum radius' },
];

export const CornerRadius = {
  render: () => (
    <div className="size-tokens-docs">
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Corner Radius Tokens
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Border radius values for rounded corners. This is one of the few safe tokens to customize.
      </p>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Visual Scale</h1>
        </div>
        <div className="size-boxes-grid">
          {cornerRadiusTokens.map((token, i) => (
            <SizeBox 
              key={i}
              name={token.name}
              value={token.value}
              cssVar={token.cssVar}
              type="radius"
              description={token.description}
            />
          ))}
        </div>
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Token Reference</h1>
        </div>
        <SizeTokenTable tokens={cornerRadiusTokens} />
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Customization Note</h1>
        </div>
        <div className="usage-guidelines">
          <div className="guideline-section guideline-section--warning">
            <h3>Official Guidance</h3>
            <ul>
              <li>Corner radius is one of the <strong>few tokens safe to customize</strong></li>
              <li>Adjusting radius can give the design a friendlier appearance</li>
              <li>Most other size tokens should NOT be modified due to complex relationships</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Code Example</h1>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">CSS Usage</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`.button {
  border-radius: var(--gov-radius-xs);  /* 4px */
}

.card {
  border-radius: var(--gov-radius-s);   /* 8px */
}

.modal {
  border-radius: var(--gov-radius-m);   /* 16px */
}

.avatar {
  border-radius: var(--gov-radius-2xl); /* 40px - fully round */
}`}</pre>
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Corner Radius Tokens - GOV.cz Design System

Corner radius tokens control the roundedness of component corners.

### Customization
Unlike other size tokens, corner radius is **explicitly marked as safe to customize**:

> "Doporučujeme provádět pouze menší úpravy, jako je například změna zaoblení rohů pomocí tokenu \`--corner-radius\`, což může dodat designu přátelštější vzhled."

Source: [designsystem.gov.cz](https://designsystem.gov.cz/principy/velikostni-tokeny.html)
        `
      }
    }
  }
};

// ============================================================
//  MULTILINE PADDING TOKENS
// ============================================================

const multilinePaddingTokens = [
  { name: 'xs', value: '3px', cssVar: '--gov-space-multiline-vertical-padding-xs', description: 'Extra small inputs' },
  { name: 's', value: '5px', cssVar: '--gov-space-multiline-vertical-padding-s', description: 'Small inputs' },
  { name: 'm', value: '8px', cssVar: '--gov-space-multiline-vertical-padding-m', description: 'Default inputs' },
  { name: 'l', value: '10px', cssVar: '--gov-space-multiline-vertical-padding-l', description: 'Large inputs' },
  { name: 'xl', value: '13px', cssVar: '--gov-space-multiline-vertical-padding-xl', description: 'Extra large inputs' },
];

export const MultilinePadding = {
  render: () => (
    <div className="size-tokens-docs">
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Multiline Vertical Padding
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Specialized vertical padding for multiline components like textareas and multi-row inputs.
      </p>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Visual Scale</h1>
        </div>
        {multilinePaddingTokens.map((token, i) => (
          <SizeBar 
            key={i} 
            name={token.name} 
            value={token.value} 
            cssVar={token.cssVar}
            maxValue={16}
            description={token.description}
          />
        ))}
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Token Reference</h1>
        </div>
        <SizeTokenTable tokens={multilinePaddingTokens} />
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Usage Note</h1>
        </div>
        <div className="usage-guidelines">
          <div className="guideline-section guideline-section--do">
            <h3>Purpose</h3>
            <ul>
              <li>Used for vertical padding in multiline form controls</li>
              <li>The <code>--gov-height-component-*</code> token defines the <strong>minimum height</strong> (single-line)</li>
              <li>Multiline components grow beyond this minimum using these padding values</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Code Example</h1>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">Textarea Pattern</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`/* Multiline input with proper padding */
.textarea {
  min-height: var(--gov-height-component-m);  /* 40px minimum */
  padding-top: var(--gov-space-multiline-vertical-padding-m);    /* 8px */
  padding-bottom: var(--gov-space-multiline-vertical-padding-m); /* 8px */
  padding-left: var(--gov-space-m);
  padding-right: var(--gov-space-m);
}

.textarea--large {
  min-height: var(--gov-height-component-l);  /* 48px minimum */
  padding-top: var(--gov-space-multiline-vertical-padding-l);    /* 10px */
  padding-bottom: var(--gov-space-multiline-vertical-padding-l); /* 10px */
}`}</pre>
          </div>
        </div>
      </section>
    </div>
  ),
};

// ============================================================
//  COMPLETE OVERVIEW
// ============================================================

export const CompleteOverview = {
  render: () => (
    <div className="size-tokens-docs">
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Size Tokens Overview
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Complete reference of all size tokens in the GOV.cz Design System.
      </p>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Token Categories</h1>
        </div>
        <SizeTokenTable 
          tokens={[
            { name: 'Spacing', value: '0-120px', cssVar: '--gov-space-{size}', description: 'Gaps, margins, paddings' },
            { name: 'Component Height', value: '24-56px', cssVar: '--gov-height-component-{size}', description: 'Button, input heights' },
            { name: 'Line Height', value: '18-48px', cssVar: '--gov-height-line-{size}', description: 'Text line heights for icon alignment' },
            { name: 'Icon Size', value: '12-48px', cssVar: '--gov-icon-{size}', description: 'Icon dimensions' },
            { name: 'Corner Radius', value: '0-40px', cssVar: '--gov-radius-{size}', description: 'Border radius (customizable)' },
            { name: 'Multiline Padding', value: '3-13px', cssVar: '--gov-space-multiline-vertical-padding-{size}', description: 'Textarea vertical padding' },
            { name: 'Font Size', value: '12-56px', cssVar: '--gov-font-{category}-{size}', description: 'Text sizes (see Typography)' },
          ]}
        />
      </section>

      <section className="size-section">
        <div className="size-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Modification Guidelines</h1>
        </div>
        <div className="usage-guidelines">
          <div className="guideline-section guideline-section--warning">
            <h3>Official Warning</h3>
            <ul>
              <li><strong>Extensive modifications are NOT recommended</strong></li>
              <li>Complex relationships exist between tokens and components</li>
              <li>Improper changes can disrupt proportions and consistency</li>
              <li>Only <code>--corner-radius</code> is explicitly safe to customize</li>
            </ul>
          </div>
          <div className="guideline-section guideline-section--do">
            <h3>Safe Changes</h3>
            <ul>
              <li>Corner radius (for friendlier appearance)</li>
              <li>Minor adjustments within existing scale</li>
              <li>Use provided "nudge" variants for fine-tuning</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Size Tokens - GOV.cz Design System

Size tokens provide consistent dimensions across the entire design system.

### Categories
1. **Spacing** - Gaps, margins, paddings
2. **Component Heights** - Interactive element heights
3. **Line Heights** - For icon alignment in text
4. **Icon Sizes** - Standardized icon dimensions
5. **Corner Radius** - Border roundness (safe to customize)
6. **Multiline Padding** - Textarea/multiline input padding
7. **Font Sizes** - See Typography documentation

### Key Principle
> "Rozsáhlejší úpravy velikostních tokenů nedoporučujeme"
> (Extensive modifications to size tokens are not recommended)

Source: [designsystem.gov.cz](https://designsystem.gov.cz/principy/velikostni-tokeny.html)
        `
      }
    }
  }
};

