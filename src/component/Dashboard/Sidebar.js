import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const API_URL = 'https://localhost:44339/api/Client';

const Sidebar = () => {
    const [clientName, setClientName] = useState('');

    // Function to fetch client information
    useEffect(() => {
        const fetchClientInfo = async () => {
            try {
                const response = await axios.get(`${API_URL}/AdminGetClientInfo?CId=1`);
                setClientName(response.data.clientName);
            } catch (error) {
                console.error('Error fetching client information:', error);
            }
        };

        fetchClientInfo();
    }, []);

    return (
        <div className="sidebar" style={sidebarStyle}>
            <div className="logo" style={logoStyle}>
                <h1 style={h1Style}>PROXIMA</h1>
            </div>
            <div className="user-profile" style={userProfileStyle}>
                <div style={profileImageStyle}>
                    <img
                        src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
                        alt="User Icon"
                        style={profileImageContentStyle}
                    />
                </div>
                <h3 style={welcomeTextStyle}>Welcome {clientName}</h3>
            </div>
            <ul style={navListStyle}>
                <li style={navListItemStyle}>
                    <FontAwesomeIcon icon={faHome} style={navIconStyle} />
                    <a href="./clientDashboard" style={navLinkStyle}>Dashboard</a>
                </li>
                <li style={navListItemStyle}>
                    <FontAwesomeIcon icon={faInfoCircle} style={navIconStyle} />
                    <a href="./payment" style={navLinkStyle}>Payments</a>
                </li>
                <li style={navListItemStyle}>
                    <FontAwesomeIcon icon={faEnvelope} style={navIconStyle} />
                    <a href="./contact" style={navLinkStyle}>Contact</a>
                </li>
            </ul>
            <div className="bottom-buttons" style={bottomButtonsStyle}>
                <button className="logout-button" style={logoutButtonStyle}>
                    <FontAwesomeIcon icon={faSignOutAlt} style={logoutIconStyle} />
                    Logout
                </button>
            </div>
        </div>
    );
};

// Styles
const sidebarStyle = {
    height: '100vh',
    width: '250px',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#31035c', // Default background color
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
    justifyContent: 'space-between',
    zIndex: 50,
    color: 'white',
};

const logoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
};

const h1Style = {
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    margin: 0,
    fontSize: '24px',
};

const userProfileStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
};

const profileImageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const profileImageContentStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'auto',
    height: 'auto',
    objectFit: 'cover',
    marginRight: '20px',
};

const welcomeTextStyle = {
    color: 'white',
    marginTop: '10px',
};

const navListStyle = {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
    flexGrow: 1,
};

const navListItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    textAlign: 'center',
    color: 'white',
    borderBottom: '1px solid #444',
};

const navIconStyle = {
    marginRight: '10px',
};

const navLinkStyle = {
    color: 'white',
    fontSize: '18px',
};

const bottomButtonsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingBottom: '20px',
};

const logoutButtonStyle = {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    transition: 'background-color 0.3s ease',
};

const logoutIconStyle = {
    marginRight: '10px',
};

export default Sidebar;
