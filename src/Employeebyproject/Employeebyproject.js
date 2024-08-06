import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Employeebyproject.css';

const Employeebyprojects = () => {
    const navigate = useNavigate();
    const projects = [
        { id: 1, name: 'payroll projects' },
        { id: 2, name: 'Xml project' },
    ];

    const handleProjectClick = (projectId) => {
        navigate(`/projectdetails/${projectId}`);
    };

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div className="container project-list">
            <h2 className='fd'>Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id} onClick={() => handleProjectClick(project.id)}>
                        {project.name}
                    </li>
                ))}
            </ul>
            <div className='ds'>
            <button className="k-button" onClick={handleBackClick}>Back</button>
            </div>
        </div>
    );
};

export default Employeebyprojects;
