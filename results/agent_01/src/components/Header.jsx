import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header className="app-header" role="banner">
      <div className="header-container">
        <h1 className="header-title">
          <Link to="/">{t('app.title')}</Link>
        </h1>
        <nav className="header-nav" role="navigation" aria-label={t('nav.forms')}>
          <div className="lang-switcher" role="group" aria-label={t('language.switch')}>
            <button
              className={`lang-btn ${i18n.language === 'cs' ? 'active' : ''}`}
              onClick={() => changeLanguage('cs')}
              aria-pressed={i18n.language === 'cs'}
              lang="cs"
            >
              {t('language.cs')}
            </button>
            <button
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
              aria-pressed={i18n.language === 'en'}
              lang="en"
            >
              {t('language.en')}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
