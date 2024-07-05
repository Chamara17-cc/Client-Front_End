// Home.jsx

import React, { useState } from 'react';
import Header from '../Header/Header';
import '../Home/home.css';
import HomeImage from '../../assets/Illustration.svg';
import BottomLine from '../Line/Line';
import ClientData from '../Clientdata/ClientData';
import Services from '../Services/Services';
import History from '../History/History';
import Footer from '../Footer/Footer';
import Customers from '../Customers/Customers';
import Registration from '../Home/RegistrationPopup';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div className="body-box">
        <div className="body-text">
          <div className="theme">
            <p className="theme-des">Discover a smarter way to manage <br />your projects with</p>
            <p className="brand-name"> Proxima</p>
          </div>
          <div className="register-btn">
            <button className="btn btn-success" onClick={togglePopup}>Register</button>
            {showPopup && <Registration onClose={togglePopup} />}
          </div>
        </div>
        <div className="body-img">
          <img src={HomeImage} alt=' not found'></img>
        </div>
      </div>
      <BottomLine />
      <ClientData />
      <BottomLine />
      <Services />
      <BottomLine />
      <History />
      <BottomLine />
      <Customers />
      <Footer />

     
    </div>
  );
};

export default Home;
