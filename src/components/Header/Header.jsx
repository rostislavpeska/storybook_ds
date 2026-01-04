import PropTypes from 'prop-types';
import { LanguageSwitcher } from '../LanguageSwitcher';
import './Header.css';

/**
 * Header component - blue government header bar.
 * 
 * Abstract and reusable - customizable logo, navigation, and actions.
 * Inspired by portal.gov.cz but not hardcoded to specific content.
 * WCAG 2.1 AA accessible with proper landmarks and navigation.
 * 
 * @component
 * @example
 * <Header
 *   logo={{ text: 'GOV.cz', href: '/' }}
 *   navigation={[
 *     { label: 'Služby', href: '/sluzby' },
 *     { label: 'Životní události', href: '/udalosti' }
 *   ]}
 *   currentLanguage="cs"
 *   onLanguageChange={(code) => setLanguage(code)}
 * />
 */
export const Header = ({
  // Logo configuration
  logo = {
    text: 'GOV.cz',
    href: '/',
    ariaLabel: 'Přejít na úvodní stránku',
  },
  
  // Custom logo component (overrides default)
  customLogo,
  
  // Navigation items
  navigation = [],
  
  // Language configuration
  showLanguageSwitcher = true,
  languages = [
    { code: 'cs', label: 'Čeština', shortLabel: 'CZ' },
    { code: 'en', label: 'English', shortLabel: 'EN' }
  ],
  currentLanguage = 'cs',
  onLanguageChange,
  
  // Actions (right side buttons/links)
  actions = [],
  
  // Skip link
  skipLinkText = 'Přeskočit na hlavní obsah',
  mainContentId = 'main-content',
  
  // Other
  className = '',
  sticky = false,
  ...props
}) => {
  const classNames = [
    'gov-header',
    sticky && 'gov-header--sticky',
    className,
  ].filter(Boolean).join(' ');

  // Default GOV.cz logo with house icon
  const DefaultLogo = () => (
    <a 
      href={logo.href} 
      className="gov-header__logo-link"
      aria-label={logo.ariaLabel}
    >
      <svg 
        className="gov-header__logo-icon" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
        <path d="M9 21V12h6v9" fill="none" stroke="currentColor" strokeWidth="1"/>
      </svg>
      <span className="gov-header__logo-text">{logo.text}</span>
    </a>
  );

  return (
    <>
      {/* Skip link for accessibility */}
      <a href={`#${mainContentId}`} className="gov-header__skip-link">
        {skipLinkText}
      </a>
      
      <header className={classNames} role="banner" {...props}>
        <div className="gov-header__container">
          {/* Logo */}
          <div className="gov-header__logo">
            {customLogo || <DefaultLogo />}
          </div>
          
          {/* Navigation */}
          {navigation.length > 0 && (
            <nav className="gov-header__nav" aria-label="Hlavní navigace">
              <ul className="gov-header__nav-list">
                {navigation.map((item, index) => (
                  <li key={index} className="gov-header__nav-item">
                    <a 
                      href={item.href}
                      className={`gov-header__nav-link ${item.active ? 'gov-header__nav-link--active' : ''}`}
                      aria-current={item.active ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          
          {/* Right side: Language switcher + Actions */}
          <div className="gov-header__actions">
            {/* Language Switcher */}
            {showLanguageSwitcher && (
              <LanguageSwitcher
                languages={languages}
                currentLanguage={currentLanguage}
                onChange={onLanguageChange}
                variant="toggle"
                showIcon={true}
                className="gov-lang-switcher--light"
              />
            )}
            
            {/* Custom actions */}
            {actions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="gov-header__action"
                aria-label={action.ariaLabel}
              >
                {action.icon && (
                  <span className="gov-header__action-icon" aria-hidden="true">
                    {action.icon}
                  </span>
                )}
                <span className="gov-header__action-label">{action.label}</span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Blue accent bar */}
        <div className="gov-header__accent-bar" aria-hidden="true" />
      </header>
    </>
  );
};

Header.propTypes = {
  /** Logo configuration */
  logo: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
    ariaLabel: PropTypes.string,
  }),
  /** Custom logo component (overrides default) */
  customLogo: PropTypes.node,
  /** Navigation items */
  navigation: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    active: PropTypes.bool,
  })),
  /** Show language switcher */
  showLanguageSwitcher: PropTypes.bool,
  /** Available languages */
  languages: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    shortLabel: PropTypes.string.isRequired,
  })),
  /** Current language code */
  currentLanguage: PropTypes.string,
  /** Language change callback */
  onLanguageChange: PropTypes.func,
  /** Action buttons/links */
  actions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.node,
    ariaLabel: PropTypes.string,
  })),
  /** Skip link text */
  skipLinkText: PropTypes.string,
  /** ID of main content for skip link */
  mainContentId: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Sticky header */
  sticky: PropTypes.bool,
};

export default Header;

