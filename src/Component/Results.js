import React from 'react';

function Results() {
    const dummyData = [
        {
            hospitalName: "Medicare Hospital",
            availableAmbulances: 5,
            availableBeds: 20
        },
        {
            hospitalName: "City Health Center",
            availableAmbulances: 3,
            availableBeds: 10
        },
        {
            hospitalName: "Wellness Clinic",
            availableAmbulances: 4,
            availableBeds: 15
        },
        {
            hospitalName: "LifeCare Hospital",
            availableAmbulances: 2,
            availableBeds: 25
        }
    ];

    const styles = {
        container: {
            margin: '0 auto',
            maxWidth: '800px',
            padding: '40px 20px',
            backgroundColor: '#f7f7f9',
            borderRadius: '8px'
        },
        resultContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '20px',
            padding: '15px',
            borderRadius: '5px',
            border: '1px solid #e0e0e0',
            backgroundColor: '#ffffff',
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.05)'
        },
        hospitalName: {
            color: '#0055a5',
            marginBottom: '10px'
        },
        details: {
            color: '#555',
            fontWeight: '500'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Search Results</h1>
            {dummyData.map((hospital, index) => (
                <div key={index} style={styles.resultContainer}>
                    <h3 style={styles.hospitalName}>{hospital.hospitalName}</h3>
                    <p style={styles.details}><strong>Available Ambulances:</strong> {hospital.availableAmbulances}</p>
                    <p style={styles.details}><strong>Available Beds:</strong> {hospital.availableBeds}</p>
                </div>
            ))}
        </div>
    );
}

export default Results;
