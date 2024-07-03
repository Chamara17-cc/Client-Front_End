import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import "../Header/header.css";

const Header = () => {
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
          
          <Link to="/login" className="btn btn-outline-success">
          <div className="d-flex justify-content-center align-items-center">
          <div className="pe-2">
            Login
            </div>
            <div>
            <ArrowRight />
            </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
