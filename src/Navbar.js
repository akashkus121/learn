import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
     
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link className="navbar-brand" to="/">
              <h1>ExploreFavs</h1>
            </Link>
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
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-4 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/service"
                    aria-current="page"
                    className="nav-link"
                  >
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          
        </nav>
      </div>
   
  );
};

export default Navbar;
