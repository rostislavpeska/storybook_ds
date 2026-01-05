import { createContext, useState, useContext, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Check localStorage for saved preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gov-language');
      if (saved && translations[saved]) {
        return saved;
      }
    }
    return 'cs'; // Default to Czech
  });

  const switchLanguage = useCallback((lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('gov-language', lang);
    } else {
      console.warn(`Language "${lang}" not supported. Falling back to "cs".`);
      setLanguage('cs');
      localStorage.setItem('gov-language', 'cs');
    }
  }, []);

  // Translation function
  const t = useCallback((key) => {
    return translations[language]?.[key] || key;
  }, [language]);

  const value = useMemo(() => ({
    language,
    switchLanguage,
    t,
    translations: translations[language],
  }), [language, switchLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
