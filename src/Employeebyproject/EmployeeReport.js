import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeReport.css';

const EmployeeReport = ({ project }) => {
    const navigate = useNavigate();
    const employees = [
        { id: 1, name: 'sharath', tasks: ['employee directory', 'recuirement', 'My profile'], progress: 60 },
        { id: 2, name: 'shabhz', tasks: ['event calender'], progress: 30 },
        { id: 3, name: 'naveed', tasks: ['login page', 'side bar', 'employee page'], progress: 90 },
        { id: 4, name: 'sambram', tasks: ['leave form'], progress: 80 },
        { id: 5, name: 'tarun', tasks: ['nav bar', 'some task', 'Task F'], progress: 50 },
        { id: 6, name: 'akil', tasks: ['Task F', 'Task E', 'Task F'], progress: 40 },
    ];

    const calculateTotalTasks = () => {
        let total = 0;
        employees.forEach((employee) => {
            total += employee.tasks.length;
        });
        return total;
    };

    const handleBack = () => {
        navigate('/'); // Navigate back to the Team page
    };

    const calculateAverageProgress = () => {
        if (employees.length === 0) return 0;
        let total = 0;
        employees.forEach((employee) => {
            total += employee.progress;
        });
        return Math.round(total / employees.length); // Rounded average
    };

    const findHighestProgress = () => {
        let highest = 0;
        employees.forEach((employee) => {
            if (employee.progress > highest) {
                highest = employee.progress;
            }
        });
        return highest;
    };

    const maxProgress = findHighestProgress();
    const progressBars = employees.map((employee) => ({
        id: employee.id,
        name: employee.name,
        tasks: employee.tasks,
        progress: employee.progress,
        percentage: (employee.progress / maxProgress) * 100,
    }));

    const handleEmployeeClick = (employee) => {
        navigate('/task-details', { state: { name: employee.name, tasks: employee.tasks } });
    };

    return (
        <div className="employee-report-container">
            <h2 className='gb'>Employee Report for Project: {project}</h2>
            <div className="summary">
                <div className="summary-item">
                    <h3>Total Employees</h3>
                    <p>{employees.length}</p>
                </div>
                <div className="summary-item">
                    <h3>Total Tasks</h3>
                    <p>{calculateTotalTasks()}</p>
                </div>
                <div className="summary-item">
                    <h3>Average Progress</h3>
                    <p>{calculateAverageProgress()}%</p>
                </div>
                <div className="summary-item">
                    <h3>Highest Progress</h3>
                    <p>{findHighestProgress()}%</p>
                </div>
            </div>
            <div className="employee-list">
                <h3>Employee Tasks and Progress</h3>
                {progressBars.map((bar) => (
                    <div key={bar.id} className="progress-bar">
                        <div className="bar-name" onClick={() => handleEmployeeClick(bar)}>{bar.name}</div>
                        <div className="bar">
                            <div className="bar-fill" style={{ width: `${bar.percentage}%` }}></div>
                        </div>
                        <div className="bar-label">{bar.progress}%</div>
                    </div>
                ))}
            </div>
            <button className="bok-button" onClick={handleBack}>Back</button>
        </div>
    );
};

export default EmployeeReport;
