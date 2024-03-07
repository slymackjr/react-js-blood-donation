// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from '.';
import { logo1 } from '../assets/img';

const Navbar = ({ username,homeColor,appointmentsColor,aboutUsColor,contactUsColor,profileColor, }) => {
    const defaultTextColor = "white"; // default text color
  return (
    <div>
      <div className="text-center p-3 container-md">
        <Link to={"/home-donor"}>
          <img src={logo1} className="h-25 w-75 rounded" alt="Company Logo" />
        </Link>
      </div>
      <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ps-4 pe-4 text-${homeColor || defaultTextColor}`} aria-current="page" to="/home-donor"><i className="fa-solid fa-house p-2"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ps-4 pe-4 text-${appointmentsColor || defaultTextColor}`} to="/appointments-donor">
                <i className="fa-solid fa-calendar-check p-2"></i>  Appointments
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ps-4 pe-4 text-${aboutUsColor || defaultTextColor}`} to="/about-us">
                <i className="fa-solid fa-info p-2"></i>  About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ps-4 pe-4 text-${contactUsColor || defaultTextColor}`} to="/contact-us">
                <i className="fa-solid fa-phone p-2"></i>  Contact Us
              </Link>
            </li>
             {/* Integrate the Dropdown component */}
             <Dropdown username={username} defaultTextColor={defaultTextColor} profileColor={profileColor} profileRoute={'/profile-donor'}/>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
