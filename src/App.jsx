
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {AboutUs,Appointments,HomeDonor,ProfileDonor,ContactUs,LoginDonor,RegisterDonor} from './pages/donor'
import Home from './pages/Home';
import { AboutTeams, AcceptRequests, ContactTeam, LoginStaff, ProfileStaff, RegisterStaff, RequestDonor, RequestDonorCreate, SentRequests } from './pages/officer';
import { donorData,dummyData,acceptData,profileData,sampleData,tryData } from './constraints';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/appointments-donor" element={<Appointments allDonors={dummyData.allDonors} />} />
          <Route path="/home-donor" element={<HomeDonor allDonors={dummyData.allDonors} />} />
          <Route path="/login-donor" element={<LoginDonor />} />
          <Route path="/register-donor" element={<RegisterDonor />} />
          <Route path="/profile-donor" element={<ProfileDonor donor={donorData}/>} />
          <Route path="/about-team" element={<AboutTeams />} />
          <Route path="/accepted-requests" element={<AcceptRequests allDonors={acceptData}/>} />
          <Route path="/contact-team" element={<ContactTeam />} />
          <Route path="/login-staff" element={<LoginStaff />} />
          <Route path="/profile-staff" element={<ProfileStaff staffData={profileData}/>} />
          <Route path="/request-donor" element={<RequestDonor allDonors={sampleData}/>} />
          <Route path="/request-create" element={<RequestDonorCreate />} />
          <Route path="/sent-requests" element={<SentRequests allDonors={tryData}/>} />
          <Route path="/register-staff" element={<RegisterStaff/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
