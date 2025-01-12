import React, { useState } from 'react';
    import useStore from '../store';

    const PatientDashboard = () => {
      const { user, specialties, sendRequest, t } = useStore();
      const [providerType, setProviderType] = useState('');
      const [selectedSpecialty, setSelectedSpecialty] = useState('');

      const handleProviderTypeChange = (e) => {
        setProviderType(e.target.value);
        setSelectedSpecialty('');
      };

      const handleSpecialtyChange = (e) => {
        setSelectedSpecialty(e.target.value);
      };

      const handleRequestSubmit = () => {
        if (providerType && selectedSpecialty) {
          sendRequest(user, providerType, selectedSpecialty);
          alert(t('Request sent!'));
        }
      };

      return (
        <div className="patient-theme">
          <h2>{t('Patient Dashboard')}</h2>
          <select value={providerType} onChange={handleProviderTypeChange}>
            <option value="">{t('Select Type')}</option>
            <option value="doctor">{t('Doctor')}</option>
            <option value="nurse">{t('Nurse')}</option>
          </select>

          {providerType && (
            <select
              value={selectedSpecialty}
              onChange={handleSpecialtyChange}
            >
              <option value="">{t('Select Specialty')}</option>
              {specialties[providerType].map((specialty) => (
                <option key={specialty} value={specialty}>
                  {t(specialty)}
                </option>
              ))}
            </select>
          )}

          <button onClick={handleRequestSubmit}>{t('Send Request')}</button>
        </div>
      );
    };

    export default PatientDashboard;
