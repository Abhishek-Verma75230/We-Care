import React from 'react';
import './App.css';
import {  Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import DoctorLogin from './Component/DoctorLogin';
// import HospitalPage from './Component/HospitalPage';
import PatientLogin from './Component/PatientLogin';
import EquipmentPage from './Component/EquipmentPage';
import RevenuePage from './Component/Revenue';
import ReviewsPage from './Component/ReviewsPage';
import Emergency from './Component/Emergency';
import TrainingProgramPage from './Component/TrainingProgramPage';
import HospitalPage from './Component/HospitalPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Results from './Component/Results';
import PatientPage from './Component/Patient';
import { BrowserRouter } from 'react-router-dom';
import CommunityPage from './Component/Community';
function App() {
  return (
    <div>
      <BrowserRouter>
    {/* <Router> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Hospital-Page" element={<HospitalPage />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/emergency" element={<Emergency />} />
        {/* <Route path="/" element={<EmergencyServices />} /> */}
        <Route path="/results" element={<Results />} />
        {/* <Route path="/hospital-page" element={<HospitalPage />} /> */}
        <Route path="/equipments" element={<EquipmentPage/>} />
        <Route path="/training" element={<TrainingProgramPage/>} />
        <Route path="/reviews" element={<ReviewsPage/>} />
        <Route path="/revenue" element={<RevenuePage/>} />
        <Route path="/Patient-Page" element={<PatientPage/>} />
        <Route path="/Community-Page" element={<CommunityPage/>} />


      </Routes>
    {/* </Router> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
