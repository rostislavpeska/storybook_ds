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
      title: 'Information',
      links: [
        { label: 'About us', href: '/o-nas' },
        { label: 'Contacts', href: '/kontakt' }
      ]
    }
  ]}
  copyright="© 2026 GOV.cz"
  bottomLinks={[
    { label: 'Privacy policy', href: '/privacy' }
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
        title: 'Information',
        links: [
          { label: 'Personal data processing and cookies', href: '/cookies' },
          { label: 'Media contacts', href: '/media' },
          { label: 'Mapa webu', href: '/sitemap' },
          { label: 'Accessibility statement', href: '/accessibility' },
        ],
      },
    ],
    contact: {
      title: 'Have a question? Contact us',
      email: 'info@gov.cz',
    },
    copyright: '© 2026 GOV.cz. All rights reserved.',
    bottomLinks: [
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms of use', href: '/terms' },
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
        title: 'Services',
        links: [
          { label: 'Services for citizens', href: '/sluzby-fo' },
          { label: 'Services for businesses', href: '/sluzby-po' },
          { label: 'Electronic submission', href: '/epodani' },
        ],
      },
      {
        title: 'Information',
        links: [
          { label: 'About portal', href: '/o-portalu' },
          { label: 'FAQ', href: '/faq' },
          { label: 'Accessibility statement', href: '/accessibility' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Contacts', href: '/kontakt' },
          { label: 'Technical support', href: '/podpora' },
          { label: 'Report a problem', href: '/problem' },
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
        title: 'Information',
        links: [
          { label: 'About us', href: '/o-nas' },
          { label: 'Careers', href: '/kariera' },
        ],
      },
    ],
    contact: {
      title: 'Contact us',
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
            title: 'Information',
            links: [
              { label: 'About us', href: '/o-nas' },
              { label: 'Press releases', href: '/press' },
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
        title: 'Portal brought to you by',
        links: [],
      },
    ],
    logos: [
      { alt: 'NextGeneration EU', href: 'https://ec.europa.eu' },
      { alt: 'National Recovery Plan', href: 'https://www.planobnovycr.cz' },
      { alt: 'DIA', href: 'https://dia.gov.cz' },
      { alt: 'NAKIT', href: 'https://nakit.cz' },
    ],
    copyright: '© 2026 Digital and Information Agency',
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
        title: 'Related websites',
        links: [
          { label: 'Citizen Portal', href: 'https://portal.gov.cz', external: true },
          { label: 'eIdentita', href: 'https://eidentita.cz', external: true },
          { label: 'Data boxes', href: 'https://mojedatovaschranka.cz', external: true },
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
        title: 'Information',
        links: [
          { label: 'About us', href: '/o-nas' },
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
        title: 'Information',
        links: [
          { label: 'About us', href: '/o-nas' },
          { label: 'Contacts', href: '/kontakt' },
        ],
      },
    ],
    contact: {
      title: 'Contact',
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
              title: 'Information',
              links: [
                { label: 'Personal data processing and cookies', href: '/cookies' },
                { label: 'Media contacts', href: '/media' },
                { label: 'Mapa webu', href: '/sitemap' },
                { label: 'Accessibility statement', href: '/accessibility' },
                { label: 'User manual', href: '/manual' },
              ],
            },
          ]}
          contact={{
            title: 'Have a question? Contact us',
            email: 'portalobcana@dia.gov.cz',
          }}
          socialLinks={[
            { label: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
            { label: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
          ]}
          logos={[
            { alt: 'NextGeneration EU' },
            { alt: 'National Recovery Plan' },
            { alt: 'DIA' },
            { alt: 'NAKIT' },
          ]}
          copyright="© 2026 Digital and Information Agency • Information is provided in accordance with Act No. 106/1999 Coll."
          bottomLinks={[
            { label: 'Privacy policy', href: '/privacy' },
            { label: 'Terms of use', href: '/terms' },
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
          title: 'Services',
          links: [
            { label: 'Services for citizens', href: '/fo' },
            { label: 'Services for businesses', href: '/po' },
          ],
        },
        {
          title: 'Information',
          links: [
            { label: 'About portal', href: '/about' },
            { label: 'FAQ', href: '/faq' },
          ],
        },
        {
          title: 'External links',
          links: [
            { label: 'Portal.gov.cz', href: 'https://portal.gov.cz', external: true },
          ],
        },
      ]}
      contact={{
        title: 'Contact',
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


