import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import useStore from '../store';

    const Registration = () => {
      const { registerUser, specialties, wilayas, t } = useStore();
      const navigate = useNavigate();
      const [userData, setUserData] = useState({
        fullName: '',
        phoneNumber: '',
        password: '',
        age: '',
        address: '',
        wilaya: '',
        role: 'patient',
        providerType: '',
        specialty: '',
      });

      const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(userData);
        navigate('/login');
      };

      return (
        <div>
          <h2>{t('Registration')}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder={t('Full Name')}
              value={userData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder={t('Phone Number')}
              value={userData.phoneNumber}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder={t('Password')}
              value={userData.password}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder={t('Age')}
              value={userData.age}
              onChange={handleChange}
              required
            />
            <select
              name="wilaya"
              value={userData.wilaya}
              onChange={handleChange}
              required
            >
              <option value="">{t('Select Wilaya')}</option>
              {wilayas.map((wilaya) => (
                <option key={wilaya} value={wilaya}>
                  {wilaya}
                </option>
              ))}
            </select>
            <select name="role" value={userData.role} onChange={handleChange}>
              <option value="patient">{t('Patient')}</option>
              <option value="provider">{t('Healthcare Provider')}</option>
            </select>
            {userData.role === 'provider' && (
              <>
                <select
                  name="providerType"
                  value={userData.providerType}
                  onChange={handleChange}
                >
                  <option value="">{t('Select Type')}</option>
                  <option value="doctor">{t('Doctor')}</option>
                  <option value="nurse">{t('Nurse')}</option>
                </select>

                <select
                  name="specialty"
                  value={userData.specialty}
                  onChange={handleChange}
                >
                  <option value="">{t('Select Specialty')}</option>
                  {userData.providerType &&
                    specialties[userData.providerType].map((specialty) => (
                      <option key={specialty} value={specialty}>
                        {t(specialty)}
                      </option>
                    ))}
                </select>
              </>
            )}
            <button type="submit">{t('Register')}</button>
          </form>
        </div>
      );
    };

    export default Registration;
