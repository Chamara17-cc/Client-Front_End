import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faConciergeBell, faEnvelope, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import payment from '../Payment'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <h1>PROXIMA</h1>
            </div>
            <div className="user-profile">
                <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" alt="User Icon" />
                <p>WELCOME</p>
            </div>
            <ul>
                <li><FontAwesomeIcon icon={faHome} /><a href="./clientDashboard"> Dashboard</a></li>
                <li><FontAwesomeIcon icon={faInfoCircle} /><a href="./payment" >Payments</a></li>
                <li><FontAwesomeIcon icon={faEnvelope} /> Contact</li>
                <li><FontAwesomeIcon icon={faQuestionCircle } /> Chat</li>
            </ul>
            <div className="bottom-buttons">
                <button className="logout-button"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button>
            
            
          
            </div>
        </div>
    );
};

export default Sidebar;
