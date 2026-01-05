import { TypographyTokens } from './TypographyTokens';
import { TypeScale, ResponsivePreview, TokenTable, UsageGuidelines, AccessibilityInfo } from './TypeScale';
import './TypeScale.css';

export default {
  title: 'Design Tokens/Typography',
  component: TypographyTokens,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
};

/* ========================================
   GOV.cz Design System Typography
   Source: Figma gov-materials-4-2-5
   Nodes: 5098:1112 (Typography Scale), 5097:683 (Fonts)
   
   COMPLETE TYPOGRAPHY SCALE FROM FIGMA:
   =====================================
   Font Family: Roboto
   
   DISPLAY (Hero, Landing):
   - display-l: 56px → 52px, Medium (500), LH 1.25
   - display-m: 48px → 42px, Medium (500), LH 1.25
   - display-s: 40px → 36px, Medium (500), LH 1.30
   
   HEADLINE (Page Structure):
   - headline-xl: 40px → 38px, Medium (500), LH 1.30
   - headline-l: 32px → 30px, Medium (500), LH 1.50
   - headline-m: 24px → 22px, Medium (500), LH 1.50
   - headline-s: 20px → 18px, Medium (500), LH 1.50
   - headline-xs: 18px → 16px, Medium (500), LH 1.50
   
   BODY (Content - includes Bold variants):
   - body-xl: 20px, Regular (400) + Bold (700), LH 1.50
   - body-l: 18px, Regular (400) + Bold (700), LH 1.50
   - body-m: 16px, Regular (400) + Bold (700), LH 1.50
   - body-s: 14px, Regular (400) + Bold (700), LH 1.50
   - body-xs: 12px, Regular (400) + Bold (700), LH 1.50
   ======================================== */


// ============================================================
//  1. DISPLAY STYLES - Hero & Landing Pages
// ============================================================

const displayScales = [
  { 
    name: 'display-l', 
    desktop: '56px',
    mobile: '52px',
    weight: '500 (Medium)',
    lineHeight: '1.25',
    letterSpacing: '0',
    sampleText: 'Vítejte na portálu občana',
    cssVar: '--gov-font-display-l',
  },
  { 
    name: 'display-m', 
    desktop: '48px',
    mobile: '42px',
    weight: '500 (Medium)',
    lineHeight: '1.25',
    letterSpacing: '0',
    sampleText: 'Digitální služby státu',
    cssVar: '--gov-font-display-m',
  },
  { 
    name: 'display-s', 
    desktop: '40px',
    mobile: '36px',
    weight: '500 (Medium)',
    lineHeight: '1.30',
    letterSpacing: '0',
    sampleText: 'Jednoduše a rychle online',
    cssVar: '--gov-font-display-s',
  },
];

const displayDos = [
  'Use for hero sections and landing page titles',
  'Limit to 1-2 display styles per page for maximum impact',
  'Pair with body-l or body-xl for supporting text',
  'Use Roboto Medium (500) weight consistently',
  'Test responsiveness - sizes auto-adjust at 768px',
];

const displayDonts = [
  'Use for regular page headings (use Headline instead)',
  'Stack multiple display sizes in sequence',
  'Apply to long paragraphs or body content',
  'Mix with other font families on same page',
  'Use in data tables, forms, or navigation',
];

const displayTips = [
  'Display-l is typically reserved for the main hero only',
  'Use display-s for secondary marketing callouts',
  'Consider display-m for section intros on long pages',
];

const displayAccessibility = [
  { status: 'good', text: 'Large text (≥24px): Minimum contrast ratio 3:1 required (WCAG AA)' },
  { status: 'good', text: 'All display sizes exceed 24px threshold for large text' },
  { status: 'warning', text: 'Avoid using display text in ALL CAPS for more than a few words' },
  { status: 'info', text: 'Ensure heading hierarchy is logical (don\'t skip levels for visual styling)' },
  { status: 'info', text: 'Test with screen readers to verify semantic HTML (h1-h6) is used' },
];

