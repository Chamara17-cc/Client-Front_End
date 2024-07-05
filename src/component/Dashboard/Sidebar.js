import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Sidebar.css';

const API_URL = 'https://localhost:44339/api/Client';

const Sidebar = () => {
    const [clientName, setClientName] = useState('');

    useEffect(() => {
        const fetchClientInfo = async () => {
            try {
                const response = await axios.get(`${API_URL}/2`); 
                setClientName(response.data.clientName); 
            } catch (error) {
                console.error('Error fetching client information:', error);
            }
        };

        fetchClientInfo();
    }, []);

    return (
        <div className="sidebar">
            <div className="logo">
                <h1>PROXIMA</h1>
            </div>
            <div className="user-profile">
                <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" alt="User Icon" />
                <h3 className=' text-white'>Welcome {clientName}</h3>
            </div>
            <ul>
                <li><FontAwesomeIcon icon={faHome} /><a href="./clientDashboard"> Dashboard</a></li>
                <li><FontAwesomeIcon icon={faInfoCircle} /><a href="./payment"> Payments</a></li>
                <li><FontAwesomeIcon icon={faEnvelope} /><a href="./contact"> Contact</a></li>
                <li><FontAwesomeIcon icon={faQuestionCircle} /><a>Chat</a> </li>
            </ul>
            <div className="bottom-buttons">
                <button className="logout-button"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;
