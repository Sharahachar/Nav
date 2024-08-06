import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UpcomingSessions.css';

const UpcomingSessions = () => {
  const navigate = useNavigate();

  // Expanded sessions list
  const sessions = [
    {
      title: 'React Hooks Deep Dive',
      description: 'Explore React hooks in depth and learn how to manage state and side effects effectively.',
      date: 'August 1, 2024',
      time: '10:00 AM - 12:00 PM',
      instructor: 'John Doe'
    },
    {
      title: 'CSS Grid and Flexbox',
      description: 'Master CSS Grid and Flexbox to create responsive and flexible web layouts.',
      date: 'August 3, 2024',
      time: '2:00 PM - 4:00 PM',
      instructor: 'Jane Smith'
    },
    {
      title: 'JavaScript ES6+ Features',
      description: 'Learn about the latest JavaScript ES6+ features and how to use them in modern web development.',
      date: 'August 5, 2024',
      time: '11:00 AM - 1:00 PM',
      instructor: 'Alice Johnson'
    },
    {
      title: 'Node.js Essentials',
      description: 'Understand the basics of Node.js and build scalable backend applications.',
      date: 'August 7, 2024',
      time: '1:00 PM - 3:00 PM',
      instructor: 'Michael Brown'
    },
    {
      title: 'TypeScript Fundamentals',
      description: 'Get a strong foundation in TypeScript and how it improves JavaScript development.',
      date: 'August 9, 2024',
      time: '3:00 PM - 5:00 PM',
      instructor: 'Emily Davis'
    },
    {
      title: 'GraphQL Advanced Topics',
      description: 'Deep dive into advanced GraphQL topics and optimize your API queries.',
      date: 'August 11, 2024',
      time: '10:00 AM - 12:00 PM',
      instructor: 'Sarah Wilson'
    },
    {
      title: 'Building Progressive Web Apps',
      description: 'Learn how to build Progressive Web Apps (PWAs) with offline capabilities.',
      date: 'August 13, 2024',
      time: '1:00 PM - 3:00 PM',
      instructor: 'Chris Lee'
    },
  ];

  return (
    <div className="upcoming-sessions">
      <h1 className='rock'>Upcoming Sessions</h1>
      <div className="sessions-wrapper">
        <div className="sessions-container">
          {sessions.map((session, index) => (
            <div className="session" key={index}>
              <h2 className='fdf'>{session.title}</h2>
              <p>{session.description}</p>
              <p><strong>Date:</strong> {session.date}</p>
              <p><strong>Time:</strong> {session.time}</p>
              <p><strong>Instructor:</strong> {session.instructor}</p>
            </div>
          ))}
        </div>
      </div>
      
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
     
    </div>
  );
};

export default UpcomingSessions;
