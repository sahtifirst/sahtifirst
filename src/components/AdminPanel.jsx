import React from 'react';
    import useStore from '../store';
    import { FaStar, FaRegStar } from 'react-icons/fa';

    const AdminPanel = () => {
      const {
        users,
        pendingProviders,
        approveProvider,
        rejectProvider,
        deleteUser,
        attendedPatients,
        providerHistory,
        t
      } = useStore();

      const handleApprove = (providerId) => {
        approveProvider(providerId);
      };

      const handleReject = (providerId) => {
        rejectProvider(providerId);
      };

      const handleDelete = (userId) => {
        deleteUser(userId);
      };

      const renderStars = (rating) => {
        if (rating === null || rating === undefined) return t("Not Rated Yet");
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;
        return (
          <div className="rating-section">
            {[...Array(fullStars)].map((_, i) => (
              <FaStar key={`full-${i}`} className="star" />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
              <FaRegStar key={`empty-${i}`} className="star" />
            ))}
          </div>
        );
      };

      return (
        <div>
          <h2>{t('Admin Panel')}</h2>

          <h3>{t('Pending Provider Applications')}</h3>
          <table>
            <thead>
              <tr>
                <th>{t('Full Name')}</th>
                <th>{t('Phone Number')}</th>
                <th>{t('Type')}</th>
                <th>{t('Specialty')}</th>
                <th>{t('Actions')}</th>
              </tr>
            </thead>
            <tbody>
              {pendingProviders.map((provider) => (
                <tr key={provider.id}>
                  <td>{provider.fullName}</td>
                  <td>{provider.phoneNumber}</td>
                  <td>{t(provider.providerType)}</td>
                  <td>{t(provider.specialty)}</td>
                  <td>
                    <button onClick={() => handleApprove(provider.id)}>
                      {t('Approve')}
                    </button>
                    <button onClick={() => handleReject(provider.id)}>
                      {t('Reject')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>{t('Patients')}</h3>
          <table>
            <thead>
              <tr>
                <th>{t('Full Name')}</th>
                <th>{t('Phone Number')}</th>
                <th>{t('Age')}</th>
                <th>{t('Address')}</th>
                <th>{t('Actions')}</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) => user.role === 'patient')
                .map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.fullName}</td>
                    <td>{patient.phoneNumber}</td>
                    <td>{patient.age}</td>
                    <td>{patient.address}</td>
                    <td>
                      <button onClick={() => handleDelete(patient.id)}>
                        {t('Delete')}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <h3>{t('Healthcare Providers')}</h3>
          <table>
            <thead>
              <tr>
                <th>{t('Full Name')}</th>
                <th>{t('Phone Number')}</th>
                <th>{t('Type')}</th>
                <th>{t('Specialty')}</th>
                <th>{t('Address')}</th>
                <th>{t('Rating')}</th>
                <th>{t('Actions')}</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) => user.role === 'provider')
                .map((provider) => (
                  <tr key={provider.id}>
                    <td>{provider.fullName}</td>
                    <td>{provider.phoneNumber}</td>
                    <td>{t(provider.providerType)}</td>
                    <td>{t(provider.specialty)}</td>
                    <td>{provider.address}</td>
                    <td>{renderStars(provider.rating)}</td>
                    <td>
                      <button onClick={() => handleDelete(provider.id)}>
                        {t('Delete')}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <h3>{t('Patient Request History')}</h3>
          <table>
            <thead>
              <tr>
                <th>{t('Full Name')}</th>
                <th>{t('Date')}</th>
                <th>{t('Provider')}</th>
              </tr>
            </thead>
            <tbody>
              {attendedPatients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.fullName}</td>
                  <td>{patient.date}</td>
                  <td>{patient.provider}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>{t('Provider History')}</h3>
          <table>
            <thead>
              <tr>
                <th>{t('Provider Name')}</th>
                <th>{t('Date')}</th>
                <th>{t('Action')}</th>
                <th>{t('Details')}</th>
              </tr>
            </thead>
            <tbody>
              {providerHistory.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.providerName}</td>
                  <td>{entry.date}</td>
                  <td>{t(entry.action)}</td>
                  <td>{entry.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

    export default AdminPanel;
