import React from 'react';
import { Link } from 'react-router-dom';
import {Dropdown} from '.';

const Navigation = ({username,homeColor,sentRequestsColor,acceptedRequestsColor,aboutTeamColor,contactTeamColor,profileColor,}) => {
    const defaultTextColor = "white"; // default text color
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ps-4 pe-4 text-${homeColor || defaultTextColor}`} aria-current="page" to="/request-donor"><i className="fa-solid fa-house p-2"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ps-4 pe-4 text-${sentRequestsColor || defaultTextColor}`} to="/sent-requests"><i className="fa-solid fa-list p-2"></i>Sent Requests</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ps-4 pe-4 text-${acceptedRequestsColor || defaultTextColor}`} to="/accepted-requests"><i className="fa-solid fa-calendar-check p-2"></i> Accepted Requests</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ps-4 pe-4 text-${aboutTeamColor || defaultTextColor}`} to="/about-team"><i className="fa-solid fa-info p-2"></i>  About Us</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ps-4 pe-4 text-${contactTeamColor || defaultTextColor}`} to="/contact-team"><i className="fa-solid fa-phone p-2"></i>  Contact Us</Link>
            </li>
            {/* Integrate the Dropdown component */}
            <Dropdown username={username} defaultTextColor={defaultTextColor} profileColor={profileColor} profileRoute={'/profile-staff'}/>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
