import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start mt-5 ">
      <div className="container ">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="d-flex justify-content-around">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Legal
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Stay Up to date</h5>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your email address"
              />
              <button className="btn btn-outline-light" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-2 bg-secondary">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
