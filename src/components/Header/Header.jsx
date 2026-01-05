import PropTypes from 'prop-types';
import { LanguageSwitcher } from '../LanguageSwitcher';
import './Header.css';

/**
 * Czech lion logo SVG - official GOV.cz logo (open source)
 * Source: designsystem.gov.cz / Figma gov-icons
 */
const CzechLionLogo = ({ className }) => (
  <svg 
    className={className}
    viewBox="0 0 12 16" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M9.99983 11.9996V13.3332H9.33328V13.9998H8.66621V16H7.99966V15.3334H7.3331V16H6.66655V14.6664H7.3331V13.9998H7.99966V12.6667H7.3331V10.6665H6V12.6667H1.99966V11.9996H1.33311V11.3331H2.33319V10.6665H2.99974V11.3331H3.99983V9.33338H6.66655V8.6663H6V7.99974H3.99983V8.6663H3.33328V7.99974H2.66621V8.6663H1.33311V9.33338H0.666553V8.6663H0V7.33318H0.666553V6.66662H1.33311V7.33318H1.99966V6.66662H3.33328V6.00006H2.66621V5.33299H1.99966V4.66643H0.666553V3.99987H1.33311V2.66675H0.666553V1.99968H1.99966V1.33312H2.66621V1.99968H3.33328V2.66675H2.66621V3.33331H3.33328V3.99987H3.99983V4.66643H4.66638V3.99987H5.33293V3.33331H6.66655V2.66675H5.33293V1.99968H6V1.33312H7.99966V1.99968H8.66621V1.33312H9.33328V0.66656H9.99983V3.99987H9.33328V3.33331H8.66621V3.99987H9.33328V4.66643H8.66621V5.33299H7.99966V6.00006H8.66621V6.66662H7.99966V8.6663H8.66621V9.33338H9.33328V9.99994H9.99983V9.33338H9.33328V7.99974H9.99983V7.33318H10.6664V7.99974H11.3329V8.6663H10.6664V9.99994H11.3329V10.6665H11.9995V11.3331H10.6664V11.9996H9.99983V11.3331H9.33328V10.6665H8.66621V11.9996H9.99983ZM7.99966 0.66656H6V0H7.99966V0.66656ZM3.99983 2.66624H4.66638V3.3328H3.99983V2.66624ZM8.66672 7.99974L8.66621 6.66662H9.33276V7.99974H8.66672ZM9.33328 6.66611V4.66643H9.99983V6.66611H9.33328ZM11.3329 7.99974V6.66662H11.9995V7.99974H11.3329ZM10.6664 6.66611V4.66643H11.3329V6.66662L10.6664 6.66611ZM11.3334 3.99987H12V4.66643H11.3329L11.3334 3.99987ZM11.3329 1.33312H11.9995V3.33331H11.3329L11.3334 3.99987H10.6664V0.66656H11.3329V1.33312ZM9.99983 3.99987H10.6664V4.66643H9.99983V3.99987ZM7.3331 13.3332V13.9998H6.66655V13.3332H7.3331ZM1.99966 12.6672V13.3338H1.33311V12.6672H1.99966Z"
    />
  </svg>
);

/**
 * Header component - blue government header bar.
 * 
 * Abstract and reusable - customizable app name, navigation, and actions.
 * Uses the official Czech lion logo from GOV.cz design system.
 * WCAG 2.1 AA accessible with proper landmarks and navigation.
 * 
 * @component
 * @example
 * <Header
 *   appName="Forms Portal"
 *   navigation={[
 *     { label: 'Services', href: '/sluzby' },
 *     { label: 'Life events', href: '/udalosti' }
 *   ]}
 *   currentLanguage="cs"
 *   onLanguageChange={(code) => setLanguage(code)}
 * />
 */
export const Header = ({
  // App name and branding
  appName = 'Portal',
  appNameHref = '/',
  appNameAriaLabel = 'Go to homepage',
  showLogo = true,
  
  // Custom logo component (overrides default Czech lion)
  customLogo,
  
  // Navigation items
  navigation = [],
  
  // Language configuration
  showLanguageSwitcher = true,
  languages = [
    { code: 'cs', label: 'Czech', shortLabel: 'CZ' },
    { code: 'en', label: 'English', shortLabel: 'EN' }
  ],
  currentLanguage = 'cs',
  onLanguageChange,
  
  // Actions (right side buttons/links)
  actions = [],
  
  // Skip link
  skipLinkText = 'Skip to main content',
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

  // Default logo with Czech lion
  const DefaultLogo = () => (
    <a 
      href={appNameHref} 
      className="gov-header__logo-link"
      aria-label={appNameAriaLabel}
    >
      {showLogo && (
        customLogo || <CzechLionLogo className="gov-header__logo-icon" />
      )}
      <span className="gov-header__logo-text">{appName}</span>
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
            <DefaultLogo />
          </div>
          
          {/* Navigation */}
          {navigation.length > 0 && (
            <nav className="gov-header__nav" aria-label="Main navigation">
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
  /** Application name displayed next to logo */
  appName: PropTypes.string,
  /** Link for app name/logo click */
  appNameHref: PropTypes.string,
  /** Accessible label for logo link */
  appNameAriaLabel: PropTypes.string,
  /** Show the Czech lion logo */
  showLogo: PropTypes.bool,
  /** Custom logo component (overrides default Czech lion) */
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
