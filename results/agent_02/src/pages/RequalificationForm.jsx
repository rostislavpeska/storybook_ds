import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { useLanguage } from '../i18n/LanguageContext';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Radio, RadioGroup } from '../components/Radio';
import { Checkbox } from '../components/Checkbox';
import { Datepicker } from '../components/Datepicker';
import { FileUpload } from '../components/FileUpload';
import './RequalificationForm.css';

const STORAGE_KEY = 'gov-requalification-draft';

const initialFormData = {
  // Applicant
  applicantType: 'jobSeeker',
  firstName: '',
  lastName: '',
  birthNumber: '',
  gender: '',
  birthDate: null,
  email: '',
  phone: '',
  dataBoxId: '',
  
  // Address
  city: '',
  cityPart: '',
  postalCode: '',
  street: '',
  buildingNumber: '',
  registrationNumber: '',
  orientationNumber: '',
  
  // Education
  educationDescription: '',
  
  // Completed Requalifications
  completedRequalifications: [],
  
  // Professions
  professions: [],
  
  // Desired Requalification
  courseName: '',
  
  // Provider
  providerName: '',
  providerAddress: '',
  
  // Justification
  justification: '',
  
  // Planned Use
  plannedFrom: null,
  
  // Employer
  employerName: '',
  
  // Self Employment
  businessField: '',
  
  // Declaration
  declarationConfirmed: false,
  signedIn: '',
  signatureDate: null,
  
  // Attachments
  attachments: [],
};

