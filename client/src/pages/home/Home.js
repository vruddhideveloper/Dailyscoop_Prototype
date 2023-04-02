import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import Reviews from "../../components/reviews/Reviews";
import Entertainment from "../../components/entertainment/Entertainment";
import { VisualStories } from "../../components/visualStories/VisualStories";
const Home = () => {
  return (
    <div>
      <span>
        <i class="ri-notification-4-fill"></i>
        <h1 className="heading">The Daily Scoop</h1>
      </span>

      <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Stocks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className="nav-link">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ecom2" className="nav-link">
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Automobile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gadget" className="nav-link">
                Gadgets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ecom3" className="nav-link">
                Visual Stories
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Reviews />
      <Entertainment />
      <VisualStories />
    </div>
  );
};

export default Home;
