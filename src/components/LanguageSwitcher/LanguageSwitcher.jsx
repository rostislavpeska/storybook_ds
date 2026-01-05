import { useState } from 'react';
import PropTypes from 'prop-types';
import './LanguageSwitcher.css';

/**
 * LanguageSwitcher component for toggling between languages.
 * 
 * Abstract and reusable - supports any number of languages.
 * WCAG 2.1 AA accessible with proper ARIA labels.
 * 
 * @component
 * @example
 * // Two languages
 * <LanguageSwitcher 
 *   languages={[
 *     { code: 'cs', label: 'Czech', shortLabel: 'CZ' },
 *     { code: 'en', label: 'English', shortLabel: 'EN' }
 *   ]}
 *   currentLanguage="cs"
 *   onChange={(code) => setLanguage(code)}
 * />
 */
export const LanguageSwitcher = ({
  // Language configuration
  languages = [
    { code: 'cs', label: 'Czech', shortLabel: 'CZ' },
    { code: 'en', label: 'English', shortLabel: 'EN' }
  ],
  currentLanguage,
  defaultLanguage = 'cs',
  
  // Display options
  variant = 'toggle', // 'toggle' | 'dropdown' | 'buttons'
  showIcon = true,
  showFullLabel = false,
  
  // Events
  onChange,
  
  // Other
  id,
  className = '',
  ariaLabel = 'Change language',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeLanguage = currentLanguage || defaultLanguage;
  
  const currentLang = languages.find(l => l.code === activeLanguage) || languages[0];
  
  const handleLanguageChange = (code) => {
    onChange?.(code);
    setIsOpen(false);
  };

  const handleKeyDown = (e, code) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLanguageChange(code);
    }
  };

  const classNames = [
    'gov-lang-switcher',
    `gov-lang-switcher--${variant}`,
    isOpen && 'gov-lang-switcher--open',
    className,
  ].filter(Boolean).join(' ');

  // Globe icon SVG
  const GlobeIcon = () => (
    <svg 
      className="gov-lang-switcher__icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );

  // Toggle variant (simple button that cycles through languages)
  if (variant === 'toggle' && languages.length === 2) {
    const otherLang = languages.find(l => l.code !== activeLanguage);
    
    return (
      <button
        type="button"
        className={classNames}
        onClick={() => handleLanguageChange(otherLang.code)}
        aria-label={`${ariaLabel}: ${currentLang.label}. ${otherLang.label}`}
        title={`Switch to ${otherLang.label}`}
        {...props}
      >
        {showIcon && <GlobeIcon />}
        <span className="gov-lang-switcher__label">
          {showFullLabel ? currentLang.label : currentLang.shortLabel}
        </span>
      </button>
    );
  }

  // Buttons variant (all languages visible)
  if (variant === 'buttons') {
    return (
      <div 
        className={classNames} 
        role="group" 
        aria-label={ariaLabel}
        {...props}
      >
        {showIcon && <GlobeIcon />}
        {languages.map((lang, index) => (
          <button
            key={lang.code}
            type="button"
            className={`gov-lang-switcher__button ${lang.code === activeLanguage ? 'gov-lang-switcher__button--active' : ''}`}
            onClick={() => handleLanguageChange(lang.code)}
            onKeyDown={(e) => handleKeyDown(e, lang.code)}
            aria-pressed={lang.code === activeLanguage}
            aria-label={lang.label}
          >
            {showFullLabel ? lang.label : lang.shortLabel}
          </button>
        ))}
      </div>
    );
  }

  // Dropdown variant
  return (
    <div className={classNames} {...props}>
      <button
        type="button"
        className="gov-lang-switcher__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`${ariaLabel}: ${currentLang.label}`}
      >
        {showIcon && <GlobeIcon />}
        <span className="gov-lang-switcher__label">
          {showFullLabel ? currentLang.label : currentLang.shortLabel}
        </span>
        <svg 
          className="gov-lang-switcher__chevron" 
          viewBox="0 0 16 16" 
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4.646 5.646a.5.5 0 0 1 .708 0L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
      
      {isOpen && (
        <ul 
          className="gov-lang-switcher__dropdown"
          role="listbox"
          aria-label={ariaLabel}
        >
          {languages.map((lang) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={lang.code === activeLanguage}
              className={`gov-lang-switcher__option ${lang.code === activeLanguage ? 'gov-lang-switcher__option--active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
              onKeyDown={(e) => handleKeyDown(e, lang.code)}
              tabIndex={0}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

LanguageSwitcher.propTypes = {
  /** Array of language objects */
  languages: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    shortLabel: PropTypes.string.isRequired,
  })),
  /** Currently selected language code */
  currentLanguage: PropTypes.string,
  /** Default language if none selected */
  defaultLanguage: PropTypes.string,
  /** Display variant */
  variant: PropTypes.oneOf(['toggle', 'dropdown', 'buttons']),
  /** Show globe icon */
  showIcon: PropTypes.bool,
  /** Show full label instead of short */
  showFullLabel: PropTypes.bool,
  /** Language change callback */
  onChange: PropTypes.func,
  /** Custom ID */
  id: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Accessible label */
  ariaLabel: PropTypes.string,
};

export default LanguageSwitcher;