function RequalificationForm() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showValidation, setShowValidation] = useState(false);
  const [message, setMessage] = useState(null);

  // Load draft from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Convert date strings back to Date objects
        if (parsed.birthDate) parsed.birthDate = new Date(parsed.birthDate);
        if (parsed.plannedFrom) parsed.plannedFrom = new Date(parsed.plannedFrom);
        if (parsed.signatureDate) parsed.signatureDate = new Date(parsed.signatureDate);
        setFormData(parsed);
        showMessage(t('draftLoaded'));
      } catch (e) {
        console.error('Failed to load draft:', e);
      }
    }
  }, []);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000);
  };

  const handleChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  }, [errors]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  }, [handleChange]);

  // Dynamic list handlers
  const addRequalification = () => {
    setFormData(prev => ({
      ...prev,
      completedRequalifications: [
        ...prev.completedRequalifications,
        { name: '', year: '' }
      ]
    }));
  };

  const removeRequalification = (index) => {
    setFormData(prev => ({
      ...prev,
      completedRequalifications: prev.completedRequalifications.filter((_, i) => i !== index)
    }));
  };

  const updateRequalification = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      completedRequalifications: prev.completedRequalifications.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addProfession = () => {
    setFormData(prev => ({
      ...prev,
      professions: [
        ...prev.professions,
        { name: '', years: '', months: '' }
      ]
    }));
  };

  const removeProfession = (index) => {
    setFormData(prev => ({
      ...prev,
      professions: prev.professions.filter((_, i) => i !== index)
    }));
  };

  const updateProfession = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      professions: prev.professions.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    // Required fields
    if (!formData.firstName.trim()) newErrors.firstName = t('required');
    if (!formData.lastName.trim()) newErrors.lastName = t('required');
    if (!formData.birthNumber.trim()) newErrors.birthNumber = t('required');
    if (!formData.gender) newErrors.gender = t('required');
    if (!formData.birthDate) newErrors.birthDate = t('required');
    if (!formData.email.trim()) newErrors.email = t('required');
    if (!formData.phone.trim()) newErrors.phone = t('required');

    // Email format
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('invalidEmail');
    }

    // Birth number format (XXXXXX/XXXX)
    if (formData.birthNumber && !/^\d{6}\/\d{4}$/.test(formData.birthNumber)) {
      newErrors.birthNumber = t('invalidBirthNumber');
    }

    // Address
    if (!formData.city.trim()) newErrors.city = t('required');
    if (!formData.postalCode.trim()) newErrors.postalCode = t('required');
    if (formData.postalCode && !/^\d{5}$/.test(formData.postalCode.replace(/\s/g, ''))) {
      newErrors.postalCode = t('invalidPostalCode');
    }
    if (!formData.street.trim()) newErrors.street = t('required');
    if (!formData.buildingNumber.trim()) newErrors.buildingNumber = t('required');

    // Desired Requalification
    if (!formData.courseName.trim()) newErrors.courseName = t('required');

    // Provider
    if (!formData.providerName.trim()) newErrors.providerName = t('required');
    if (!formData.providerAddress.trim()) newErrors.providerAddress = t('required');

    // Justification
    if (!formData.justification.trim()) newErrors.justification = t('required');

    // Declaration
    if (!formData.declarationConfirmed) newErrors.declarationConfirmed = t('required');
    if (!formData.signedIn.trim()) newErrors.signedIn = t('required');
    if (!formData.signatureDate) newErrors.signatureDate = t('required');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Save draft
  const saveDraft = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    showMessage(t('draftSaved'));
  };

  // Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 20;
    const lineHeight = 7;
    const marginLeft = 20;
    const maxWidth = pageWidth - 40;

    // Title
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text(t('formRequalification'), pageWidth / 2, y, { align: 'center' });
    y += lineHeight * 2;

    // Helper to add sections
    const addSection = (title) => {
      if (y > 260) {
        doc.addPage();
        y = 20;
      }
      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      doc.text(title, marginLeft, y);
      y += lineHeight;
      doc.setFont(undefined, 'normal');
      doc.setFontSize(10);
    };

    const addField = (label, value) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      const text = `${label}: ${value || '-'}`;
      const lines = doc.splitTextToSize(text, maxWidth);
      doc.text(lines, marginLeft, y);
      y += lineHeight * lines.length;
    };

    // Applicant Section
    addSection(t('sectionApplicant'));
    addField(t('applicantType'), formData.applicantType === 'jobSeeker' ? t('applicantJobSeeker') : t('applicantInterested'));
    addField(t('firstName'), formData.firstName);
    addField(t('lastName'), formData.lastName);
    addField(t('birthNumber'), formData.birthNumber);
    addField(t('gender'), formData.gender === 'male' ? t('genderMale') : t('genderFemale'));
    addField(t('birthDate'), formData.birthDate ? formData.birthDate.toLocaleDateString('cs-CZ') : '');
    addField(t('email'), formData.email);
    addField(t('phone'), formData.phone);
    addField(t('dataBoxId'), formData.dataBoxId);
    y += lineHeight;

    // Address Section
    addSection(t('sectionAddress'));
    addField(t('city'), formData.city);
    addField(t('cityPart'), formData.cityPart);
    addField(t('postalCode'), formData.postalCode);
    addField(t('street'), formData.street);
    addField(t('buildingNumber'), formData.buildingNumber);
    addField(t('registrationNumber'), formData.registrationNumber);
    addField(t('orientationNumber'), formData.orientationNumber);
    y += lineHeight;

    // Education
    addSection(t('sectionEducation'));
    addField(t('educationDescription'), formData.educationDescription);
    y += lineHeight;

    // Desired Requalification
    addSection(t('sectionDesiredRequalification'));
    addField(t('courseName'), formData.courseName);
    y += lineHeight;

    // Provider
    addSection(t('sectionProvider'));
    addField(t('providerName'), formData.providerName);
    addField(t('providerAddress'), formData.providerAddress);
    y += lineHeight;

    // Justification
    addSection(t('sectionJustification'));
    addField(t('justification'), formData.justification);
    y += lineHeight;

    // Declaration
    addSection(t('sectionDeclaration'));
    addField(t('signedIn'), formData.signedIn);
    addField(t('signatureDate'), formData.signatureDate ? formData.signatureDate.toLocaleDateString('cs-CZ') : '');

    // Save
    const date = new Date().toISOString().split('T')[0];
    doc.save(`rekvalifikace-formular-${date}.pdf`);
    showMessage(t('pdfGenerated'));
  };

  // Validate form button
  const handleValidate = () => {
    setShowValidation(true);
    const isValid = validate();
    if (isValid) {
      showMessage(t('formValid'));
    }
  };

  // Submit
  const handleSubmit = () => {
    setShowValidation(true);
    if (validate()) {
      // In a real app, this would submit to an API
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="requalification-form">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/" className="breadcrumbs__item">{t('home')}</Link>
        <span className="breadcrumbs__separator" aria-hidden="true">/</span>
        <span className="breadcrumbs__current">{t('formRequalification')}</span>
      </nav>

      <h1 className="page-title">{t('formRequalification')}</h1>

      {/* Message Toast */}
      {message && (
        <div className="form-message" role="status" aria-live="polite">
          {message}
        </div>
      )}

      {/* Validation Summary */}
      {showValidation && Object.keys(errors).length > 0 && (
        <div className="validation-summary" role="alert">
          <h2 className="validation-summary__title">{t('validationErrors')}</h2>
          <ul className="validation-summary__list">
            {Object.entries(errors).map(([field, error]) => (
              <li key={field} className="validation-summary__item">
                {error}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={(e) => e.preventDefault()} noValidate>
        {/* Section A: Applicant */}
        <section className="form-section" aria-labelledby="section-applicant">
          <h2 id="section-applicant" className="form-section__title">{t('sectionApplicant')}</h2>
          
          <div className="form-row">
            <RadioGroup
              name="applicantType"
              label={t('applicantType')}
              value={formData.applicantType}
              onChange={(e) => handleChange('applicantType', e.target.value)}
              direction="horizontal"
              required
            >
              <Radio value="jobSeeker" label={t('applicantJobSeeker')} />
              <Radio value="interested" label={t('applicantInterested')} />
            </RadioGroup>
          </div>

          <div className="form-row form-row--double">
            <Input
              label={t('firstName')}
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              invalid={showValidation && !!errors.firstName}
              invalidMessage={errors.firstName}
            />
            <Input
              label={t('lastName')}
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              invalid={showValidation && !!errors.lastName}
              invalidMessage={errors.lastName}
            />
          </div>

          <div className="form-row form-row--double">
            <Input
              label={t('birthNumber')}
              name="birthNumber"
              value={formData.birthNumber}
              onChange={handleInputChange}
              placeholder="XXXXXX/XXXX"
              helperText={t('birthNumberFormat')}
              required
              invalid={showValidation && !!errors.birthNumber}
              invalidMessage={errors.birthNumber}
            />
            <RadioGroup
              name="gender"
              label={t('gender')}
              value={formData.gender}
              onChange={(e) => handleChange('gender', e.target.value)}
              direction="horizontal"
              required
              invalid={showValidation && !!errors.gender}
              invalidMessage={errors.gender}
            >
              <Radio value="male" label={t('genderMale')} />
              <Radio value="female" label={t('genderFemale')} />
            </RadioGroup>
          </div>

          <div className="form-row form-row--triple">
            <Datepicker
              label={t('birthDate')}
              name="birthDate"
              value={formData.birthDate}
              onChange={(date) => handleChange('birthDate', date)}
              locale={language}
              required
              invalid={showValidation && !!errors.birthDate}
              invalidMessage={errors.birthDate}
            />
            <Input
              label={t('email')}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              invalid={showValidation && !!errors.email}
              invalidMessage={errors.email}
            />
            <Input
              label={t('phone')}
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              invalid={showValidation && !!errors.phone}
              invalidMessage={errors.phone}
            />
          </div>

          <div className="form-row form-row--single">
            <Input
              label={t('dataBoxId')}
              name="dataBoxId"
              value={formData.dataBoxId}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Section: Address */}
        <section className="form-section" aria-labelledby="section-address">
          <h2 id="section-address" className="form-section__title">{t('sectionAddress')}</h2>
          
          <div className="form-row form-row--double">
            <Input
              label={t('city')}
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              invalid={showValidation && !!errors.city}
              invalidMessage={errors.city}
            />
            <Input
              label={t('cityPart')}
              name="cityPart"
              value={formData.cityPart}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row form-row--double">
            <Input
              label={t('postalCode')}
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
              invalid={showValidation && !!errors.postalCode}
              invalidMessage={errors.postalCode}
            />
            <Input
              label={t('street')}
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              required
              invalid={showValidation && !!errors.street}
              invalidMessage={errors.street}
            />
          </div>

          <div className="form-row form-row--triple">
            <Input
              label={t('buildingNumber')}
              name="buildingNumber"
              value={formData.buildingNumber}
              onChange={handleInputChange}
              required
              invalid={showValidation && !!errors.buildingNumber}
              invalidMessage={errors.buildingNumber}
            />
            <Input
              label={t('registrationNumber')}
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleInputChange}
            />
            <Input
              label={t('orientationNumber')}
              name="orientationNumber"
              value={formData.orientationNumber}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Section: Education */}
        <section className="form-section" aria-labelledby="section-education">
          <h2 id="section-education" className="form-section__title">{t('sectionEducation')}</h2>
          
          <div className="form-row form-row--single">
            <Input
              label={t('educationDescription')}
              name="educationDescription"
              value={formData.educationDescription}
              onChange={handleInputChange}
              multiline
              rows={4}
            />
          </div>
        </section>

        {/* Section: Completed Requalifications */}
        <section className="form-section" aria-labelledby="section-requalifications">
          <h2 id="section-requalifications" className="form-section__title">{t('sectionCompletedRequalifications')}</h2>
          
          <div className="dynamic-list">
            {formData.completedRequalifications.map((item, index) => (
              <div key={index} className="dynamic-list__item">
                <div className="dynamic-list__item-header">
                  <span className="dynamic-list__item-title">{t('requalificationName')} #{index + 1}</span>
                  <button
                    type="button"
                    className="dynamic-list__remove-btn"
                    onClick={() => removeRequalification(index)}
                    aria-label={`Remove requalification ${index + 1}`}
                  >
                    ✕
                  </button>
                </div>
                <div className="form-row form-row--double">
                  <Input
                    label={t('requalificationName')}
                    value={item.name}
                    onChange={(e) => updateRequalification(index, 'name', e.target.value)}
                  />
                  <Input
                    label={t('completionYear')}
                    type="number"
                    value={item.year}
                    onChange={(e) => updateRequalification(index, 'year', e.target.value)}
                  />
                </div>
              </div>
            ))}
            <Button
              type="outlined"
              color="primary"
              size="s"
              onClick={addRequalification}
              className="dynamic-list__add-btn"
            >
              {t('addAnother')}
            </Button>
          </div>
        </section>

        {/* Section: Professions */}
        <section className="form-section" aria-labelledby="section-professions">
          <h2 id="section-professions" className="form-section__title">{t('sectionProfessions')}</h2>
          
          <div className="dynamic-list">
            {formData.professions.map((item, index) => (
              <div key={index} className="dynamic-list__item">
                <div className="dynamic-list__item-header">
                  <span className="dynamic-list__item-title">{t('professionName')} #{index + 1}</span>
                  <button
                    type="button"
                    className="dynamic-list__remove-btn"
                    onClick={() => removeProfession(index)}
                    aria-label={`Remove profession ${index + 1}`}
                  >
                    ✕
                  </button>
                </div>
                <div className="form-row form-row--triple">
                  <Input
                    label={t('professionName')}
                    value={item.name}
                    onChange={(e) => updateProfession(index, 'name', e.target.value)}
                  />
                  <Input
                    label={t('yearsOfExperience')}
                    type="number"
                    value={item.years}
                    onChange={(e) => updateProfession(index, 'years', e.target.value)}
                  />
                  <Input
                    label={t('monthsOfExperience')}
                    type="number"
                    value={item.months}
                    onChange={(e) => updateProfession(index, 'months', e.target.value)}
                  />
                </div>
              </div>
            ))}
            <Button
              type="outlined"
              color="primary"
              size="s"
              onClick={addProfession}
              className="dynamic-list__add-btn"
            >
              {t('addAnother')}
            </Button>
          </div>
        </section>

        {/* Section: Desired Requalification */}
        <section className="form-section" aria-labelledby="section-desired">
          <h2 id="section-desired" className="form-section__title">{t('sectionDesiredRequalification')}</h2>
          
          <div className="form-row form-row--single">
            <Input
              label={t('courseName')}
              name="courseName"
              value={formData.courseName}
              onChange={handleInputChange}
              required
              invalid={showValidation && !!errors.courseName}
              invalidMessage={errors.courseName}
            />
          </div>
        </section>

        {/* Section: Provider */}
        <section className="form-section" aria-labelledby="section-provider">
          <h2 id="section-provider" className="form-section__title">{t('sectionProvider')}</h2>
          
          <div className="form-row form-row--double">
            <Input
              label={t('providerName')}
              name="providerName"
              value={formData.providerName}
              onChange={handleInputChange}
              required
              invalid={showValidation && !!errors.providerName}
              invalidMessage={errors.providerName}
            />
            <Input
              label={t('providerAddress')}
              name="providerAddress"
              value={formData.providerAddress}
              onChange={handleInputChange}
              required
              invalid={showValidation && !!errors.providerAddress}
              invalidMessage={errors.providerAddress}
            />
          </div>
        </section>

        {/* Section: Justification */}
        <section className="form-section" aria-labelledby="section-justification">
          <h2 id="section-justification" className="form-section__title">{t('sectionJustification')}</h2>
          
          <div className="form-row form-row--single">
            <Input
              label={t('justification')}
              name="justification"
              value={formData.justification}
              onChange={handleInputChange}
              multiline
              rows={4}
              required
              invalid={showValidation && !!errors.justification}
              invalidMessage={errors.justification}
            />
          </div>
        </section>

        {/* Section: Planned Use */}
        <section className="form-section" aria-labelledby="section-planned">
          <h2 id="section-planned" className="form-section__title">{t('sectionPlannedUse')}</h2>
          
          <div className="form-row form-row--single">
            <Datepicker
              label={t('plannedFrom')}
              name="plannedFrom"
              value={formData.plannedFrom}
              onChange={(date) => handleChange('plannedFrom', date)}
              locale={language}
            />
          </div>
        </section>

        {/* Section: Employer */}
        <section className="form-section" aria-labelledby="section-employer">
          <h2 id="section-employer" className="form-section__title">{t('sectionEmployer')}</h2>
          
          <div className="form-row form-row--single">
            <Input
              label={t('employerName')}
              name="employerName"
              value={formData.employerName}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Section: Self Employment */}
        <section className="form-section" aria-labelledby="section-self">
          <h2 id="section-self" className="form-section__title">{t('sectionSelfEmployment')}</h2>
          
          <div className="form-row form-row--single">
            <Input
              label={t('businessField')}
              name="businessField"
              value={formData.businessField}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Section B: Declaration */}
        <section className="form-section" aria-labelledby="section-declaration">
          <h2 id="section-declaration" className="form-section__title">{t('sectionDeclaration')}</h2>
          
          <div className="form-row form-row--single">
            <Checkbox
              name="declarationConfirmed"
              label={t('declarationConfirm')}
              checked={formData.declarationConfirmed}
              onChange={(e) => handleChange('declarationConfirmed', e.target.checked)}
              required
              invalid={showValidation && !!errors.declarationConfirmed}
              invalidMessage={errors.declarationConfirmed}
            />
          </div>

          <div className="form-row form-row--double">
            <Input
              label={t('signedIn')}
              name="signedIn"
              value={formData.signedIn}
              onChange={handleInputChange}
              required
              invalid={showValidation && !!errors.signedIn}
              invalidMessage={errors.signedIn}
            />
            <Datepicker
              label={t('signatureDate')}
              name="signatureDate"
              value={formData.signatureDate}
              onChange={(date) => handleChange('signatureDate', date)}
              locale={language}
              required
              invalid={showValidation && !!errors.signatureDate}
              invalidMessage={errors.signatureDate}
            />
          </div>
        </section>

        {/* Section: Attachments */}
        <section className="form-section" aria-labelledby="section-attachments">
          <h2 id="section-attachments" className="form-section__title">{t('sectionAttachments')}</h2>
          
          <FileUpload
            label={t('attachmentsLabel')}
            name="attachments"
            accept=".pdf,.doc,.docx"
            multiple
            maxFiles={5}
            maxSize={10 * 1024 * 1024}
            helperText={t('attachmentsHelper')}
            onChange={(files) => handleChange('attachments', files)}
            buttonText={language === 'cs' ? 'Vložit soubor z počítače' : 'Upload file from computer'}
            dragText={language === 'cs' ? 'nebo přetáhněte soubory sem' : 'or drag and drop files here'}
          />
        </section>

        {/* Form Actions */}
        <div className="form-actions form-actions--sticky">
          <Button
            type="outlined"
            color="neutral"
            onClick={saveDraft}
          >
            {t('saveDraft')}
          </Button>
          <Button
            type="outlined"
            color="primary"
            onClick={generatePDF}
          >
            {t('printPdf')}
          </Button>
          <Button
            type="outlined"
            color="primary"
            onClick={handleValidate}
          >
            {t('validateForm')}
          </Button>
          <Button
            type="solid"
            color="primary"
            onClick={handleSubmit}
          >
            {t('submit')}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RequalificationForm;

