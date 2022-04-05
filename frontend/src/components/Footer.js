import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4 col-sm-6">
            <div className="footer-info-single">
              <h2 className="title mb-3">Siren</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="/" title="" className="links text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/" title="" className="links text-white">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="/" title="" className="links text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="/" title="" className="links text-white">
                    Corporate
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="footer-info-single">
              <h2 className="title mb-3">Customer Service</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="/" title="" className="links text-white">
                    Help
                  </a>
                </li>
                <li>
                  <a href="/" title="" className="links text-white">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="/" title="" className="links text-white">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="/" title="" className="links text-white">
                    Return / Refund policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="footer-info-single">
              <h2 className="title mb-3">Contact Us</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="/" title="" className="links text-white">
                    1-800-999 999
                  </a>
                </li>
                <li>
                  <a href="/" title="" className="links text-white">
                    contact@siren.com
                  </a>
                </li>

                <li className="social-media ">
                  <ul className="d-flex justify-content-start gap">
                    <li>
                      <a href="/" title="Facebook" className="links text-white">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        title="Instagrom"
                        className="links text-white"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="/" title="Twitter">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="/" title="LinkedIn" className="links text-white">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
