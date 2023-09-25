// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';

// function Emergency() {
//     const [state, setState] = useState('');
//     const [district, setDistrict] = useState('');
//     const [navigate, setNavigate] = useState(false);

//     const search = () => {
//         if (state && district) {
//             setNavigate(true);
//         }
//     };

//     const styles = {
//         container: {
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             margin: '0 auto',
//             maxWidth: '800px',
//             padding: '100px 150px',
//             backgroundColor: '#f7f7f9',
//             borderRadius: '8px',
//             boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)'
//         },
//         input: {
//             padding: '12px 18px',
//             fontSize: '16px',
//             width: '100%',
//             marginBottom: '20px',
//             borderRadius: '6px',
//             border: '1px solid #ddd'
//         },
//         button: {
//             padding: '12px 25px',
//             backgroundColor: '#0055a5',
//             color: '#fff',
//             fontSize: '17px',
//             border: 'none',
//             borderRadius: '6px',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s ease'
//         },
//         tollFree: {
//             color: '#0055a5',
//             fontSize: '24px',
//             fontWeight: 'bold',
//             marginBottom: '25px',
//             textAlign: 'center'
//         }
//     };

//     if (navigate) {
//         return <Navigate to="/results" />;
//     }

//     return (
//         <div style={styles.container}>
//             <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Emergency Services</h1>
//             <p style={styles.tollFree}>Toll-Free Number: 1800-111-222</p>
            
//             <input
//                 style={styles.input}
//                 type="text"
//                 value={state}
//                 onChange={(e) => setState(e.target.value)}
//                 placeholder="Enter State"
//             />

//             <input
//                 style={styles.input}
//                 type="text"
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//                 placeholder="Enter District"
//             />

//             <button style={styles.button} onClick={search} onMouseOver={(e) => e.target.style.backgroundColor = '#004494'} onMouseOut={(e) => e.target.style.backgroundColor = '#0055a5'}>
//                 Search
//             </button>
//         </div>
//     );
// }

// export default Emergency;
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Emergency() {
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [navigate, setNavigate] = useState(false);

    const search = () => {
        if (state && district) {
            setNavigate(true);
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '0 auto',
            maxWidth: '800px',
            padding: '100px 150px',
            backgroundColor: '#f7f7f9',
            borderRadius: '8px',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)'
        },
        input: {
            padding: '12px 18px',
            fontSize: '16px',
            width: '100%',
            marginBottom: '20px',
            borderRadius: '6px',
            border: '1px solid #ddd'
        },
        button: {
            padding: '12px 25px',
            backgroundColor: '#0055a5',
            color: '#fff',
            fontSize: '17px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
        },
        tollFree: {
            color: '#0055a5',
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '25px',
            textAlign: 'center'
        }
    };

    if (navigate) {
        return <Navigate to="/results" />;
    }

    return (
        <div style={styles.container}>
            <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Emergency Services</h1>
            <p style={styles.tollFree}>Toll-Free Number: 1800-111-222</p>
            
            <input
                style={styles.input}
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter State"
            />

            <input
                style={styles.input}
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="Enter District"
            />

            <button style={styles.button} onClick={search} onMouseOver={(e) => e.target.style.backgroundColor = '#004494'} onMouseOut={(e) => e.target.style.backgroundColor = '#0055a5'}>
                Search
            </button>
        </div>
    );
}

export default Emergency;
