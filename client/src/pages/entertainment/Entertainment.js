import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Entertainment from "../../components/entertainment/Entertainment";

const EntertainmentPage = () => {
  return (
    <div>
      <h1>Entertainment</h1>
      <i class="ri-notification-4-fill"></i>
      <h1 className="headings">The Daily Scoop</h1>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reviews" className="nav-link">
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Latest Photos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/visualStories" className="nav-link">
                Visual Stories
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Trailers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Entertainment />
    </div>
  );
};

export default EntertainmentPage;
