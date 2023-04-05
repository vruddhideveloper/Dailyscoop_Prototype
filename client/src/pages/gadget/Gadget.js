import React from "react";
import { Link } from "react-router-dom";
import Gadget from "../../components/gadget/Gadget";
import "./navbar.css";
export const GadgetPage = () => {
  return (
    <div>
      <i class="ri-notification-4-fill"></i>
      <h1 className="headings">The Daily Scoop</h1>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reviews" className="nav-link">
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gadget" className="nav-link">
                Gadget
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/compare" className="nav-link">
                Compare
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Gadget />
    </div>
  );
};
