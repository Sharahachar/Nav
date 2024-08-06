import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./MemberDetails.css";

const MemberDetails = () => {
    const { memberId } = useParams(); 
    const navigate = useNavigate(); // Get member ID from URL params

    // Example data (replace with actual data fetching logic)
    const memberData = {
        '1-0': { id: '1-0', name: 'Alice', age: 28, qualification: 'Computer Science', profileImage: "/my.png" , address: 'Address 1' },
        '1-1': { id: '1-1', name: 'Bob', age: 30, qualification: 'Information Technology', profileImage: "/my.png" , address: 'Address 2' },
        '1-2': { id: '1-2', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
        '1-3': { id: '1-3', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
        '1-4': { id: '1-4', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
        '1-5': { id: '1-5', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
        '1-6': { id: '1-6', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
        '1-7': { id: '1-7', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
        '2-0': { id: '2-0', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
        '2-1': { id: '1-1', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
        '3-0': { id: '3-0', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
        '3-1': { id: '3-1', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
        '4-0': { id: '4-0', name: 'Alice', age: 28, qualification: 'Computer Science', profileImage: "/my.png" , address: 'Address 1' },
        '4-1': { id: '4-1', name: 'Bob', age: 30, qualification: 'Information Technology', profileImage: "/my.png" , address: 'Address 2' },
        '5-0': { id: '5-0', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
        '5-1': { id: '5-1', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
        '6-0': { id: '6-0', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
        '6-1': { id: '6-1', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png" , address: 'Address 3' },
    };

    const [editMode, setEditMode] = useState(false);
    const [memberDetails, setMemberDetails] = useState(memberData[memberId]);

    const handleBack = () => {
        navigate('/employee-by-project'); // Navigate back to Team page
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        setEditMode(false);
        // Here you would also update the actual memberData with the new values
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMemberDetails({
            ...memberDetails,
            [name]: value,
        });
    };

    if (!memberDetails) {
        return <div className="member-not-found">Member not found</div>; // Handle edge case where member ID does not exist
    }

    return (
        <div className="member-details-container">
            <h2 className='dd'>Member Details</h2>
            <div className="member-details">
                <img src={memberDetails.profileImage} alt={`${memberDetails.name}'s profile`} className="profile-image" />
                <div className="member-info">
                    <p><strong>Name:</strong> {memberDetails.name}</p>
                    <p>
                        <strong>Age:</strong> 
                        {editMode ? (
                            <input
                                type="number"
                                name="age"
                                value={memberDetails.age}
                                onChange={handleChange}
                            />
                        ) : (
                            memberDetails.age
                        )}
                    </p>
                    <p>
                        <strong>Qualification:</strong> 
                        {editMode ? (
                            <input
                                type="text"
                                name="qualification"
                                value={memberDetails.qualification}
                                onChange={handleChange}
                            />
                        ) : (
                            memberDetails.qualification
                        )}
                    </p>
                    <p>
                        <strong>Address:</strong> 
                        {editMode ? (
                            <input
                                type="text"
                                name="address"
                                value={memberDetails.address}
                                onChange={handleChange}
                            />
                        ) : (
                            memberDetails.address
                        )}
                    </p>
                </div>
            </div>
            <div className="button-group">
                {editMode ? (
                    <button className="save-button" onClick={handleSave}>Save</button>
                ) : (
                    <button className="edit-button" onClick={handleEdit}>Edit</button>
                )}
                <button className="bok-button" onClick={handleBack}>Back</button>
            </div>
        </div>
    );
};

export default MemberDetails;
