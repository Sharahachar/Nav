// SuccessPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './SucessPage.css';

const SuccessPage = () => {
  const location = useLocation();
  const { training, employees } = location.state || {};

  // Mock mentor name, you can modify as needed
  const mentorName = 'Dr. Alex Johnson';

  return (
    <div className="success-container">
      <h1 className="success-title">Training Assigned Successfully!</h1>
      <p className="success-message"><strong>Training Session:</strong> {training}</p>
      <p className="success-message"><strong>Mentor Name:</strong> {mentorName}</p>
      <p className="success-message"><strong>Employees Assigned:</strong></p>
      <ul className="employee-list">
        {employees && employees.map((id) => (
          <li key={id}>Employee {id}</li> // Replace with actual employee name if needed
        ))}
      </ul>
      <button className="back-button" onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default SuccessPage;
