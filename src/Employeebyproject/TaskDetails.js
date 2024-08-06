import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './TaskDetails.css';

const TaskDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name, tasks } = location.state || { name: 'Unknown', tasks: [] };

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className="task-details-container">
            <h2 className='h12'>Task Details for {name}</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <button className="bn-button" onClick={handleBack}>Back</button>
        </div>
    );
};

export default TaskDetails;
