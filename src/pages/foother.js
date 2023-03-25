import React from "react";
import "../assets/css/fontawesome.min.css";
import "../assets/css/custom.css";
import "../assets/css/templatemo.css";
import "../assets/css/bootstrap.min.css";
import "../assets/img/apple-icon.png";
import "../assets/img/favicon.ico";
class foother extends React.Component {
  render() {
    return (
      <>
        <footer className="bg-dark" id="tempaltemo_footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pt-5">
                <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                  HVT
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <i className="fas fa-map-marker-alt fa-fw"></i>
                    123 Consectetur at ligula 10660
                  </li>
                  <li>
                    <i className="fa fa-phone fa-fw"></i>
                    <a className="text-decoration-none" href="tel:010-020-0340">
                      010-020-0340
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-envelope fa-fw"></i>
                    <a
                      className="text-decoration-none"
                      href="mailto:info@company.com"
                    >
                      info@company.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">
                  VEHICLES
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <a className="text-decoration-none" href="/">
                    SUVs
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="/">
                    Trucks
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="/">
                    Cars
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="/">
                    Crossovers
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="/">
                    Electrified Vehicles
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="/">
                    Hybrids
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">
                    ABOUT
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <a className="text-decoration-none" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="/">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none"  href="/" >
                    Our Company
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="/">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="/">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row text-light mb-4">
              <div className="col-12 mb-3">
                <div className="w-100 my-3 border-top border-light"></div>
              </div>
              <div className="col-auto me-auto">
                <ul className="list-inline text-left footer-icons">
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://facebook.com/"
                    >
                      <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/"
                    >
                      <i className="fab fa-instagram fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/"
                    >
                      <i className="fab fa-twitter fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/"
                    >
                      <i className="fab fa-linkedin fa-lg fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-100 bg-black py-3">
            <div className="container">
              <div className="row pt-2">
                <div className="col-12">
                  <p className="text-left text-light">
                    Copyright &copy; 2021 Company Name | Designed by{" "}
                    <a
                      // rel="sponsored"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://templatemo.com"
                    
                      
                    >
                      TemplateMo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
export default foother;
