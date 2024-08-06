import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './TeamMembers.css';

const TeamMembers = () => {
  const { state } = useLocation();
  const { team } = state;
  const [teamMembers, setTeamMembers] = useState(team.teamMembers);
  const [showForm, setShowForm] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    age: '',
    qualification: '',
    profileImage: '/default.png',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const membersRef = useRef(null);

  const handleBack = () => {
    navigate('/team-lead'); // Navigate back to Team page
  };

  const scrollToTop = () => {
    if (membersRef.current) {
      membersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    setTeamMembers((prevMembers) => [...prevMembers, newMember]);
    setNewMember({
      name: '',
      age: '',
      qualification: '',
      profileImage: '/default.png',
    });
    setMessage('Member added successfully!');
    setShowForm(false);
  };

  const handleDeleteMember = (index) => {
    setTeamMembers((prevMembers) => {
      const updatedMembers = [...prevMembers];
      updatedMembers.splice(index, 1);
      return updatedMembers;
    });
    setMessage('Member deleted successfully!');
  };

  return (
    <div className="team-members-container">
      <h3 className='ag'>{team.teamLeader}'s Team Members</h3>
      <button className="add-button" onClick={() => setShowForm(!showForm)}>Add Team Member</button>
      {showForm && (
        <form className="add-team-member-form" onSubmit={handleAddMember}>
          <h3>Add New Team Member</h3>
          <input
            type="text"
            name="name"
            value={newMember.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <input
            type="number"
            name="age"
            value={newMember.age}
            onChange={handleInputChange}
            placeholder="Age"
            required
          />
          <input
            type="text"
            name="qualification"
            value={newMember.qualification}
            onChange={handleInputChange}
            placeholder="Qualification"
            required
          />
          <input
            type="text"
            name="profileImage"
            value={newMember.profileImage}
            onChange={handleInputChange}
            placeholder="Profile Image URL"
            required
          />
          <button type="submit">Add</button>
        </form>
      )}
      {message && <p className="message">{message}</p>}
      <ul className="team-members-list" ref={membersRef}>
        {teamMembers.map((member, index) => (
          <li key={index} className="team-member-item">
            <img src={member.profileImage} className="member-profile-image" alt={member.name} />
            <div>Name: {member.name}</div>
            <div>Age: {member.age}</div>
            <div>Qualification: {member.qualification}</div>
            <button className="delete-button" onClick={() => handleDeleteMember(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button className="bak-button" onClick={handleBack}>Back</button>
      <button className="scroll-top-button" onClick={scrollToTop}>Scroll to Top</button>
    </div>
  );
};

export default TeamMembers;
