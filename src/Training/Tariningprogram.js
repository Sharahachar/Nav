import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tariningprogram.css';

const TrainingPrograms = () => {
  const navigate = useNavigate();
  const programsContainerRef = useRef(null);

  const programs = [
    {
      title: 'React Basics',
      description: 'Learn the fundamentals of React.js and build interactive user interfaces.',
      date: 'July 25, 2024',
      duration: '2 hours'
    },
    {
      title: 'Advanced JavaScript',
      description: 'Dive deep into advanced JavaScript concepts and patterns.',
      date: 'July 26, 2024',
      duration: '3 hours'
    },
    {
      title: 'CSS for Developers',
      description: 'Master the art of CSS and learn how to style modern web applications.',
      date: 'July 27, 2024',
      duration: '1.5 hours'
    },
    {
      title: 'Node.js Essentials',
      description: 'Understand the basics of Node.js and build scalable backend applications.',
      date: 'July 28, 2024',
      duration: '2 hours'
    },
    {
      title: 'TypeScript in Action',
      description: 'Learn TypeScript and how to integrate it with your JavaScript projects.',
      date: 'July 29, 2024',
      duration: '3 hours'
    },
    {
      title: 'GraphQL Introduction',
      description: 'Discover the benefits of GraphQL and how to implement it in your applications.',
      date: 'July 30, 2024',
      duration: '2 hours'
    },
    // Add more sessions as needed
  ];

  const scrollUp = () => {
    if (programsContainerRef.current) {
      programsContainerRef.current.scrollBy({
        top: -100,
        behavior: 'smooth'
      });
    }
  };

  const scrollDown = () => {
    if (programsContainerRef.current) {
      programsContainerRef.current.scrollBy({
        top: 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="training-programs">
      <h1>Training Programs</h1>
      
      <div className="scroll-buttons">
        <button className="scroll-button" onClick={scrollUp}>Scroll Up</button>
        <button className="scroll-button" onClick={scrollDown}>Scroll Down</button>
      </div>

      <div className="programs-container" ref={programsContainerRef}>
        <div className="programs-list">
          {programs.map((program, index) => (
            <div className="program" key={index}>
              <h2 className='der'>{program.title}</h2>
              <p>{program.description}</p>
              <p><strong>Date:</strong> {program.date}</p>
              <p><strong>Duration:</strong> {program.duration}</p>
            </div>
          ))}
        </div>
      </div>
      
        <button className="bkc-button" onClick={() => navigate(-1)}>Back</button>
     
    </div>
  );
};

export default TrainingPrograms;
