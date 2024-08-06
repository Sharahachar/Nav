import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Projectdetails.css';

const Projectdetails = () => {
    const { projectId } = useParams(); // Get project ID from URL
    const [teamMembers, setTeamMembers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Mock data for team members based on project ID
        const fetchTeamMembers = () => {
            const members = {
                1: [
                    { id: 1, role: 'Frontend Team', names: ['Alice', 'Bob', 'Charlie', 'Dave', 'Eva', 'Frank', 'Grace'] },
                    { id: 2, role: 'Backend Team', names: ['Henry', 'Ivy'] },
                    { id: 3, role: 'Testing Team', names: ['Jack', 'Lily'] },
                    { id: 4, role: 'Devops Team', names: ['rudresh', 'karthik'] },
                ],
                2: [
                    { id: 5, role: 'Support Team', names: ['Mia', 'Noah'] },
                    { id: 6, role: 'Testing Team', names: ['Oliver', 'Emma'] },
                ],
            };
            setTeamMembers(members[projectId] || []);
        };

        fetchTeamMembers();
    }, [projectId]);

    const handleMemberClick = (memberId) => {
        navigate(`/member-details/${memberId}`);
    };

    return (
        <div className="project-details-container">
            <h2 className='bg'>Project Team Members</h2>
            <div className="team-container">
                {teamMembers.map((team, index) => (
                    <div key={index} className="team-leader-box1">
                        <h3>{team.role} ({team.names.length}) </h3>
                        <ul>
                            {team.names.map((name, idx) => (
                                <li key={idx} onClick={() => handleMemberClick(`${team.id}-${idx}`)}>
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <button className="bac-button" onClick={() => navigate('/employee-by-project')}>
                Back
            </button>
        </div>
    );
};

export default Projectdetails;
