import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Assign Training.css';

const AssignTraining = () => {
  const navigate = useNavigate();
  const [selectedTraining, setSelectedTraining] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [employees] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Michael Brown' },
    { id: 5, name: 'Emily Davis' },
    { id: 6, name: 'Chris Wilson' },
    { id: 7, name: 'Sarah Lee' },
    { id: 8, name: 'David Clark' },
    { id: 9, name: 'Emma Moore' },
    { id: 10, name: 'Paul Walker' },
    // Add more employees as needed
  ]);

  const handleTrainingChange = (e) => {
    setSelectedTraining(e.target.value);
  };

  const handleEmployeeChange = (e) => {
    const { value, checked } = e.target;
    setSelectedEmployees(prev =>
      checked
        ? [...prev, value]
        : prev.filter(employeeId => employeeId !== value)
    );
  };

  const handleSubmit = () => {
    if (selectedTraining && selectedEmployees.length > 0) {
      navigate('/success', { state: { training: selectedTraining, employees: selectedEmployees } });
    } else {
      alert('Please select a training session and at least one employee.');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="assign-training">
      <h1 className='fg'>Assign Training</h1>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="training">Select Training:</label>
          <select
            id="training"
            value={selectedTraining}
            onChange={handleTrainingChange}
          >
            <option value="">Select a training session</option>
            <option value="React Basics">React Basics</option>
            <option value="Advanced CSS">Advanced CSS</option>
            <option value="JavaScript ES6">JavaScript ES6</option>
          </select>
        </div>
        <div className="form-group">
          <label>Select Employees:</label>
          <div className="employee-list">
            {employees.map(employee => (
              <div key={employee.id} className="employee-item">
                <input
                  type="checkbox"
                  id={`employee-${employee.id}`}
                  value={employee.id}
                  onChange={handleEmployeeChange}
                />
                <label htmlFor={`employee-${employee.id}`}>{employee.name}</label>
              </div>
            ))}
          </div>
        </div>
       
          <button className="submit-button" onClick={handleSubmit}>Assign Training</button>
          <button className="back-button" onClick={handleBack}>Back</button>
       
      </div>
    </div>
  );
};

export default AssignTraining;
