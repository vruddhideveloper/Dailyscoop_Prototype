import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import Reviews from "../../components/reviews/Reviews";
import Entertainment from "../../components/entertainment/Entertainment";
import { VisualStories } from "../../components/visualStories/VisualStories";
import Stocks from "../../components/stocks/Stocks";
import Gadget from "../../components/gadget/Gadget";
const Home = () => {
  return (
    <div>
      <div>
        <h1 className="headings">The Daily Scoop</h1>
        <i class="ri-notification-4-fill"></i>
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/stocks" className="nav-link">
                Stocks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className="nav-link">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reviews" className="nav-link">
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
              <Link to="/visualStories" className="nav-link">
                Visual Stories
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Stocks />
      <Entertainment />
      <Reviews />
      <Gadget />
      <VisualStories />
    </div>
  );
};

export default Home;
