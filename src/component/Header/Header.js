import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';
import '../Header/header.css';

const Header = () => {
  return (
    <div>
      <div className="header-box">
        <div className="logo">
        <Link to='/'> <h1 className="logo-text text2">PROXIMA</h1></Link>
        </div>
        <div className="login-btn">
          <Link to="/login" className="btn btn-success">Login<ArrowRight /></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
