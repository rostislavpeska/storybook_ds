import PropTypes from 'prop-types';
import { useLanguage } from '../../i18n/LanguageContext';
import { Header } from '../Header';
import './Layout.css';

/**
 * Layout component - wraps pages with Header and Footer.
 * Uses the official GOV.cz Header and Footer components from Storybook.
 */
function Layout({ children }) {
  const { language, switchLanguage, t } = useLanguage();

  // Handle language change from Header's LanguageSwitcher
  const handleLanguageChange = (code) => {
    switchLanguage(code);
  };

  return (
    <div className="gov-layout">
      {/* Header with integrated skip link and language switcher */}
      <Header
        appName={t('appName')}
        appNameHref="/"
        appNameAriaLabel={language === 'cs' ? 'Přejít na úvodní stránku' : 'Go to homepage'}
        showLogo={true}
        showLanguageSwitcher={true}
        languages={[
          { code: 'cs', label: 'Čeština', shortLabel: 'CZ' },
          { code: 'en', label: 'English', shortLabel: 'EN' }
        ]}
        currentLanguage={language}
        onLanguageChange={handleLanguageChange}
        skipLinkText={language === 'cs' ? 'Přeskočit na hlavní obsah' : 'Skip to main content'}
        mainContentId="main-content"
        sticky={false}
      />

      {/* Main Content */}
      <main id="main-content" className="gov-main" role="main" tabIndex="-1">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
