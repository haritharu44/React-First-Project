import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand fs-4 fw-normal" to="#">
            Harsh Technical
          </NavLink>
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
            <ul className="navbar-nav ms-auto d-flex gap-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 active "
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5" to="/service">
                  Services
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link fs-5" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
