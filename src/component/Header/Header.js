import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import "../Header/header.css";

const Header = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  const pathSegments = currentPath.split('/').filter(Boolean);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center border-bottom ps-4 pe-4 pb-2 pt-2">
        <div className="">
          <Link to="/">
            {" "}
            <h1 className="text-dark">PROXIMA</h1>
          </Link>
        </div>

        <div >
        {pathSegments!="login" &&
          <Link to="/login" className="btn btn-outline-success">
          <div className="d-flex justify-content-center align-items-center">
        
          <div className="pe-2">
            Login
            </div>
            <div>
            <ArrowRight />
            </div>
            </div>
          </Link>}
        </div>
      </div>
    </div>
  );
};

export default Header;
