import React from "react";
import "../Footer/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div class="container-my">
        <footer class="text-center text-lg-start mt-xl-5 pt-4">
          <div class="container p-4">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <FontAwesomeIcon icon={faTwitter} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faInstagram} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faLinkedinIn} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faYoutube} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faGithub} />
                &nbsp;&nbsp;&nbsp;&nbsp;
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 class="text-uppercase mb-4">Company</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!" class="text-white">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 class="text-uppercase mb-4">Support</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!" class="text-white">
                      Help Centre
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Legal
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Status
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 class="text-uppercase mb-4">Stay Up to date</h5>

                <div class="form-outline  mb-4">
                  <input
                    type="email"
                    id="form5Example2"
                    class="form-control"
                    placeholder="Your email address"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center p-3 ">© 2020 Copyright:</div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
