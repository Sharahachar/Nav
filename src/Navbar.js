import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { CiClock2 } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { IoIosPersonAdd } from "react-icons/io";
import { RiLogoutCircleFill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { FaPrescription } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoBodyOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io"; 
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdSpatialTracking } from "react-icons/md";
import { TbReport } from "react-icons/tb";


import img1 from "./logo.png";
import img2 from "./profile.png";

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState({
    profile: false,
    ticket: false,
    team: false,
    recruitment: false,
    training: false,
    attendance: false, // New state for attendance dropdown
  });

  const dropdownRefs = {
    profile: useRef(null),
    ticket: useRef(null),
    team: useRef(null),
    recruitment: useRef(null),
    training: useRef(null),
    attendance: useRef(null), // New ref for attendance dropdown
  };

  const toggleDropdown = (type) => {
    setDropdownVisible(prev => ({
      ...prev,
      [type]: !prev[type],
      ...Object.keys(dropdownVisible).reduce((acc, key) => {
        if (key !== type) acc[key] = false; // Close other dropdowns
        return acc;
      }, {}),
    }));
  };

  const handleOutsideClick = (event) => {
    Object.keys(dropdownRefs).forEach(key => {
      if (dropdownVisible[key] && dropdownRefs[key].current && !dropdownRefs[key].current.contains(event.target)) {
        setDropdownVisible(prev => ({ ...prev, [key]: false }));
      }
    });
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [dropdownVisible]);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={img1} alt="Logo" className='logo' />
      </div>

      <div className='nav'>
        {/* Team Dropdown */}
        <div className="profile-icon" onClick={() => toggleDropdown('team')} ref={dropdownRefs.team}>
          <div className='ticket'>
            <p className='gd'>Employee Directory</p>
            <RiArrowDropDownLine className='col' />
          </div>
          {dropdownVisible.team && (
            <div className='aa'>
              <div className="dropdown-menu3">
                <Link className="men" to="/team-lead">
                  
                  Employee by Team
                </Link>
                <Link className="men" to="/employee-by-project">
                  
                  Employee by Project
                </Link>
                <Link className="men" to="/employee-reports">
                 
                  Employee Project Reports
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Ticket Dropdown */}
        <div className="profile-icon" onClick={() => toggleDropdown('ticket')} ref={dropdownRefs.ticket}>
          <div className='ticket1'>
            <p className='gd'>Tickets</p>
            <RiArrowDropDownLine className='col' />
          </div>
          {dropdownVisible.ticket && (
            <div className='aa'>
              <div className="dropdown-menu2">
                <Link className="men12" to="/raise-ticket">
                 
                  Raise Ticket
                </Link>
                <Link className="men12" to="/quicklinks">
                  
                  My Tickets
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Recruitment Dropdown */}
        <div className="profile-icon" onClick={() => toggleDropdown('recruitment')} ref={dropdownRefs.recruitment}>
          <div className='ticket2'>
            <p className='gd'>Recruitment</p>
            <RiArrowDropDownLine className='col' />
          </div>
          {dropdownVisible.recruitment && (
            <div className='aa'>
              <div className="dropdown-menu1">
                <Link className="men23" to="/interview-schedule">
                  
                  Interview Schedule
                </Link>
                <Link className="men23" to="/application-tracking">
            
                  Applicant Tracking
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Training Dropdown */}
        <div className="profile-icon" onClick={() => toggleDropdown('training')} ref={dropdownRefs.training}>
          <div className='ticket4'>
            <p className='gd'>Training</p>
            <RiArrowDropDownLine className='col' />
          </div>
          {dropdownVisible.training && (
            <div className='ab'>
              <div className="dropdown-menu4">
                <Link className="men34" to="/training-programs">
                  
                  Training Programs
                </Link>
                <Link className="men34" to="/upcoming-sessions">
                  
                  Upcoming Sessions
                </Link>
                <Link className="men34" to="/learning-resources">
                 
                  Learning Resources
                </Link>
                <Link className="men34" to="/assign-training">
                  
                  Assign Training
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Attendance Dropdown */}
        <div className="profile-icon" onClick={() => toggleDropdown('attendance')} ref={dropdownRefs.attendance}>
          <div className='ticket5'>
            
          <Link className="men45" to="/attendance"><CiClock2 className='colc' /></Link>
          </div>
          {dropdownVisible.attendance && (
            <div className='ab'>
              <div className="dropdown-menu5">
               
                
                
              
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="profile-icon" onClick={() => toggleDropdown('profile')} ref={dropdownRefs.profile}>
          <img src={img2} alt="Profile" />
          {dropdownVisible.profile && (
            <div className="dropdown-menu">
              <Link className="menu1" to="/myprofile">
                <IoIosPersonAdd className='icon' />
                My Profile
              </Link>
              <Link className="menu1" to="/resignation">
                <FaPrescription className='icon' />
                Resignation
              </Link>
              <Link className="menu1" to="/settings">
                <IoSettings className='icon' />
                Settings
              </Link>
              <Link className="menu1" to="/help">
                <FaHandsHelping className='icon' />
                Help
              </Link>
              <Link className="menu1" to="/logout">
                <RiLogoutCircleFill className='icon' />
                Logout
              </Link>
            </div>
          )}
        </div>

        <div className="events-button-container">
          <Link className="holiday-link" to="/holiday">
            Holiday
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
