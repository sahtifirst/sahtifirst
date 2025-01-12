import React, { lazy, useState, useEffect } from 'react';
    import { Routes, Route, Navigate } from 'react-router-dom';
    import useStore from './store';
    import { FaGlobe, FaStethoscope } from 'react-icons/fa';

    const Registration = lazy(() => import('./components/Registration'));
    const Login = lazy(() => import('./components/Login'));
    const PatientDashboard = lazy(() => import('./components/PatientDashboard'));
    const ProviderDashboard = lazy(() =>
      import('./components/ProviderDashboard')
    );
    const AdminPanel = lazy(() => import('./components/AdminPanel'));

    function App() {
      const { user, setLanguage, t } = useStore();
      const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

      const toggleLanguageDropdown = () => {
        setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
      };

      const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setIsLanguageDropdownOpen(false);
      };

      // Set the document title based on the user's role
      useEffect(() => {
        if (user) {
          document.title = t('Sahti First');
        } else {
          document.title = t('Sahti First');
        }
      }, [user, t]);

      return (
        <div className="App">
          <header className="app-header">
            <div className="app-name-and-logo">
              {/* Placeholder for the logo */}
              <div className="logo-placeholder">
                <FaStethoscope size={36} />
              </div>
              <h1>{t('Sahti First')}</h1>
            </div>
            <div className="language-dropdown">
              <button className="language-button" onClick={toggleLanguageDropdown}>
                <FaGlobe />
              </button>
              {isLanguageDropdownOpen && (
                <div className="language-options">
                  <button onClick={() => handleLanguageChange('fr')}>Français</button>
                  <button onClick={() => handleLanguageChange('ar')}>العربية</button>
                </div>
              )}
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/patient"
              element={
                user?.role === 'patient' ? (
                  <PatientDashboard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/provider"
              element={
                user?.role === 'provider' ? (
                  <ProviderDashboard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin"
              element={
                user?.role === 'admin' ? <AdminPanel /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </div>
      );
    }

    export default App;
