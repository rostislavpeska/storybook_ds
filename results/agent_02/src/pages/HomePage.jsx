import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Icon } from '../components/Icon';
import './HomePage.css';

function HomePage() {
  const { t } = useLanguage();

  const forms = [
    {
      key: 'rekvalifikace',
      title: t('formRequalification'),
      description: t('formRequalificationDesc'),
      status: 'active',
      statusLabel: t('active'),
      link: '/form/rekvalifikace',
      icon: 'file-earmark-text',
      color: 'primary',
    },
    {
      key: 'povez',
      title: t('formPovez'),
      description: t('formPovezDesc'),
      status: 'coming',
      statusLabel: t('comingSoon'),
      link: '/form/povez',
      icon: 'mortarboard',
      color: 'warning',
    },
    {
      key: 'dotace',
      title: t('formDotace'),
      description: t('formDotaceDesc'),
      status: 'coming',
      statusLabel: t('comingSoon'),
      link: '/form/dotace-vzdelavani',
      icon: 'currency-exchange',
      color: 'success',
    },
  ];

  return (
    <div className="home-page">
      <header className="home-page__header">
        <h1 className="home-page__title">{t('homepageTitle')}</h1>
        <p className="home-page__subtitle">{t('homepageSubtitle')}</p>
      </header>

      <div className="home-page__grid" role="list" aria-label={t('homepageTitle')}>
        {forms.map((form) => (
          <article 
            key={form.key} 
            className={`home-page__card-wrapper home-page__card-wrapper--${form.status}`}
            role="listitem"
          >
            {form.status === 'active' ? (
              <Link 
                to={form.link} 
                className="home-page__card-link"
                aria-label={`${form.title} - ${form.statusLabel}`}
              >
                <div className={`home-page__card home-page__card--${form.color}`}>
                  <div className="home-page__card-icon">
                    <Icon name={form.icon} size="3xl" />
                  </div>
                  <div className="home-page__card-content">
                    <span className={`home-page__status home-page__status--${form.status}`}>
                      {form.statusLabel}
                    </span>
                    <h2 className="home-page__card-title">{form.title}</h2>
                    <p className="home-page__card-description">{form.description}</p>
                  </div>
                  <div className="home-page__card-arrow">
                    <Icon name="arrow-right" size="lg" />
                  </div>
                </div>
              </Link>
            ) : (
              <div className="home-page__card-disabled" aria-disabled="true">
                <div className={`home-page__card home-page__card--${form.color} home-page__card--disabled`}>
                  <div className="home-page__card-icon">
                    <Icon name={form.icon} size="3xl" />
                  </div>
                  <div className="home-page__card-content">
                    <span className={`home-page__status home-page__status--${form.status}`}>
                      {form.statusLabel}
                    </span>
                    <h2 className="home-page__card-title">{form.title}</h2>
                    <p className="home-page__card-description">{form.description}</p>
                  </div>
                  <div className="home-page__card-arrow home-page__card-arrow--disabled">
                    <Icon name="clock" size="lg" />
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
