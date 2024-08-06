import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StatusPage from './StatusPage';
import './Resignation.css';

function Resignation() {
  const [name] = useState('John Doe');
  const [id] = useState('123456');
  const [reasonForLeaving, setReasonForLeaving] = useState('');
  const [domain, setDomain] = useState('');
  const [showStatusPage, setShowStatusPage] = useState(false);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (showStatusPage) {
      const interval = setInterval(async () => {
        try {
          const response = await axios.get(`http://localhost:5000/check-status?id=${id}`);
          setStatus(response.data.status);
        } catch (error) {
          console.error('Error checking status:', error);
          toast.error('Failed to check status');
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [showStatusPage, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-email', {
        name,
        id,
        domain,
        reason: reasonForLeaving,
        managerEmail: 'sharathachar55@gmail.com' // Replace with the actual manager's email
      });

      toast.success('Notification: Email sent to manager successfully.');
      setStatus('submitted'); // Update status to submitted
      setShowStatusPage(true);
    } catch (error) {
      toast.error('Failed to send resignation.');
      console.error('Error sending email:', error);
    }
  };

  const handleCheckStatus = () => {
    setShowStatusPage(true);
  };

  return (
    <div className="resignation-container1">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {!showStatusPage ? (
        <div className="form-container12">
          <h2 className='thg'>Resignation Application Form</h2>
          <div className="employee-details">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>ID Number:</strong> {id}</p>
          </div>
          <div className="form-group">
            <label htmlFor="domain">Please Select the Domain:</label>
            <select
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            >
              <option value="" disabled>Select domain</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="testing">Testing</option>
              <option value="devops">DevOps</option>
              <option value="accounts">Accounts</option>
              <option value="hr">HR</option>
            </select>
          </div>
        
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="reasonForLeaving">Reason for Leaving:</label>
              <textarea
                id="reasonForLeaving"
                value={reasonForLeaving}
                onChange={(e) => setReasonForLeaving(e.target.value)}
                required
              />
            </div>
            
            <div className="form-buttons">
              <button type="submit" className="button button-submit">Proceed</button>
              <button type="button" className="button button-status" onClick={handleCheckStatus}>Check Status</button>
            </div>
          </form>
        </div>
      ) : (
        <StatusPage name={name} id={id} status={status} />
      )}
    </div>
  );
}

export default Resignation;
