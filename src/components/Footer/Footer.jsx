import PropTypes from 'prop-types';
import './Footer.css';

/**
 * Footer component - government footer with links, logos, and copyright.
 * 
 * Abstract and reusable - customizable columns, logos, and social links.
 * Inspired by portal.gov.cz but not hardcoded to specific content.
 * WCAG 2.1 AA accessible with proper landmarks and navigation.
 * 
 * @component
 * @example
 * <Footer
 *   columns={[
 *     {
 *       title: 'Informace',
 *       links: [
 *         { label: 'O portálu', href: '/o-nas' },
 *         { label: 'Kontakty', href: '/kontakt' }
 *       ]
 *     }
 *   ]}
 *   copyright="© 2026 GOV.cz"
 *   showBackToTop={true}
 * />
 */
export const Footer = ({
  // Column configuration
  columns = [],
  
  // Contact section
  contact = null,
  
  // Partner logos
  logos = [],
  
  // Social links
  socialLinks = [],
  
  // Bottom bar
  copyright = `© ${new Date().getFullYear()} GOV.cz`,
  bottomLinks = [],
  
  // Back to top
  showBackToTop = true,
  backToTopText = 'Zpět nahoru',
  
  // Version
  version,
  
  // Other
  className = '',
  ...props
}) => {
  const classNames = [
    'gov-footer',
    className,
  ].filter(Boolean).join(' ');

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={classNames} role="contentinfo" {...props}>
      {/* Main footer content */}
      <div className="gov-footer__main">
        <div className="gov-footer__container">
          {/* Link columns */}
          {columns.length > 0 && (
            <div className="gov-footer__columns">
              {columns.map((column, index) => (
                <div key={index} className="gov-footer__column">
                  {column.title && (
                    <h3 className="gov-footer__column-title">{column.title}</h3>
                  )}
                  {column.links && (
                    <ul className="gov-footer__column-list">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="gov-footer__column-item">
                          <a 
                            href={link.href}
                            className="gov-footer__column-link"
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                          >
                            {link.label}
                            {link.external && (
                              <span className="gov-footer__external-icon" aria-hidden="true">
                                ⧉
                              </span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              
              {/* Contact section */}
              {contact && (
                <div className="gov-footer__column gov-footer__column--contact">
                  {contact.title && (
                    <h3 className="gov-footer__column-title">{contact.title}</h3>
                  )}
                  {contact.email && (
                    <a 
                      href={`mailto:${contact.email}`}
                      className="gov-footer__contact-email"
                    >
                      {contact.email}
                    </a>
                  )}
                  {contact.phone && (
                    <a 
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="gov-footer__contact-phone"
                    >
                      {contact.phone}
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
          
          {/* Social links */}
          {socialLinks.length > 0 && (
            <div className="gov-footer__social">
              <span className="gov-footer__social-label">Sledujte nás:</span>
              <div className="gov-footer__social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="gov-footer__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon || social.label}
                  </a>
                ))}
              </div>
            </div>
          )}
          
          {/* Partner logos */}
          {logos.length > 0 && (
            <div className="gov-footer__logos">
              {logos.map((logo, index) => (
                <div key={index} className="gov-footer__logo-item">
                  {logo.href ? (
                    <a 
                      href={logo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={logo.alt}
                    >
                      {logo.src ? (
                        <img 
                          src={logo.src} 
                          alt={logo.alt} 
                          className="gov-footer__logo-image"
                        />
                      ) : (
                        <span className="gov-footer__logo-text">{logo.alt}</span>
                      )}
                    </a>
                  ) : (
                    logo.src ? (
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="gov-footer__logo-image"
                      />
                    ) : (
                      <span className="gov-footer__logo-text">{logo.alt}</span>
                    )
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="gov-footer__bottom">
        <div className="gov-footer__container">
          <div className="gov-footer__bottom-content">
            {/* Copyright */}
            <div className="gov-footer__copyright">
              <span>{copyright}</span>
              {version && (
                <span className="gov-footer__version">Verze {version}</span>
              )}
            </div>
            
            {/* Bottom links */}
            {bottomLinks.length > 0 && (
              <nav className="gov-footer__bottom-nav" aria-label="Právní informace">
                <ul className="gov-footer__bottom-list">
                  {bottomLinks.map((link, index) => (
                    <li key={index} className="gov-footer__bottom-item">
                      <a 
                        href={link.href}
                        className="gov-footer__bottom-link"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      {showBackToTop && (
        <button
          type="button"
          className="gov-footer__back-to-top"
          onClick={handleBackToTop}
          aria-label={backToTopText}
        >
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
          <span className="gov-footer__back-to-top-text">{backToTopText}</span>
        </button>
      )}
    </footer>
  );
};

Footer.propTypes = {
  /** Link columns */
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      external: PropTypes.bool,
    })),
  })),
  /** Contact information */
  contact: PropTypes.shape({
    title: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  /** Partner/sponsor logos */
  logos: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
    href: PropTypes.string,
  })),
  /** Social media links */
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.node,
  })),
  /** Copyright text */
  copyright: PropTypes.string,
  /** Bottom bar links */
  bottomLinks: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })),
  /** Show back to top button */
  showBackToTop: PropTypes.bool,
  /** Back to top button text */
  backToTopText: PropTypes.string,
  /** Version number */
  version: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Footer;


