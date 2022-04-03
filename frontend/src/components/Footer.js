import React from 'react';
import './Footer.css';

const Footer = () => {
  //   const year = new Date().getFullYear();
  //   console.log(year);
  return (
    <div class=" footer mt-3 p-4 bg-dark text-white">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#" className="links text-white">
                    Service 1
                  </a>
                </li>
                <li>
                  <a href="#" className="links text-white">
                    Service 2
                  </a>
                </li>
                <li>
                  <a href="#" className="links text-white">
                    Service 3
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#" className="links text-white">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="links text-white">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="links text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Company Name</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div class="col item social">
              <a href="#" className="links text-white">
                <i class="icon ion-social-facebook"></i>
              </a>
              <a href="#" className="links text-white">
                <i class="icon ion-social-twitter"></i>
              </a>
              <a href="#" className="links text-white">
                <i class="icon ion-social-snapchat"></i>
              </a>
              <a href="#" className="links text-white">
                <i class="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          {/* <p class="copyright">Siren {year}</p> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;

// {
//   /* <div className="text-center">All rights reserved FoofyFoof</div> */
// }
