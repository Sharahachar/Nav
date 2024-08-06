import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Attendence.css';

const Attendence = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [clockedIn, setClockedIn] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [totalHours, setTotalHours] = useState('');
  const [history, setHistory] = useState({});
  const historyListRef = useRef(null);

  const [employeeDetails] = useState({
    id: 'E12345',
    name: 'John Doe',
    teamLead: 'Jane Smith',
    manager: 'James Brown',
    number: '123-456-7890'
  });

  const handleClockIn = () => {
    const now = new Date();
    setClockedIn(true);
    setStartTime(now);
    updateHistory(now, 'Clock In');
  };

  const handleClockOut = () => {
    const now = new Date();
    setClockedIn(false);
    setEndTime(now);
    const totalSeconds = (now - startTime) / 1000;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    setTotalHours(`${hours}h ${minutes}m ${seconds}s`);
    updateHistory(now, 'Clock Out');
  };

  const updateHistory = (time, type) => {
    const dayString = selectedDate.toDateString();
    setHistory(prevHistory => {
      const newHistory = { ...prevHistory };
      if (!newHistory[dayString]) {
        newHistory[dayString] = [];
      }
      newHistory[dayString].push({ time, type });
      return newHistory;
    });
  };

  const formatTime = (time) => {
    return time ? time.toLocaleTimeString('en-US') : '--:--:--';
  };

  const displayHistory = Object.keys(history).flatMap(day =>
    history[day].map(entry => ({
      ...entry,
      day: new Date(day)
    }))
  );

  const downloadReport = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Employee ID,Employee Name,Team Lead,Manager,Contact Number,Date,Clock In Time,Clock Out Time,Total Hours\n";
    let hasData = false;

    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const dayString = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day).toDateString();
      const dayHistory = history[dayString];
      if (dayHistory) {
        hasData = true;
        let clockInTime = "";
        let clockOutTime = "";
        let totalTime = "";
        let totalSeconds = 0;
        dayHistory.forEach(entry => {
          if (entry.type === 'Clock In') {
            clockInTime = entry.time.toLocaleTimeString('en-US');
          } else if (entry.type === 'Clock Out') {
            clockOutTime = entry.time.toLocaleTimeString('en-US');
            totalSeconds = (entry.time - new Date(dayString + ' ' + clockInTime)) / 1000;
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = Math.floor(totalSeconds % 60);
            totalTime = `${hours}h ${minutes}m ${seconds}s`;
          }
        });
        csvContent += `${employeeDetails.id},${employeeDetails.name},${employeeDetails.teamLead},${employeeDetails.manager},${employeeDetails.number},${dayString},${clockInTime},${clockOutTime},${totalTime}\n`;
      }
    }

    if (hasData) {
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "attendance_report.csv");
      document.body.appendChild(link);
      link.click();
    } else {
      alert("No data available to download.");
    }
  };

  const handleScroll = (direction) => {
    if (direction === 'up') {
      historyListRef.current.scrollBy(0, -100);
    } else if (direction === 'down') {
      historyListRef.current.scrollBy(0, 100);
    }
  };

  return (
    <div className='con'>
      <div className="app">
        <h1>Attendance Tracker</h1>
        <div className="contain">
          <div className="clock-in-out">
            <button
              className={`clock-btn ${clockedIn ? 'clocked-in' : ''}`}
              onClick={clockedIn ? handleClockOut : handleClockIn}
            >
              {clockedIn ? 'Clock Out' : 'Clock In'}
            </button>
            <div className="date-picker-container">
              <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="MMMM d, yyyy"
                className="date-picker"
              />
            </div>
          </div>
          <div className="status">
            <div className="status-box">
              <span>Start Time</span>
              {formatTime(startTime)}
            </div>
            <div className="status-box">
              <span>End Time</span>
              {formatTime(endTime)}
            </div>
            <div className="status-box">
              <span>Total Hours</span>
              {totalHours}
            </div>
          </div>
          <div className="history" ref={historyListRef}>
            <div className="history-list">
              {displayHistory.map((entry, index) => (
                <div key={index}>
                  {entry.day.toDateString()} - {entry.type}: {entry.time.toLocaleTimeString('en-US')}
                </div>
              ))}
            </div>
          </div>
          <button className="download-btn" onClick={downloadReport}>
            Download Report
          </button>
          <button className="back-btn" onClick={() => window.history.back()}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendence;
