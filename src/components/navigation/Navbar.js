import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-main navbar-expand-lg border-bottom">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main_nav"
          aria-controls="main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav text-dark">
            <li className="nav-item">
              <NavLink className="nav-link" to="shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="sell_with_us">
                Sell with us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about_alistyle">
                About alistyle
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contact_us">
                Contact us
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-md-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Get the app
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                data-toggle="dropdown"
              >
                English
              </NavLink>
              <div className="dropdown-menu dropdown-menu-right">
                <NavLink className="dropdown-item" to="#">
                  Russian
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  French
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  Spanish
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  Chinese
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
