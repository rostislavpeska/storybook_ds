import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { jsPDF } from 'jspdf'
import {
  GovButton,
  GovFormInput,
  GovFormCheckbox,
  GovFormControl,
  GovFormLabel,
  GovFormTextarea,
  GovFormRadio,
  GovFormGroup,
  GovCard
} from '@gov-design-system-ce/react'

const STORAGE_KEY = 'rekvalifikace-draft'

const initialFormData = {
  applicantType: '',
  firstName: '',
  lastName: '',
  birthNumber: '',
  gender: '',
  birthDate: '',
  email: '',
  phone: '',
  dataBoxId: '',
  city: '',
  cityPart: '',
  postalCode: '',
  street: '',
  houseNumber: '',
  registrationNumber: '',
  orientationNumber: '',
  educationDescription: '',
  requalifications: [{ name: '', year: '' }],
  professions: [{ name: '', years: '', months: '' }],
  courseName: '',
  facilityName: '',
  facilityAddress: '',
  justification: '',
  plannedFrom: '',
  employerName: '',
  businessField: '',
  confirmRead: false,
  signedIn: '',
  signatureDate: ''
}

function RekvalifikaceForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState(null)

  // Load draft on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setFormData(JSON.parse(saved))
        setMessage({ type: 'success', text: t('messages.draftLoaded') })
        setTimeout(() => setMessage(null), 3000)
      } catch (e) {
        console.error('Failed to load draft', e)
      }
    }
  }, [t])

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }))
    }
  }

  const handleArrayChange = (arrayName, index, field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].map((item, i) =>
        i === index ? { ...item, [field]: e.target.value } : item
      )
    }))
  }

  const addArrayItem = (arrayName, template) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName], template]
    }))
  }

  const removeArrayItem = (arrayName, index) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((_, i) => i !== index)
    }))
  }

  const saveDraft = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    setMessage({ type: 'success', text: t('messages.draftSaved') })
    setTimeout(() => setMessage(null), 3000)
  }

  const validate = () => {
    const newErrors = {}
    const required = ['firstName', 'lastName', 'birthNumber', 'gender', 'birthDate', 
      'email', 'phone', 'city', 'postalCode', 'street', 'houseNumber', 
      'courseName', 'facilityName', 'facilityAddress', 'justification',
      'signedIn', 'signatureDate', 'applicantType']

    required.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = t('form.required')
      }
    })

    if (!formData.confirmRead) {
      newErrors.confirmRead = t('form.required')
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('form.invalidEmail')
    }

    if (formData.birthNumber && !/^\d{6}\/\d{3,4}$/.test(formData.birthNumber)) {
      newErrors.birthNumber = t('form.invalidBirthNumber')
    }

    if (formData.postalCode && !/^\d{5}$/.test(formData.postalCode.replace(/\s/g, ''))) {
      newErrors.postalCode = t('form.invalidPostalCode')
    }

    setErrors(newErrors)
    
    if (Object.keys(newErrors).length > 0) {
      setMessage({ type: 'error', text: t('messages.validationErrors') })
      return false
    }
    
    setMessage({ type: 'success', text: t('messages.validationSuccess') })
    setTimeout(() => setMessage(null), 3000)
    return true
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    let y = 20

    doc.setFontSize(18)
    doc.text(t('forms.rekvalifikace.title'), 20, y)
    y += 15

    doc.setFontSize(12)
    const addField = (label, value) => {
      if (y > 270) {
        doc.addPage()
        y = 20
      }
      doc.text(`${label}: ${value || '-'}`, 20, y)
      y += 8
    }

    doc.setFontSize(14)
    doc.text(t('form.sectionA'), 20, y)
    y += 10
    doc.setFontSize(12)

    addField(t('form.applicantType'), formData.applicantType === 'jobseeker' ? t('form.applicantTypeJobSeeker') : t('form.applicantTypeInterested'))
    addField(t('form.firstName'), formData.firstName)
    addField(t('form.lastName'), formData.lastName)
    addField(t('form.birthNumber'), formData.birthNumber)
    addField(t('form.gender'), formData.gender === 'male' ? t('form.genderMale') : t('form.genderFemale'))
    addField(t('form.birthDate'), formData.birthDate)
    addField(t('form.email'), formData.email)
    addField(t('form.phone'), formData.phone)
    addField(t('form.dataBoxId'), formData.dataBoxId)

    y += 5
    doc.setFontSize(14)
    doc.text(t('form.addressSection'), 20, y)
    y += 10
    doc.setFontSize(12)

    addField(t('form.city'), formData.city)
    addField(t('form.cityPart'), formData.cityPart)
    addField(t('form.postalCode'), formData.postalCode)
    addField(t('form.street'), formData.street)
    addField(t('form.houseNumber'), formData.houseNumber)

    y += 5
    doc.setFontSize(14)
    doc.text(t('form.desiredRequalificationSection'), 20, y)
    y += 10
    doc.setFontSize(12)

    addField(t('form.courseName'), formData.courseName)
    addField(t('form.facilityName'), formData.facilityName)
    addField(t('form.facilityAddress'), formData.facilityAddress)
    addField(t('form.justificationText'), formData.justification)

    const date = new Date().toISOString().split('T')[0]
    doc.save(`rekvalifikace-formular-${date}.pdf`)
    setMessage({ type: 'success', text: t('messages.pdfGenerated') })
    setTimeout(() => setMessage(null), 3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      alert('Formulář je připraven k odeslání!')
    }
  }

  const renderError = (field) => {
    if (errors[field]) {
      return <span className="error-text" role="alert">{errors[field]}</span>
    }
    return null
  }

  return (
    <div className="form-page">
      <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
        <GovButton type="outlined" size="s">
          ← {t('actions.back')}
        </GovButton>
      </Link>

      <h1 className="page-title">{t('forms.rekvalifikace.title')}</h1>

      {message && (
        <div className={`message ${message.type}`} role="alert">
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Section A: Applicant */}
        <section className="form-section" aria-labelledby="section-a">
          <h2 id="section-a" className="section-title">{t('form.sectionA')}</h2>

          <div className="form-row">
            <GovFormGroup>
              <GovFormLabel>{t('form.applicantType')} *</GovFormLabel>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <GovFormRadio
                  name="applicantType"
                  value="jobseeker"
                  checked={formData.applicantType === 'jobseeker'}
                  onChange={handleChange('applicantType')}
                >
                  {t('form.applicantTypeJobSeeker')}
                </GovFormRadio>
                <GovFormRadio
                  name="applicantType"
                  value="interested"
                  checked={formData.applicantType === 'interested'}
                  onChange={handleChange('applicantType')}
                >
                  {t('form.applicantTypeInterested')}
                </GovFormRadio>
              </div>
              {renderError('applicantType')}
            </GovFormGroup>
          </div>

          <div className="form-grid">
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.firstName')} *</GovFormLabel>
                <GovFormInput
                  value={formData.firstName}
                  onChange={handleChange('firstName')}
                  invalid={!!errors.firstName}
                  aria-required="true"
                />
              </GovFormControl>
              {renderError('firstName')}
            </div>
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.lastName')} *</GovFormLabel>
                <GovFormInput
                  value={formData.lastName}
                  onChange={handleChange('lastName')}
                  invalid={!!errors.lastName}
                  aria-required="true"
                />
              </GovFormControl>
              {renderError('lastName')}
            </div>
          </div>

          <div className="form-grid">
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.birthNumber')} *</GovFormLabel>
                <GovFormInput
                  value={formData.birthNumber}
                  onChange={handleChange('birthNumber')}
                  placeholder="XXXXXX/XXXX"
                  invalid={!!errors.birthNumber}
                  aria-required="true"
                  aria-describedby="birthNumber-hint"
                />
                <small id="birthNumber-hint" style={{ color: '#666' }}>{t('form.birthNumberFormat')}</small>
              </GovFormControl>
              {renderError('birthNumber')}
            </div>
            <div className="form-row">
              <GovFormGroup>
                <GovFormLabel>{t('form.gender')} *</GovFormLabel>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <GovFormRadio
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange('gender')}
                  >
                    {t('form.genderMale')}
                  </GovFormRadio>
                  <GovFormRadio
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange('gender')}
                  >
                    {t('form.genderFemale')}
                  </GovFormRadio>
                </div>
                {renderError('gender')}
              </GovFormGroup>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.birthDate')} *</GovFormLabel>
                <GovFormInput
                  type="date"
                  value={formData.birthDate}
                  onChange={handleChange('birthDate')}
                  invalid={!!errors.birthDate}
                  aria-required="true"
                />
              </GovFormControl>
              {renderError('birthDate')}
            </div>
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.email')} *</GovFormLabel>
                <GovFormInput
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  invalid={!!errors.email}
                  aria-required="true"
                />
              </GovFormControl>
              {renderError('email')}
            </div>
          </div>

          <div className="form-grid">
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.phone')} *</GovFormLabel>
                <GovFormInput
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                  invalid={!!errors.phone}
                  aria-required="true"
                />
              </GovFormControl>
              {renderError('phone')}
            </div>
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.dataBoxId')}</GovFormLabel>
                <GovFormInput
                  value={formData.dataBoxId}
                  onChange={handleChange('dataBoxId')}
                />
              </GovFormControl>
            </div>
          </div>
        </section>

        {/* Address Section */}
        <section className="form-section" aria-labelledby="section-address">
          <h2 id="section-address" className="section-title">{t('form.addressSection')}</h2>

          <div className="form-grid">
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.city')} *</GovFormLabel>
                <GovFormInput
                  value={formData.city}
                  onChange={handleChange('city')}
                  invalid={!!errors.city}
                  aria-required="true"
                />
              </GovFormControl>
              {renderError('city')}
            </div>
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.cityPart')}</GovFormLabel>
                <GovFormInput
                  value={formData.cityPart}
                  onChange={handleChange('cityPart')}
                />
              </GovFormControl>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.postalCode')} *</GovFormLabel>
                <GovFormInput
                  value={formData.postalCode}
                  onChange={handleChange('postalCode')}
                  placeholder="12345"
                  invalid={!!errors.postalCode}
                  aria-required="true"
                />
              </GovFormControl>
              {renderError('postalCode')}
            </div>
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.street')} *</GovFormLabel>
                <GovFormInput
                  value={formData.street}
                  onChange={handleChange('street')}
                  invalid={!!errors.street}
                  aria-required="true"
                />
              </GovFormControl>
              {renderError('street')}
            </div>
          </div>

          <div className="form-grid-3">
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.houseNumber')} *</GovFormLabel>
                <GovFormInput
                  value={formData.houseNumber}
                  onChange={handleChange('houseNumber')}
                  invalid={!!errors.houseNumber}
                  aria-required="true"
                />
              </GovFormControl>
              {renderError('houseNumber')}
            </div>
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.registrationNumber')}</GovFormLabel>
                <GovFormInput
                  value={formData.registrationNumber}
                  onChange={handleChange('registrationNumber')}
                />
              </GovFormControl>
            </div>
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.orientationNumber')}</GovFormLabel>
                <GovFormInput
                  value={formData.orientationNumber}
                  onChange={handleChange('orientationNumber')}
                />
              </GovFormControl>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="form-section" aria-labelledby="section-education">
          <h2 id="section-education" className="section-title">{t('form.educationSection')}</h2>
          <div className="form-row">
            <GovFormControl>
              <GovFormLabel slot="top">{t('form.educationDescription')}</GovFormLabel>
              <GovFormTextarea
                value={formData.educationDescription}
                onChange={handleChange('educationDescription')}
                rows={4}
              />
            </GovFormControl>
          </div>
        </section>

        {/* Completed Requalifications */}
        <section className="form-section" aria-labelledby="section-requalifications">
          <h2 id="section-requalifications" className="section-title">{t('form.completedRequalificationsSection')}</h2>
          
          {formData.requalifications.map((req, index) => (
            <div key={index} className="dynamic-entry">
              {index > 0 && (
                <GovButton
                  type="outlined"
                  size="s"
                  className="remove-entry-btn"
                  onClick={() => removeArrayItem('requalifications', index)}
                >
                  {t('actions.remove')}
                </GovButton>
              )}
              <div className="form-grid">
                <div className="form-row">
                  <GovFormControl>
                    <GovFormLabel slot="top">{t('form.requalificationName')}</GovFormLabel>
                    <GovFormInput
                      value={req.name}
                      onChange={handleArrayChange('requalifications', index, 'name')}
                    />
                  </GovFormControl>
                </div>
                <div className="form-row">
                  <GovFormControl>
                    <GovFormLabel slot="top">{t('form.completedYear')}</GovFormLabel>
                    <GovFormInput
                      type="number"
                      value={req.year}
                      onChange={handleArrayChange('requalifications', index, 'year')}
                      min="1950"
                      max="2026"
                    />
                  </GovFormControl>
                </div>
              </div>
            </div>
          ))}
          
          <GovButton
            type="outlined"
            size="s"
            onClick={() => addArrayItem('requalifications', { name: '', year: '' })}
          >
            {t('form.addAnother')}
          </GovButton>
        </section>

        {/* Professions */}
        <section className="form-section" aria-labelledby="section-professions">
          <h2 id="section-professions" className="section-title">{t('form.professionsSection')}</h2>
          
          {formData.professions.map((prof, index) => (
            <div key={index} className="dynamic-entry">
              {index > 0 && (
                <GovButton
                  type="outlined"
                  size="s"
                  className="remove-entry-btn"
                  onClick={() => removeArrayItem('professions', index)}
                >
                  {t('actions.remove')}
                </GovButton>
              )}
              <div className="form-grid-3">
                <div className="form-row">
                  <GovFormControl>
                    <GovFormLabel slot="top">{t('form.professionName')}</GovFormLabel>
                    <GovFormInput
                      value={prof.name}
                      onChange={handleArrayChange('professions', index, 'name')}
                    />
                  </GovFormControl>
                </div>
                <div className="form-row">
                  <GovFormControl>
                    <GovFormLabel slot="top">{t('form.yearsOfPractice')}</GovFormLabel>
                    <GovFormInput
                      type="number"
                      value={prof.years}
                      onChange={handleArrayChange('professions', index, 'years')}
                      min="0"
                    />
                  </GovFormControl>
                </div>
                <div className="form-row">
                  <GovFormControl>
                    <GovFormLabel slot="top">{t('form.monthsOfPractice')}</GovFormLabel>
                    <GovFormInput
                      type="number"
                      value={prof.months}
                      onChange={handleArrayChange('professions', index, 'months')}
                      min="0"
                      max="11"
                    />
                  </GovFormControl>
                </div>
              </div>
            </div>
          ))}
          
          <GovButton
            type="outlined"
            size="s"
            onClick={() => addArrayItem('professions', { name: '', years: '', months: '' })}
          >
            {t('form.addAnother')}
          </GovButton>
        </section>

        {/* Desired Requalification */}
        <section className="form-section" aria-labelledby="section-desired">
          <h2 id="section-desired" className="section-title">{t('form.desiredRequalificationSection')}</h2>
          <div className="form-row">
            <GovFormControl>
              <GovFormLabel slot="top">{t('form.courseName')} *</GovFormLabel>
              <GovFormInput
                value={formData.courseName}
                onChange={handleChange('courseName')}
                invalid={!!errors.courseName}
                aria-required="true"
              />
            </GovFormControl>
            {renderError('courseName')}
          </div>
        </section>

        {/* Facility */}
        <section className="form-section" aria-labelledby="section-facility">
          <h2 id="section-facility" className="section-title">{t('form.facilitySection')}</h2>
          <div className="form-grid">
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.facilityName')} *</GovFormLabel>
                <GovFormInput
                  value={formData.facilityName}
                  onChange={handleChange('facilityName')}
                  invalid={!!errors.facilityName}
                  aria-required="true"
                />
              </GovFormControl>
              {renderError('facilityName')}
            </div>
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.facilityAddress')} *</GovFormLabel>
                <GovFormInput
                  value={formData.facilityAddress}
                  onChange={handleChange('facilityAddress')}
                  invalid={!!errors.facilityAddress}
                  aria-required="true"
                />
              </GovFormControl>
              {renderError('facilityAddress')}
            </div>
          </div>
        </section>

        {/* Justification */}
        <section className="form-section" aria-labelledby="section-justification">
          <h2 id="section-justification" className="section-title">{t('form.justificationSection')}</h2>
          <div className="form-row">
            <GovFormControl>
              <GovFormLabel slot="top">{t('form.justificationText')} *</GovFormLabel>
              <GovFormTextarea
                value={formData.justification}
                onChange={handleChange('justification')}
                rows={5}
                invalid={!!errors.justification}
                aria-required="true"
              />
            </GovFormControl>
            {renderError('justification')}
          </div>
        </section>

        {/* Planned Employment */}
        <section className="form-section" aria-labelledby="section-planned">
          <h2 id="section-planned" className="section-title">{t('form.plannedEmploymentSection')}</h2>
          <div className="form-row">
            <GovFormControl>
              <GovFormLabel slot="top">{t('form.fromWhen')}</GovFormLabel>
              <GovFormInput
                type="date"
                value={formData.plannedFrom}
                onChange={handleChange('plannedFrom')}
              />
            </GovFormControl>
          </div>
        </section>

        {/* Expected Employer */}
        <section className="form-section" aria-labelledby="section-employer">
          <h2 id="section-employer" className="section-title">{t('form.expectedEmployerSection')}</h2>
          <div className="form-row">
            <GovFormControl>
              <GovFormLabel slot="top">{t('form.employerName')}</GovFormLabel>
              <GovFormInput
                value={formData.employerName}
                onChange={handleChange('employerName')}
              />
            </GovFormControl>
          </div>
        </section>

        {/* Self Employment */}
        <section className="form-section" aria-labelledby="section-self">
          <h2 id="section-self" className="section-title">{t('form.selfEmploymentSection')}</h2>
          <div className="form-row">
            <GovFormControl>
              <GovFormLabel slot="top">{t('form.businessField')}</GovFormLabel>
              <GovFormInput
                value={formData.businessField}
                onChange={handleChange('businessField')}
              />
            </GovFormControl>
          </div>
        </section>

        {/* Section B: Confirmation */}
        <section className="form-section" aria-labelledby="section-b">
          <h2 id="section-b" className="section-title">{t('form.sectionB')}</h2>

          <div className="form-row">
            <GovFormCheckbox
              checked={formData.confirmRead}
              onChange={handleChange('confirmRead')}
              invalid={!!errors.confirmRead}
              aria-required="true"
            >
              {t('form.confirmRead')} *
            </GovFormCheckbox>
            {renderError('confirmRead')}
          </div>

          <div className="form-grid">
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.signedIn')} *</GovFormLabel>
                <GovFormInput
                  value={formData.signedIn}
                  onChange={handleChange('signedIn')}
                  invalid={!!errors.signedIn}
                  aria-required="true"
                />
              </GovFormControl>
              {renderError('signedIn')}
            </div>
            <div className="form-row">
              <GovFormControl>
                <GovFormLabel slot="top">{t('form.signatureDate')} *</GovFormLabel>
                <GovFormInput
                  type="date"
                  value={formData.signatureDate}
                  onChange={handleChange('signatureDate')}
                  invalid={!!errors.signatureDate}
                  aria-required="true"
                />
              </GovFormControl>
              {renderError('signatureDate')}
            </div>
          </div>
        </section>

        {/* Actions */}
        <div className="form-actions">
          <GovButton type="outlined" onClick={saveDraft}>
            {t('actions.saveDraft')}
          </GovButton>
          <GovButton type="outlined" onClick={generatePDF}>
            {t('actions.printPdf')}
          </GovButton>
          <GovButton type="outlined" onClick={validate}>
            {t('actions.validate')}
          </GovButton>
          <div className="form-actions-primary">
            <GovButton type="primary" nativeType="submit">
              {t('actions.submit')}
            </GovButton>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RekvalifikaceForm
