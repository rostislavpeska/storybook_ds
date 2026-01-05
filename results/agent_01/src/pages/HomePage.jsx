import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function HomePage() {
  const { t } = useTranslation()

  const forms = [
    {
      id: 'rekvalifikace',
      path: '/form/rekvalifikace',
      active: true
    },
    {
      id: 'povez',
      path: '/form/povez',
      active: false
    },
    {
      id: 'dotace',
      path: '/form/dotace-vzdelavani',
      active: false
    }
  ]

  return (
    <div>
      <h1 className="page-title">{t('home.title')}</h1>
      <p className="page-subtitle">{t('home.subtitle')}</p>

      <div className="cards-grid" role="list">
        {forms.map((form) => (
          <Link
            key={form.id}
            to={form.path}
            className={`form-card ${!form.active ? 'disabled' : ''}`}
            role="listitem"
            aria-describedby={`${form.id}-status`}
          >
            <span
              id={`${form.id}-status`}
              className={`card-status ${form.active ? 'active' : 'coming-soon'}`}
            >
              {t(`forms.${form.id}.status`)}
            </span>
            <h2 className="card-title">{t(`forms.${form.id}.title`)}</h2>
            <p className="card-description">{t(`forms.${form.id}.description`)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage
