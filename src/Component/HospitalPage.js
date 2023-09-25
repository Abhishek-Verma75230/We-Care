// import React from 'react';
// import { Link } from 'react-router-dom';

// const HospitalPage = () => {
//     // Styles for HospitalPage
//     const pageStyles = {
//         padding: '20px',
//         fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
//         backgroundColor: '#f2f2f2',
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center'
//     };

//     const headerStyle = {
//         color: '#2c3e50',
//         marginBottom: '40px'
//     };

//     const gridContainer = {
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         gap: '20px',
//         width: '80%',
//     };

//     const sectionStyles = {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         backgroundColor: '#ecf0f1',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
//         transition: 'all 0.3s',
//         textAlign: 'center'
//     };

//     const sectionHeader = {
//         marginBottom: '10px',
//         fontWeight: '500'
//     };

//     const linkStyles = {
//         textDecoration: 'none',
//         margin: '10px 0',
//         fontSize: '18px',
//         color: '#2980b9',
//         padding: '10px',
//         borderRadius: '4px',
//         background: 'rgba(255,255,255, 0.7)',
//         transition: 'background 0.3s'
//     };

//     return (
//         <div style={pageStyles}>
//             <h1 style={headerStyle}>Hospital Central System</h1>
//             <div style={gridContainer}>
//                 <div style={sectionStyles}>
//                     <h2 style={sectionHeader}>Equipments</h2>
//                     <Link to="/equipments" style={linkStyles}>View Equipment Details</Link>
//                 </div>
//                 <div style={sectionStyles}>
//                     <h2 style={sectionHeader}>Training Program</h2>
//                     <Link to="/training" style={linkStyles}>View Training Programs</Link>
//                 </div>
//                 <div style={sectionStyles}>
//                     <h2 style={sectionHeader}>Revenue</h2>
//                     <Link to="/revenue" style={linkStyles}>View Revenue Details</Link>
//                 </div>
//                 <div style={sectionStyles}>
//                     <h2 style={sectionHeader}>Reviews</h2>
//                     <Link to="/reviews" style={linkStyles}>View Reviews</Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HospitalPage;
import React from 'react';
import { Link } from 'react-router-dom';

const HospitalPage = () => {
    // Styles for HospitalPage
    const pageStyles = {
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: '#f7f7f9',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    const headerStyle = {
        color: '#2c3e50',
        marginBottom: '50px',
        fontWeight: '600',
        fontSize: '2.5em'
    };

    const gridContainer = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px',
        width: '80%',
        maxWidth: '1000px'
    };

    const sectionStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0px 5px 15px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        textAlign: 'center',
        cursor: 'pointer'
    };

    const sectionHeader = {
        marginBottom: '20px',
        fontWeight: '600',
        fontSize: '1.5em'
    };

    const linkStyles = {
        textDecoration: 'none',
        margin: '10px 0',
        fontSize: '18px',
        color: '#2980b9',
        padding: '12px 20px',
        borderRadius: '6px',
        background: '#fff',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'background 0.3s, transform 0.3s'
    };

    return (
        <div style={pageStyles}>
            <h1 style={headerStyle}>Hospital Central System</h1>
            <div style={gridContainer}>
                <div 
                    style={sectionStyles}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0px 8px 20px rgba(0,0,0,0.12)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0px 5px 15px rgba(0,0,0,0.08)';
                    }}>
                    <h2 style={sectionHeader}>Equipments</h2>
                    <Link to="/equipments" style={linkStyles}>View Equipment Details</Link>
                </div>
                <div 
                    style={sectionStyles}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0px 8px 20px rgba(0,0,0,0.12)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0px 5px 15px rgba(0,0,0,0.08)';
                    }}>
                    <h2 style={sectionHeader}>Training Program</h2>
                    <Link to="/training" style={linkStyles}>View Training Programs</Link>
                </div>
                <div 
                    style={sectionStyles}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0px 8px 20px rgba(0,0,0,0.12)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0px 5px 15px rgba(0,0,0,0.08)';
                    }}>
                    <h2 style={sectionHeader}>Revenue</h2>
                    <Link to="/revenue" style={linkStyles}>View Revenue Details</Link>
                </div>
                <div 
                    style={sectionStyles}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0px 8px 20px rgba(0,0,0,0.12)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0px 5px 15px rgba(0,0,0,0.08)';
                    }}>
                    <h2 style={sectionHeader}>Reviews</h2>
                    <Link to="/reviews" style={linkStyles}>View Reviews</Link>
                </div>
            </div>
        </div>
    );
}

export default HospitalPage;
