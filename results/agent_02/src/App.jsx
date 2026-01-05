import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import RequalificationForm from './pages/RequalificationForm';
import PlaceholderPage from './pages/PlaceholderPage';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form/rekvalifikace" element={<RequalificationForm />} />
            <Route path="/form/povez" element={<PlaceholderPage formKey="povez" />} />
            <Route path="/form/dotace-vzdelavani" element={<PlaceholderPage formKey="subsidy" />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
