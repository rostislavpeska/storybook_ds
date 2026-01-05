import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
# Footer

Government-style footer component with customizable columns, logos, and links.

## Features

- **Link columns** - Configurable link sections
- **Contact section** - Email and phone display
- **Social links** - Social media icons
- **Partner logos** - Organization/sponsor logos
- **Bottom bar** - Copyright and legal links
- **Back to top** - Smooth scroll button
- **Dark variant** - For dark-themed pages

## WCAG 2.1 AA Compliance

- Proper \`role="contentinfo"\` landmark
- \`aria-label\` on navigation sections
- External links marked with icon
- Focus states visible
- Color contrast meets standards

## Usage

\`\`\`jsx
import { Footer } from '@/components/Footer';

<Footer
  columns={[
    {
      title: 'Informace',
      links: [
        { label: 'O nás', href: '/o-nas' },
        { label: 'Kontakty', href: '/kontakt' }
      ]
    }
  ]}
  copyright="© 2026 GOV.cz"
  bottomLinks={[
    { label: 'Ochrana soukromí', href: '/privacy' }
  ]}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    showBackToTop: {
      control: 'boolean',
      description: 'Show back to top button',
    },
    version: {
      control: 'text',
      description: 'Version number to display',
    },
  },
};

// ============================================================================
// PLAYGROUND
// ============================================================================

export const Playground = {
  args: {
    columns: [
      {
        title: 'Informace',
        links: [
          { label: 'Zpracování osobních údajů a cookies', href: '/cookies' },
          { label: 'Kontakty pro média', href: '/media' },
          { label: 'Mapa webu', href: '/sitemap' },
          { label: 'Prohlášení o přístupnosti', href: '/accessibility' },
        ],
      },
    ],
    contact: {
      title: 'Máte dotaz? Napište nám',
      email: 'info@gov.cz',
    },
    copyright: '© 2026 GOV.cz. Všechna práva vyhrazena.',
    bottomLinks: [
      { label: 'Ochrana soukromí', href: '/privacy' },
      { label: 'Podmínky užití', href: '/terms' },
    ],
    showBackToTop: true,
    version: '4.2.241',
  },
};

// ============================================================================
// BASIC EXAMPLES
// ============================================================================

export const Default = {
  args: {
    copyright: '© 2026 GOV.cz',
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Minimal footer with just copyright.',
      },
    },
  },
};

export const WithColumns = {
  args: {
    columns: [
      {
        title: 'Služby',
        links: [
          { label: 'Služby občanům', href: '/sluzby-fo' },
          { label: 'Služby podnikatelům', href: '/sluzby-po' },
          { label: 'Elektronické podání', href: '/epodani' },
        ],
      },
      {
        title: 'Informace',
        links: [
          { label: 'O portálu', href: '/o-portalu' },
          { label: 'Časté dotazy', href: '/faq' },
          { label: 'Prohlášení o přístupnosti', href: '/accessibility' },
        ],
      },
      {
        title: 'Podpora',
        links: [
          { label: 'Kontakty', href: '/kontakt' },
          { label: 'Technická podpora', href: '/podpora' },
          { label: 'Nahlásit problém', href: '/problem' },
        ],
      },
    ],
    copyright: '© 2026 GOV.cz',
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Footer with multiple link columns.',
      },
    },
  },
};

// ============================================================================
// WITH CONTACT
// ============================================================================

export const WithContact = {
  args: {
    columns: [
      {
        title: 'Informace',
        links: [
          { label: 'O nás', href: '/o-nas' },
          { label: 'Kariéra', href: '/kariera' },
        ],
      },
    ],
    contact: {
      title: 'Kontaktujte nás',
      email: 'podpora@gov.cz',
      phone: '+420 123 456 789',
    },
    copyright: '© 2026 GOV.cz',
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Footer with contact information section.',
      },
    },
  },
};

// ============================================================================
// WITH SOCIAL LINKS
// ============================================================================

export const WithSocialLinks = {
  render: () => {
    // Social icons as SVGs
    const FacebookIcon = (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
    const TwitterIcon = (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    );
    const LinkedInIcon = (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
    
    return (
      <Footer
        columns={[
          {
            title: 'Informace',
            links: [
              { label: 'O nás', href: '/o-nas' },
              { label: 'Tiskové zprávy', href: '/press' },
            ],
          },
        ]}
        socialLinks={[
          { label: 'Facebook', href: 'https://facebook.com/govcz', icon: FacebookIcon },
          { label: 'Twitter', href: 'https://twitter.com/govcz', icon: TwitterIcon },
          { label: 'LinkedIn', href: 'https://linkedin.com/company/govcz', icon: LinkedInIcon },
        ]}
        copyright="© 2026 GOV.cz"
      />
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Footer with social media links.',
      },
    },
  },
};

// ============================================================================
// WITH LOGOS
// ============================================================================

export const WithLogos = {
  args: {
    columns: [
      {
        title: 'Portál vám přináší',
        links: [],
      },
    ],
    logos: [
      { alt: 'NextGeneration EU', href: 'https://ec.europa.eu' },
      { alt: 'Národní plán obnovy', href: 'https://www.planobnovycr.cz' },
      { alt: 'DIA', href: 'https://dia.gov.cz' },
      { alt: 'NAKIT', href: 'https://nakit.cz' },
    ],
    copyright: '© 2026 Digitální a informační agentura',
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Footer with partner/sponsor logos. In production, add actual image URLs to the `src` prop.',
      },
    },
  },
};

// ============================================================================
// WITH EXTERNAL LINKS
// ============================================================================

export const WithExternalLinks = {
  args: {
    columns: [
      {
        title: 'Související weby',
        links: [
          { label: 'Portál občana', href: 'https://portal.gov.cz', external: true },
          { label: 'eIdentita', href: 'https://eidentita.cz', external: true },
          { label: 'Datové schránky', href: 'https://mojedatovaschranka.cz', external: true },
        ],
      },
    ],
    copyright: '© 2026 GOV.cz',
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Footer with external links marked with an icon.',
      },
    },
  },
};

// ============================================================================
// WITHOUT BACK TO TOP
// ============================================================================

export const WithoutBackToTop = {
  args: {
    columns: [
      {
        title: 'Informace',
        links: [
          { label: 'O nás', href: '/o-nas' },
        ],
      },
    ],
    copyright: '© 2026 GOV.cz',
    showBackToTop: false,
  },
  parameters: {
    controls: { disable: true },
  },
};

// ============================================================================
// DARK VARIANT
// ============================================================================

export const DarkVariant = {
  args: {
    columns: [
      {
        title: 'Informace',
        links: [
          { label: 'O nás', href: '/o-nas' },
          { label: 'Kontakty', href: '/kontakt' },
        ],
      },
    ],
    contact: {
      title: 'Kontakt',
      email: 'info@gov.cz',
    },
    copyright: '© 2026 GOV.cz',
    className: 'gov-footer--dark',
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Dark variant for dark-themed pages.',
      },
    },
  },
};

// ============================================================================
// REAL-WORLD EXAMPLE
// ============================================================================

export const PortalExample = {
  render: () => {
    const FacebookIcon = (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
    const TwitterIcon = (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    );
    
    return (
      <div>
        <main style={{ padding: '40px', minHeight: '200px', backgroundColor: '#f9f9f9' }}>
          <h1>Page Content</h1>
          <p>Scroll down to see the footer.</p>
        </main>
        <Footer
          columns={[
            {
              title: 'Informace',
              links: [
                { label: 'Zpracování osobních údajů a cookies', href: '/cookies' },
                { label: 'Kontakty pro média', href: '/media' },
                { label: 'Mapa webu', href: '/sitemap' },
                { label: 'Prohlášení o přístupnosti', href: '/accessibility' },
                { label: 'Uživatelská příručka', href: '/manual' },
              ],
            },
          ]}
          contact={{
            title: 'Máte dotaz? Napište nám',
            email: 'portalobcana@dia.gov.cz',
          }}
          socialLinks={[
            { label: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
            { label: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
          ]}
          logos={[
            { alt: 'NextGeneration EU' },
            { alt: 'Národní plán obnovy' },
            { alt: 'DIA' },
            { alt: 'NAKIT' },
          ]}
          copyright="© 2026 Digitální a informační agentura • Informace jsou poskytovány v souladu se zákonem č. 106/1999 Sb."
          bottomLinks={[
            { label: 'Ochrana soukromí', href: '/privacy' },
            { label: 'Podmínky užití', href: '/terms' },
          ]}
          version="4.2.241"
          showBackToTop={true}
        />
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Complete real-world example inspired by portal.gov.cz.',
      },
    },
  },
};

// ============================================================================
// ALL SECTIONS OVERVIEW
// ============================================================================

export const AllSections = {
  render: () => (
    <Footer
      columns={[
        {
          title: 'Služby',
          links: [
            { label: 'Služby občanům', href: '/fo' },
            { label: 'Služby podnikatelům', href: '/po' },
          ],
        },
        {
          title: 'Informace',
          links: [
            { label: 'O portálu', href: '/about' },
            { label: 'FAQ', href: '/faq' },
          ],
        },
        {
          title: 'Externí odkazy',
          links: [
            { label: 'Portal.gov.cz', href: 'https://portal.gov.cz', external: true },
          ],
        },
      ]}
      contact={{
        title: 'Kontakt',
        email: 'info@example.cz',
        phone: '+420 123 456 789',
      }}
      socialLinks={[
        { label: 'FB', href: '#' },
        { label: 'TW', href: '#' },
        { label: 'LI', href: '#' },
      ]}
      logos={[
        { alt: 'Partner 1' },
        { alt: 'Partner 2' },
        { alt: 'Partner 3' },
      ]}
      copyright="© 2026 Organization Name"
      bottomLinks={[
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Accessibility', href: '/a11y' },
      ]}
      version="1.0.0"
    />
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Footer with all available sections displayed.',
      },
    },
  },
};


