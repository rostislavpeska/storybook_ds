import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import RekvalifikaceForm from './pages/RekvalifikaceForm'
import ComingSoon from './pages/ComingSoon'

function App() {
  const { t } = useTranslation()

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t('app.skipToContent')}
      </a>
      <Header />
      <main id="main-content" className="main-content" role="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form/rekvalifikace" element={<RekvalifikaceForm />} />
          <Route path="/form/povez" element={<ComingSoon formKey="povez" />} />
          <Route path="/form/dotace-vzdelavani" element={<ComingSoon formKey="dotace" />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
