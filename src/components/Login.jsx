import React, { useState } from 'react';
    import { useNavigate, Link } from 'react-router-dom';
    import useStore from '../store';

    const Login = () => {
      const { loginUser, t } = useStore();
      const navigate = useNavigate();
      const [credentials, setCredentials] = useState({
        phoneNumber: '',
        password: '',
        role: 'patient',
      });

      const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const user = loginUser(credentials.phoneNumber, credentials.password, credentials.role);
        if (user) {
          navigate(`/${credentials.role}`);
        } else {
          alert(t('Invalid credentials or role'));
        }
      };

      return (
        <div>
          <h2>{t('Login')}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="tel"
              name="phoneNumber"
              placeholder={t('Phone Number')}
              value={credentials.phoneNumber}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder={t('Password')}
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <select name="role" value={credentials.role} onChange={handleChange}>
              <option value="patient">{t('Patient')}</option>
              <option value="provider">{t('Healthcare Provider')}</option>
              <option value="admin">{t('Admin')}</option>
            </select>
            <button type="submit">{t('Login')}</button>
          </form>
          <p>
            {t("Don't have an account?")} <Link to="/register">{t('Register')}</Link>
          </p>
        </div>
      );
    };

    export default Login;
