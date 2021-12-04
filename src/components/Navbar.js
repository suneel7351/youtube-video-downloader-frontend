import React from "react";
import Icon from "../Icon.svg";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark " style={{"backgroundColor":"#2E5C84"}}>
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="#">
            <img src={Icon} style={{"width":"50px","color":"white"}} alt="" /> ytdownloaders
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active ms-2 me-2 fs-5"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link ms-2 me-2 fs-5"
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link ms-2 me-2 fs-5"
                  aria-current="page"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
