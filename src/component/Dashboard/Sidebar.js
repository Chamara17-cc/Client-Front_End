// Sidebar.js
import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isClosed, setIsClosed] = useState(false);

  const toggleSidebar = () => {
    setIsClosed(!isClosed);
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.classList.toggle("shifted");
    }
  };

  const handleHamburgerClick = () => {
    toggleSidebar();
  };

  return (
    <>
      <div id="wrapper" className={isClosed ? "toggled" : ""}>
        <div className="overlay"></div>
        <nav
          className="navbar navbar-inverse fixed-top"
          id="sidebar-wrapper"
          role="navigation"
        >
          <ul className="nav sidebar-nav">
            <div className="sidebar-header">
              <div className="sidebar-brand">
                <a href="#">PROXIMA</a>
              </div>
            </div>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
           
          </ul>
        </nav>
        <div id="page-content-wrapper">
          <button
            type="button"
            className="hamburger animated fadeInLeft is-closed"
            onClick={handleHamburgerClick}
            data-toggle="offcanvas"
          >
            <span className="hamb-top"></span>
            <span className="hamb-middle"></span>
            <span className="hamb-bottom"></span>
          </button>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
