import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Navbar';
import RaiseTicket from './Riseticket/RaiseTicket';
import Quicklinks from './Riseticket/Quicklinks';
import Employeebyprojects from './Employeebyproject/Employeebyproject';
import TeamLead from './Employeebyproject/Teamlead';
import TeamMembers from './Employeebyproject/TeamMembers';
import Projectdetails from './Employeebyproject/Projectdetails';
import Resignation from './Myprofile/Resignation';
import Myprofile from './Myprofile/Myprofile';
import Settings from './Myprofile/Settings';
import Help from './Myprofile/Help';
import Logout from './Myprofile/Logout';
import MemberDetails from './Employeebyproject/MemberDetails';
import ApplicantTracking from './Recruitment/ApplicantTracking';
import InterviewScheduling from './Recruitment/InterviewScheduling';
import EmployeeReport from './Employeebyproject/EmployeeReport';
import TaskDetails from './Employeebyproject/TaskDetails';
import HolidayList from './Holiday';
import TrainingPrograms from './Training/Tariningprogram';
import LearningResources from './Training/Learning Resources';
import AssignTraining from './Training/AssignTraining';
import UpcomingSessions from './Training/UpcomingSessions';
import SuccessPage from './Training/SucessPage'
import Attendence from './Attendence/Atta';









function App() {
  
    const [tickets, setTickets] = useState([]);

    const addTicket = (newTicket) => {
        setTickets([...tickets, newTicket]);
    };
    return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/raise-ticket" element={<RaiseTicket addTicket={addTicket} />} />
        <Route path="/resignation" element={<Resignation/>} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/quicklinks"element={<Quicklinks tickets={tickets}/>}/>
        <Route path="/team-lead"element={<TeamLead/>}/>
        <Route path="/employee-by-project"element={<Employeebyprojects/>}/>
        <Route path="/teamlead/:leaderName" element={<TeamMembers/>} />
        <Route path="/projectdetails/:projectId" element={<Projectdetails />} />
        <Route path="/member-details/:memberId" element={<MemberDetails/>} />       
        <Route path="/application-tracking" element={<ApplicantTracking/>} />
        <Route path="/interview-schedule" element={<InterviewScheduling/>} />
        <Route path="/employee-reports" element={<EmployeeReport/>} />
        <Route path="/task-details" element={<TaskDetails />} />
        <Route path="/holiday" element={<HolidayList />} />
        <Route path="/training-programs" element={<TrainingPrograms />} />
        <Route path="/learning-resources" element={<LearningResources />} />
        <Route path="/assign-training" element={<AssignTraining />} />
        <Route path="/upcoming-sessions" element={<UpcomingSessions />} />
        <Route path="/success" element={<SuccessPage />} /> 
        <Route path="/attendance" element={<Attendence />} /> 
       
             

      </Routes>
    </Router>
  );
}

export default App;
