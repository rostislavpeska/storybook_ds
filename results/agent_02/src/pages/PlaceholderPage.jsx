import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import './PlaceholderPage.css';

function PlaceholderPage({ formKey }) {
  const { t } = useLanguage();

  const formInfo = {
    povez: {
      title: t('formPovez'),
      description: t('formPovezDesc'),
      icon: 'mortarboard',
      color: 'warning',
    },
    subsidy: {
      title: t('formDotace'),
      description: t('formDotaceDesc'),
      icon: 'currency-exchange',
      color: 'success',
    },
  };

  const form = formInfo[formKey] || {
    title: t('formNotFound'),
    description: t('formNotFoundDescription'),
    icon: 'exclamation-triangle',
    color: 'error',
  };

  return (
    <div className="placeholder-page">
      <div className="placeholder-page__card">
        <div className={`placeholder-page__icon placeholder-page__icon--${form.color}`}>
          <Icon name={form.icon} size="4xl" />
        </div>
        
        <span className="placeholder-page__status">{t('comingSoon')}</span>
        
        <h1 className="placeholder-page__title">{form.title}</h1>
        
        <p className="placeholder-page__description">{form.description}</p>
        
        <p className="placeholder-page__message">{t('comingSoonMessage')}</p>

        <Link to="/">
          <Button type="outlined" color="primary" size="m">
            <Icon name="arrow-left" size="sm" />
            {t('backToHome')}
          </Button>
        </Link>
      </div>
    </div>
  );
}

PlaceholderPage.propTypes = {
  formKey: PropTypes.string.isRequired,
};

export default PlaceholderPage;
