import React from 'react';
import './StatusPage.css';

function StatusPage({ name, id, status }) {
  const getStatusClass = (currentStatus) => {
    if (status === 'submitted' && currentStatus === 'submitted') return 'completed';
    if (status === 'approved' && (currentStatus === 'submitted' || currentStatus === 'approved')) return 'completed';
    if (status === 'cancelled' && (currentStatus === 'submitted' || currentStatus === 'cancelled')) return 'completed';
    return 'pending';
  };

  return (
    <div className="status-page1">
      <p className='hg1'>Status of Your Resignation</p>
      <div className="employee-details">
        <p>Name: {name}</p>
        <p>ID Card Number: {id}</p>
      </div>
      <div className="progress-bar">
        <div className={`progress-step ${getStatusClass('submitted')}`}>
          <div className="arrow-mark"></div>
          <span>Submission</span>
        </div>
        <div className={`progress-step ${getStatusClass('approved')}`}>
          <div className="arrow-mark"></div>
          <span>Manager Approval</span>
        </div>
        <div className={`progress-step ${getStatusClass('cancelled')}`}>
          <div className="arrow-mark"></div>
          <span>Resignation Approval</span>
        </div>
      </div>
      <button className="back1-button" onClick={() => window.location.href = '/'}>Back to Home</button>
    </div>
  );
}

export default StatusPage;
