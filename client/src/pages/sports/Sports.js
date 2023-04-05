import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Sports = () => {
  return (
    <div>
      <i class="ri-notification-4-fill"></i>
      <h1 className="headings">The Daily Scoop</h1>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link">
                Cricket
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Badminton
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Hockey
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Wrestling
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Basketball
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