export const DisplayStyles = {
  render: () => (
    <div className="typography-docs">
      {/* Unified Info Box */}
      <div className="doc-info-box">
        <h1 className="doc-info-box__title">
          Typography System
        </h1>
        <p className="doc-info-box__description">
          The GOV.cz Design System uses Roboto as its primary typeface. The type scale is designed 
          for maximum legibility across all digital government services.
        </p>
        <a 
          href="https://designsystem.gov.cz/principy/typografie.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="doc-info-box__link"
        >
          Official Documentation: Typography
        </a>
      </div>

      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Display Typography
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Large, impactful text for hero sections and landing pages.
      </p>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Type Scale</h1>
          <span className="typography-section__subtitle">Visual size comparison</span>
        </div>
        <TypeScale scales={displayScales} fontFamily="'Roboto', sans-serif" showBars={true} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Responsive Sizes</h1>
          <span className="typography-section__subtitle">Desktop vs Mobile</span>
        </div>
        <ResponsivePreview scales={displayScales} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Token Reference</h1>
          <span className="typography-section__subtitle">CSS variables & values</span>
        </div>
        <TokenTable tokens={displayScales} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Usage Guidelines</h1>
        </div>
        <UsageGuidelines dos={displayDos} donts={displayDonts} tips={displayTips} />
      </section>

      <section className="typography-section">
        <AccessibilityInfo items={displayAccessibility} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Code Examples</h1>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">CSS Classes</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`.display-l {
  font-size: var(--gov-font-display-l);  /* 56px → 52px */
  font-weight: 500;
  line-height: 1.25;
  font-family: 'Roboto', sans-serif;
}

.display-m { font-size: var(--gov-font-display-m); /* 48px → 42px */ }
.display-s { font-size: var(--gov-font-display-s); /* 40px → 36px */ }`}</pre>
          </div>
        </div>
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Related Styles</h1>
        </div>
        <div className="related-styles">
          <div className="related-style">
            <span className="related-style__name">Headline Styles</span>
            <span className="related-style__desc">For page structure (H1-H6)</span>
          </div>
          <div className="related-style">
            <span className="related-style__name">Body Styles</span>
            <span className="related-style__desc">Pair display-l with body-xl</span>
          </div>
        </div>
      </section>
    </div>
  ),
};


// ============================================================
//  2. HEADLINE STYLES - Page Structure (H1-H6)
// ============================================================

const headlineScales = [
  { 
    name: 'headline-xl', 
    desktop: '40px',
    mobile: '38px',
    weight: '500 (Medium)',
    lineHeight: '1.30',
    letterSpacing: '0',
    sampleText: 'Žádost o občanský průkaz',
    cssVar: '--gov-font-headline-xl',
  },
  { 
    name: 'headline-l', 
    desktop: '32px',
    mobile: '30px',
    weight: '500 (Medium)',
    lineHeight: '1.50',
    letterSpacing: '0',
    sampleText: 'Potřebné dokumenty',
    cssVar: '--gov-font-headline-l',
  },
  { 
    name: 'headline-m', 
    desktop: '24px',
    mobile: '22px',
    weight: '500 (Medium)',
    lineHeight: '1.50',
    letterSpacing: '0.7488px',
    sampleText: 'Jak podat žádost',
    cssVar: '--gov-font-headline-m',
  },
  { 
    name: 'headline-s', 
    desktop: '20px',
    mobile: '18px',
    weight: '500 (Medium)',
    lineHeight: '1.50',
    letterSpacing: '0.25px',
    sampleText: 'Kontaktní informace',
    cssVar: '--gov-font-headline-s',
  },
  { 
    name: 'headline-xs', 
    desktop: '18px',
    mobile: '16px',
    weight: '500 (Medium)',
    lineHeight: '1.50',
    letterSpacing: '0.225px',
    sampleText: 'Úřední hodiny',
    cssVar: '--gov-font-headline-xs',
  },
];

const headlineDos = [
  'Use headline-xl for page titles (H1) - one per page',
  'Follow semantic heading hierarchy (H1 → H2 → H3...)',
  'Use headline-l for major sections (H2)',
  'Use headline-m/s/xs for subsections (H3-H6)',
  'Maintain consistent spacing after headings',
];

const headlineDonts = [
  'Skip heading levels (e.g., H1 → H3)',
  'Use for marketing/hero content (use Display instead)',
  'Apply to body text or long paragraphs',
  'Mix different heading styles for same level',
  'Use more than 6 heading levels',
];

const headlineTips = [
  'Map headline sizes to semantic HTML: xl=H1, l=H2, m=H3, s=H4, xs=H5/H6',
  'Card titles typically use headline-s or headline-xs',
  'Accordion headers work well with headline-m',
];

const headlineAccessibility = [
  { status: 'good', text: 'All headline sizes ≥16px meet minimum text size requirements' },
  { status: 'good', text: 'Medium weight (500) provides good legibility' },
  { status: 'warning', text: 'Don\'t skip heading levels - screen readers rely on hierarchy' },
  { status: 'info', text: 'Use aria-level for non-semantic headings in complex UIs' },
];

export const HeadlineStyles = {
  render: () => (
    <div className="typography-docs">
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Headline Typography
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Hierarchical headings for page structure and content organization.
      </p>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Type Scale</h1>
          <span className="typography-section__subtitle">H1 → H6 mapping</span>
        </div>
        <TypeScale scales={headlineScales} fontFamily="'Roboto', sans-serif" showBars={true} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Responsive Sizes</h1>
          <span className="typography-section__subtitle">Desktop vs Mobile</span>
        </div>
        <ResponsivePreview scales={headlineScales} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Token Reference</h1>
          <span className="typography-section__subtitle">CSS variables & values</span>
        </div>
        <TokenTable tokens={headlineScales} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Usage Guidelines</h1>
        </div>
        <UsageGuidelines dos={headlineDos} donts={headlineDonts} tips={headlineTips} />
      </section>

      <section className="typography-section">
        <AccessibilityInfo items={headlineAccessibility} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Code Examples</h1>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">HTML Semantic Mapping</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`<h1 class="headline-xl">Page Title</h1>      <!-- 40px → 38px -->
<h2 class="headline-l">Section Title</h2>   <!-- 32px → 30px -->
<h3 class="headline-m">Subsection</h3>      <!-- 24px → 22px -->
<h4 class="headline-s">Card Title</h4>      <!-- 20px → 18px -->
<h5 class="headline-xs">Minor Heading</h5>  <!-- 18px → 16px -->`}</pre>
          </div>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">CSS Classes</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`.headline-xl {
  font-size: var(--gov-font-headline-xl);
  font-weight: 500;
  line-height: 1.30;
  font-family: 'Roboto', sans-serif;
}

/* All headlines use Medium (500) weight */
.headline-l  { font-size: var(--gov-font-headline-l);  line-height: 1.50; }
.headline-m  { font-size: var(--gov-font-headline-m);  line-height: 1.50; }
.headline-s  { font-size: var(--gov-font-headline-s);  line-height: 1.50; }
.headline-xs { font-size: var(--gov-font-headline-xs); line-height: 1.50; }`}</pre>
          </div>
        </div>
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Related Styles</h1>
        </div>
        <div className="related-styles">
          <div className="related-style">
            <span className="related-style__name">Display Styles</span>
            <span className="related-style__desc">For hero/marketing content</span>
          </div>
          <div className="related-style">
            <span className="related-style__name">Body Styles</span>
            <span className="related-style__desc">Content following headings</span>
          </div>
        </div>
      </section>
    </div>
  ),
};


// ============================================================
//  3. BODY STYLES - Content Text (includes Bold variants)
// ============================================================

const bodyScales = [
  { 
    name: 'body-xl', 
    desktop: '20px',
    mobile: '20px',
    weight: '400 (Regular)',
    lineHeight: '1.50',
    letterSpacing: '0.25px',
    sampleText: 'Občanský průkaz je základní doklad totožnosti občana České republiky.',
    cssVar: '--gov-font-body-xl',
  },
  { 
    name: 'body-xl-bold', 
    desktop: '20px',
    mobile: '20px',
    weight: '700 (Bold)',
    lineHeight: '1.50',
    letterSpacing: '0.6px',
    sampleText: 'Důležité upozornění pro všechny občany.',
    cssVar: '--gov-font-body-xl',
  },
  { 
    name: 'body-l', 
    desktop: '18px',
    mobile: '18px',
    weight: '400 (Regular)',
    lineHeight: '1.50',
    letterSpacing: '0.225px',
    sampleText: 'Pro podání žádosti budete potřebovat platný doklad totožnosti.',
    cssVar: '--gov-font-body-l',
  },
  { 
    name: 'body-l-bold', 
    desktop: '18px',
    mobile: '18px',
    weight: '700 (Bold)',
    lineHeight: '1.50',
    letterSpacing: '0.225px',
    sampleText: 'Termín podání: do 30. června 2026',
    cssVar: '--gov-font-body-l',
  },
  { 
    name: 'body-m (default)', 
    desktop: '16px',
    mobile: '16px',
    weight: '400 (Regular)',
    lineHeight: '1.50',
    letterSpacing: '0.2px',
    sampleText: 'Žádost lze podat osobně na jakémkoliv obecním úřadě obce s rozšířenou působností.',
    cssVar: '--gov-font-body-m',
  },
  { 
    name: 'body-m-bold', 
    desktop: '16px',
    mobile: '16px',
    weight: '700 (Bold)',
    lineHeight: '1.50',
    letterSpacing: '0.2px',
    sampleText: 'Lhůta pro vyřízení je standardně 30 dnů.',
    cssVar: '--gov-font-body-m',
  },
  { 
    name: 'body-s', 
    desktop: '14px',
    mobile: '14px',
    weight: '400 (Regular)',
    lineHeight: '1.50',
    letterSpacing: '0.175px',
    sampleText: 'Správní poplatek činí 500 Kč. U osob mladších 15 let je poplatek 100 Kč.',
    cssVar: '--gov-font-body-s',
  },
  { 
    name: 'body-s-bold', 
    desktop: '14px',
    mobile: '14px',
    weight: '700 (Bold)',
    lineHeight: '1.50',
    letterSpacing: '0.175px',
    sampleText: 'Platba pouze v hotovosti nebo kartou.',
    cssVar: '--gov-font-body-s',
  },
  { 
    name: 'body-xs', 
    desktop: '12px',
    mobile: '12px',
    weight: '400 (Regular)',
    lineHeight: '1.50',
    letterSpacing: '0.2px',
    sampleText: 'Informace aktualizovány k 1. lednu 2026.',
    cssVar: '--gov-font-body-xs',
  },
  { 
    name: 'body-xs-bold', 
    desktop: '12px',
    mobile: '12px',
    weight: '700 (Bold)',
    lineHeight: '1.50',
    letterSpacing: '0.2px',
    sampleText: 'NOVÉ: Elektronické podání dostupné od 2026',
    cssVar: '--gov-font-body-xs',
  },
];

const bodyDos = [
  'Use body-m (16px) as the default for all paragraph text',
  'Use body-xl for lead paragraphs and introductory text',
  'Use bold variants for emphasis within paragraphs',
  'Maintain line-height 1.5 for optimal readability',
  'Limit line length to 60-80 characters',
];

const bodyDonts = [
  'Use body-xs for main content (only for captions/fine print)',
  'Apply heading styles to body content',
  'Use multiple bold styles in a single paragraph',
  'Mix font families within body text',
  'Justify text (use left-align for better readability)',
];

const bodyTips = [
  'Body-m is the workhorse - use it 80% of the time',
  'Bold variants are for inline emphasis, not whole paragraphs',
  'Pair body-s with headline-xs for card content',
];

const bodyAccessibility = [
  { status: 'good', text: 'body-m (16px) meets WCAG minimum text size recommendation' },
  { status: 'good', text: 'Line-height 1.5 provides excellent readability for dyslexic users' },
  { status: 'warning', text: 'body-xs (12px) is small - use sparingly for non-essential info' },
  { status: 'info', text: 'Ensure contrast ratio ≥4.5:1 for normal text, ≥3:1 for large text' },
  { status: 'info', text: 'Test with 200% browser zoom - text should remain readable' },
];

export const BodyStyles = {
  render: () => (
    <div className="typography-docs">
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Body Typography
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Content text styles with Regular and Bold variants for emphasis.
      </p>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Type Scale</h1>
          <span className="typography-section__subtitle">10 variants (5 sizes × Regular/Bold)</span>
        </div>
        <TypeScale scales={bodyScales} fontFamily="'Roboto', sans-serif" showBars={true} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Token Reference</h1>
          <span className="typography-section__subtitle">CSS variables & values</span>
        </div>
        <TokenTable tokens={bodyScales} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Usage Guidelines</h1>
        </div>
        <UsageGuidelines dos={bodyDos} donts={bodyDonts} tips={bodyTips} />
      </section>

      <section className="typography-section">
        <AccessibilityInfo items={bodyAccessibility} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Code Examples</h1>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">CSS Classes with Bold Variants</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`/* Regular variants */
.body-xl { font-size: var(--gov-font-body-xl); font-weight: 400; }
.body-l  { font-size: var(--gov-font-body-l);  font-weight: 400; }
.body-m  { font-size: var(--gov-font-body-m);  font-weight: 400; } /* Default */
.body-s  { font-size: var(--gov-font-body-s);  font-weight: 400; }
.body-xs { font-size: var(--gov-font-body-xs); font-weight: 400; }

/* Bold variants - same sizes, weight 700 */
.body-xl-bold { font-size: var(--gov-font-body-xl); font-weight: 700; }
.body-l-bold  { font-size: var(--gov-font-body-l);  font-weight: 700; }
.body-m-bold  { font-size: var(--gov-font-body-m);  font-weight: 700; }
.body-s-bold  { font-size: var(--gov-font-body-s);  font-weight: 700; }
.body-xs-bold { font-size: var(--gov-font-body-xs); font-weight: 700; }

/* All body styles share these properties */
.body-xl, .body-l, .body-m, .body-s, .body-xs,
.body-xl-bold, .body-l-bold, .body-m-bold, .body-s-bold, .body-xs-bold {
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
}`}</pre>
          </div>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">React: Inline Emphasis Pattern</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`<p className="body-m">
  Žádost lze podat osobně na <strong className="body-m-bold">jakémkoliv 
  obecním úřadě</strong> obce s rozšířenou působností.
</p>`}</pre>
          </div>
        </div>
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Related Styles</h1>
        </div>
        <div className="related-styles">
          <div className="related-style">
            <span className="related-style__name">Headline Styles</span>
            <span className="related-style__desc">Precedes body content</span>
          </div>
          <div className="related-style">
            <span className="related-style__name">UI Styles</span>
            <span className="related-style__desc">Buttons, labels, form elements</span>
          </div>
        </div>
      </section>
    </div>
  ),
};


// ============================================================
//  4. UI STYLES - Interactive Components
// ============================================================

const uiScales = [
  { 
    name: 'button-l', 
    desktop: '18px',
    mobile: '18px',
    weight: '600 (SemiBold)',
    lineHeight: '1.00',
    letterSpacing: '0.225px',
    sampleText: 'Pokračovat k platbě',
    cssVar: '--gov-font-body-l',
  },
  { 
    name: 'button-m', 
    desktop: '16px',
    mobile: '16px',
    weight: '600 (SemiBold)',
    lineHeight: '1.00',
    letterSpacing: '0.2px',
    sampleText: 'Odeslat žádost',
    cssVar: '--gov-font-body-m',
  },
  { 
    name: 'button-s', 
    desktop: '14px',
    mobile: '14px',
    weight: '600 (SemiBold)',
    lineHeight: '1.00',
    letterSpacing: '0.175px',
    sampleText: 'Zrušit',
    cssVar: '--gov-font-body-s',
  },
  { 
    name: 'label', 
    desktop: '14px',
    mobile: '14px',
    weight: '500 (Medium)',
    lineHeight: '1.20',
    letterSpacing: '0.175px',
    sampleText: 'Rodné číslo',
    cssVar: '--gov-font-body-s',
  },
  { 
    name: 'caption', 
    desktop: '12px',
    mobile: '12px',
    weight: '400 (Regular)',
    lineHeight: '1.40',
    letterSpacing: '0.2px',
    sampleText: 'Zadejte rodné číslo ve formátu 123456/1234',
    cssVar: '--gov-font-body-xs',
  },
  { 
    name: 'badge', 
    desktop: '12px',
    mobile: '12px',
    weight: '600 (SemiBold)',
    lineHeight: '1.00',
    letterSpacing: '0.2px',
    sampleText: 'NOVÉ',
    cssVar: '--gov-font-body-xs',
  },
  { 
    name: 'tab', 
    desktop: '14px',
    mobile: '14px',
    weight: '500 (Medium)',
    lineHeight: '1.00',
    letterSpacing: '0.175px',
    sampleText: 'Přehled',
    cssVar: '--gov-font-body-s',
  },
  { 
    name: 'nav-item', 
    desktop: '16px',
    mobile: '16px',
    weight: '500 (Medium)',
    lineHeight: '1.00',
    letterSpacing: '0.2px',
    sampleText: 'Služby pro občany',
    cssVar: '--gov-font-body-m',
  },
];

const uiDos = [
  'Use button-m as default button size',
  'Use button-l for primary CTAs only',
  'Use label for all form field labels',
  'Use caption for helper text and hints',
  'Maintain consistent button sizes across the app',
];

const uiDonts = [
  'Mix button sizes in the same button group',
  'Use body styles for buttons (different weight)',
  'Use caption for important information',
  'Apply UI styles to paragraph text',
  'Change button typography on hover/focus',
];

const uiTips = [
  'Button text uses SemiBold (600) for better click affordance',
  'Line-height 1.0 for buttons keeps them compact',
  'Caption is for supplementary info - keep it brief',
];

const uiAccessibility = [
  { status: 'good', text: 'All UI text sizes ≥12px meet minimum touch target requirements' },
  { status: 'good', text: 'SemiBold weight improves button text legibility' },
  { status: 'warning', text: 'Ensure button text is descriptive for screen readers' },
  { status: 'info', text: 'Touch targets should be minimum 44×44px regardless of text size' },
  { status: 'info', text: 'Focus states must be clearly visible for keyboard navigation' },
];

export const UIStyles = {
  render: () => (
    <div className="typography-docs">
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        UI Typography
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Typography for interactive components: buttons, labels, navigation.
      </p>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Component Styles</h1>
          <span className="typography-section__subtitle">8 UI typography variants</span>
        </div>
        <TypeScale scales={uiScales} fontFamily="'Roboto', sans-serif" showBars={true} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Token Reference</h1>
        </div>
        <TokenTable tokens={uiScales} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Usage Guidelines</h1>
        </div>
        <UsageGuidelines dos={uiDos} donts={uiDonts} tips={uiTips} />
      </section>

      <section className="typography-section">
        <AccessibilityInfo items={uiAccessibility} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Code Examples</h1>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">Button Component</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`.button {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;  /* SemiBold */
  line-height: 1.0;
  text-transform: none;  /* Don't uppercase */
}

.button-l  { font-size: var(--gov-font-body-l);  } /* 18px */
.button-m  { font-size: var(--gov-font-body-m);  } /* 16px - default */
.button-s  { font-size: var(--gov-font-body-s);  } /* 14px */`}</pre>
          </div>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">Form Elements</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`<label className="form-label">Rodné číslo</label>
<input type="text" className="form-input" />
<span className="form-caption">Zadejte ve formátu 123456/1234</span>

.form-label   { font-size: 14px; font-weight: 500; line-height: 1.2; }
.form-caption { font-size: 12px; font-weight: 400; line-height: 1.4; }`}</pre>
          </div>
        </div>
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Related Styles</h1>
        </div>
        <div className="related-styles">
          <div className="related-style">
            <span className="related-style__name">Body Styles</span>
            <span className="related-style__desc">For form input text</span>
          </div>
          <div className="related-style">
            <span className="related-style__name">Special Styles</span>
            <span className="related-style__desc">Links, emphasis patterns</span>
          </div>
        </div>
      </section>
    </div>
  ),
};


// ============================================================
//  5. SPECIAL STYLES - Links, Emphasis, Code, Quotes
// ============================================================

const specialScales = [
  { 
    name: 'link', 
    desktop: '16px',
    mobile: '16px',
    weight: '400 (Regular)',
    lineHeight: '1.50',
    letterSpacing: '0.2px',
    sampleText: 'Více informací na stránkách Ministerstva vnitra →',
    cssVar: '--gov-font-body-m',
  },
  { 
    name: 'link-small', 
    desktop: '14px',
    mobile: '14px',
    weight: '400 (Regular)',
    lineHeight: '1.50',
    letterSpacing: '0.175px',
    sampleText: 'Zobrazit všechny dokumenty',
    cssVar: '--gov-font-body-s',
  },
  { 
    name: 'emphasis', 
    desktop: '16px',
    mobile: '16px',
    weight: '700 (Bold)',
    lineHeight: '1.50',
    letterSpacing: '0.2px',
    sampleText: 'Lhůta pro vydání je 30 dnů od podání žádosti.',
    cssVar: '--gov-font-body-m',
  },
  { 
    name: 'code / mono', 
    desktop: '14px',
    mobile: '14px',
    weight: '400 (Regular)',
    lineHeight: '1.50',
    letterSpacing: '0',
    sampleText: 'CZ-OP-2026-00123456',
    cssVar: '--gov-font-body-s',
  },
  { 
    name: 'overline', 
    desktop: '12px',
    mobile: '12px',
    weight: '600 (SemiBold)',
    lineHeight: '1.20',
    letterSpacing: '1.2px',
    sampleText: 'ŽIVOTNÍ SITUACE',
    cssVar: '--gov-font-body-xs',
  },
  { 
    name: 'blockquote', 
    desktop: '18px',
    mobile: '18px',
    weight: '400 (Regular)',
    lineHeight: '1.60',
    letterSpacing: '0.225px',
    sampleText: '„Digitalizace veřejné správy přináší občanům větší komfort a úsporu času."',
    cssVar: '--gov-font-body-l',
  },
  { 
    name: 'list-item', 
    desktop: '16px',
    mobile: '16px',
    weight: '400 (Regular)',
    lineHeight: '1.50',
    letterSpacing: '0.2px',
    sampleText: '• Platný občanský průkaz nebo cestovní pas',
    cssVar: '--gov-font-body-m',
  },
];

const specialDos = [
  'Use link style with underline for accessibility',
  'Use overline for category labels above headings',
  'Use blockquote for testimonials and citations',
  'Use code/mono for reference numbers and IDs',
  'Use emphasis sparingly for key terms',
];

const specialDonts = [
  'Use overline for long text (it\'s hard to read)',
  'Remove underline from links (accessibility issue)',
  'Use emphasis for entire paragraphs',
  'Apply code style to non-technical content',
  'Mix multiple special styles in same sentence',
];

const specialTips = [
  'Overline works best at 1-3 words',
  'Links should use the primary blue color for recognition',
  'Blockquotes look great with left border styling',
];

const specialAccessibility = [
  { status: 'good', text: 'Links must be distinguishable from regular text (color + underline)' },
  { status: 'good', text: 'Overline uppercase + spacing maintains legibility' },
  { status: 'warning', text: 'Don\'t rely on color alone to indicate links' },
  { status: 'info', text: 'Use <code> or <pre> for proper screen reader announcement' },
  { status: 'info', text: 'Blockquotes should use <blockquote> with cite attribute' },
];

export const SpecialStyles = {
  render: () => (
    <div className="typography-docs">
      <h1 style={{ color: 'var(--gov-neutral-900)', marginBottom: 'var(--gov-space-m)' }}>
        Special Typography
      </h1>
      <p style={{ color: 'var(--gov-neutral-600)', marginBottom: 'var(--gov-space-l)' }}>
        Links, emphasis, code, overlines, quotes, and list items.
      </p>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Special Patterns</h1>
          <span className="typography-section__subtitle">Decorative & functional text treatments</span>
        </div>
        <TypeScale scales={specialScales} fontFamily="'Roboto', sans-serif" showBars={true} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Token Reference</h1>
        </div>
        <TokenTable tokens={specialScales} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Usage Guidelines</h1>
        </div>
        <UsageGuidelines dos={specialDos} donts={specialDonts} tips={specialTips} />
      </section>

      <section className="typography-section">
        <AccessibilityInfo items={specialAccessibility} />
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Code Examples</h1>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">Links</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`.link {
  font-size: var(--gov-font-body-m);
  font-weight: 400;
  color: var(--gov-color-primary-60);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.link:hover {
  color: var(--gov-color-primary-70);
  text-decoration-thickness: 2px;
}`}</pre>
          </div>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">Overline</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`.overline {
  font-size: var(--gov-font-body-xs);  /* 12px */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: var(--gov-text-secondary);
}`}</pre>
          </div>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">Blockquote</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`<blockquote className="blockquote" cite="source-url">
  <p>„Digitalizace veřejné správy přináší občanům větší komfort."</p>
  <cite>— Ministerstvo vnitra</cite>
</blockquote>

.blockquote {
  font-size: var(--gov-font-body-l);
  font-style: italic;
  border-left: 4px solid var(--gov-color-primary-60);
  padding-left: 1.5rem;
  margin: 1.5rem 0;
}`}</pre>
          </div>
        </div>
        <div className="code-snippet">
          <div className="code-snippet__header">
            <span className="code-snippet__label">Code / Mono</span>
          </div>
          <div className="code-snippet__content">
            <pre>{`.code {
  font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
  font-size: var(--gov-font-body-s);  /* 14px */
  background: rgba(0, 0, 0, 0.05);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
}`}</pre>
          </div>
        </div>
      </section>

      <section className="typography-section">
        <div className="typography-section__header">
          <h1 style={{ color: 'var(--gov-neutral-900)', fontSize: 'var(--gov-font-headline-m)' }}>Related Styles</h1>
        </div>
        <div className="related-styles">
          <div className="related-style">
            <span className="related-style__name">Body Styles</span>
            <span className="related-style__desc">Base sizes for special styles</span>
          </div>
          <div className="related-style">
            <span className="related-style__name">UI Styles</span>
            <span className="related-style__desc">Button links, navigation</span>
          </div>
        </div>
      </section>
    </div>
  ),
};
