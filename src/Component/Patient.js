// src/components/PatientPage.js
import React, { useState } from 'react';
import { FaHospital, FaStethoscope, FaMoneyBillWave, FaCalendarCheck } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import './Patient.css';

const PatientPage = () => {
    const [showHospitals, setShowHospitals] = useState(false);
    const dummyPatientData = {
        name: "John Doe",
        age: 25,
        previousRecords: ["Fever", "Cold", "Fracture"],
        currentRecord: "Migraine",
        previousBilling: [{
            date: "2022-01-15",
            amount: "$250"
        }, {
            date: "2022-02-10",
            amount: "$150"
        }],
    };

    const dummyHospitals = ["Hospital A", "Hospital B", "Hospital C"];

    return (
        <div className="patient-container">
            <h1>Welcome, {dummyPatientData.name}</h1>
            <p><FaStethoscope /> Age: {dummyPatientData.age}</p>
            <h3>Current Record: {dummyPatientData.currentRecord}</h3>
            <h3>Previous Records:</h3>
            <ul>
                {dummyPatientData.previousRecords.map((record, index) => (
                    <li key={index}><FaStethoscope /> {record}</li>
                ))}
            </ul>
            <h3>Previous Billings:</h3>
            <ul>
                {dummyPatientData.previousBilling.map((bill, index) => (
                    <li key={index}><FaMoneyBillWave /> {bill.date} - {bill.amount}</li>
                ))}
            </ul>
            <button onClick={() => setShowHospitals(!showHospitals)}>Show Hospitals <FaHospital /></button>

            <CSSTransition
                in={showHospitals}
                timeout={300}
                classNames="alert"
                unmountOnExit
            >
                <div className="hospital-list">
                    {dummyHospitals.map((hospital, index) => (
                        <div key={index} className="hospital-item">
                            <p><FaHospital /> {hospital}</p>
                            <button className="appointment-button"><FaCalendarCheck /> Book Appointment</button>
                        </div>
                    ))}
                </div>
            </CSSTransition>
        </div>
    );
};

export default PatientPage;
