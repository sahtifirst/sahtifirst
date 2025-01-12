import React, { useState } from 'react';
    import useStore from '../store';
    import { FaToggleOn, FaToggleOff, FaStar, FaRegStar } from 'react-icons/fa';

    const ProviderDashboard = () => {
      const {
        user,
        toggleAvailability,
        notifications,
        acceptRequest,
        attendedPatients,
        t
      } = useStore();

      const [showRatingModal, setShowRatingModal] = useState(false);
      const [selectedPatient, setSelectedPatient] = useState(null);
      const [rating, setRating] = useState(0);

      const handleAccept = (request) => {
        acceptRequest(request);
        // Remove the notification from other providers
        setNotifications(
          notifications.filter((n) => n.patientId !== request.patientId)
        );
      };

      const handleRatingChange = (newRating) => {
        setRating(newRating);
      };

      const handleSubmitRating = () => {
        // Update the provider's rating in the store (or send it to a backend API)
        // ... (Implementation depends on how you store ratings)

        // Close the modal
        setShowRatingModal(false);
        setSelectedPatient(null);
        setRating(0);
      };

      const handleCloseConsultation = (patient) => {
        setShowRatingModal(true);
        setSelectedPatient(patient);
      };

      const renderStars = (rating) => {
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
        <div className="provider-theme">
          <h2>{t('Provider Dashboard')}</h2>
          <div className="section">
            <button onClick={toggleAvailability}>
              {user?.isAvailable ? <FaToggleOn /> : <FaToggleOff />} {t('Availability')}
            </button>
          </div>

          <div className="section">
            <h3>{t('Notifications')}</h3>
            <ul>
              {notifications.map((notification) => (
                <li key={notification.id} className="notification">
                  {t('A patient requires your services, Doctor.')}{' '}
                  <button onClick={() => handleAccept(notification)}>
                    {t('Accept')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h3>{t('Attended Patients')}</h3>
            <ul>
              {attendedPatients.map((patient) => (
                <li key={patient.id}>
                  {patient.fullName} - {patient.date}{' '}
                  <button onClick={() => handleCloseConsultation(patient)}>
                    {t('Close Consultation')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h3>{t('Ranking')}</h3>
            {renderStars(3)} {/* Example with 3 full stars */}
          </div>

          {/* Rating Modal */}
          {showRatingModal && (
            <div className="modal">
              <h3>{t('Rate')} {selectedPatient.fullName}</h3>
              <div className="rating-section">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="star"
                    onClick={() => handleRatingChange(star)}
                  >
                    {star <= rating ? <FaStar /> : <FaRegStar />}
                  </span>
                ))}
              </div>
              <button onClick={handleSubmitRating}>{t('Submit Rating')}</button>
            </div>
          )}
        </div>
      );
    };

    export default ProviderDashboard;
