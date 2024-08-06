// src/LearningResources.js
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSquareChevUp, CiSquareChevDown } from 'react-icons/ci';
import './Learning Resources.css';

const LearningResources = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'up' ? -300 : 300;
      containerRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };

  const resources = [
    {
      title: 'Introduction to React',
      description: 'A comprehensive guide to getting started with React.',
      link: 'https://reactjs.org/docs/getting-started.html'
    },
    {
      title: 'CSS Tricks',
      description: 'Advanced CSS techniques and best practices.',
      link: 'https://css-tricks.com/'
    },
    {
      title: 'JavaScript Info',
      description: 'A detailed resource for learning JavaScript.',
      link: 'https://javascript.info/'
    },
    {
      title: 'MDN Web Docs',
      description: 'Mozilla Developer Network documentation on web technologies.',
      link: 'https://developer.mozilla.org/'
    },
    {
      title: 'Frontend Mentor',
      description: 'Challenges to practice frontend development skills.',
      link: 'https://www.frontendmentor.io/'
    }
    // Add more resources as needed
  ];

  return (
    <div className="learning-resources">
      <h1 className='title'>Learning Resources</h1>
      <div className="scroll-container">
        <div className="resources-container" ref={containerRef}>
          {resources.map((resource, index) => (
            <div className="resource" key={index}>
              <h2 className='fgf'>{resource.title}</h2>
              <p>{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          ))}
        </div>
      </div>
      
        <button className="bkk-button" onClick={() => navigate(-1)}>Back</button>
     
    </div>
  );
};

export default LearningResources;
