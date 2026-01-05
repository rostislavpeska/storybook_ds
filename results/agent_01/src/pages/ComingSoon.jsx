import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { GovButton, GovCard } from '@gov-design-system-ce/react'

function ComingSoon({ formKey }) {
  const { t } = useTranslation()

  return (
    <div className="form-page">
      <h1 className="page-title">{t(`forms.${formKey}.title`)}</h1>
      
      <GovCard>
        <p style={{ textAlign: 'center', padding: '2rem', fontSize: '1.25rem' }}>
          🔒 {t('forms.comingSoon')}
        </p>
      </GovCard>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/">
          <GovButton type="outlined">
            {t('actions.back')}
          </GovButton>
        </Link>
      </div>
    </div>
  )
}

export default ComingSoon


