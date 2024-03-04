import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ username, defaultTextColor, profileColor, profileRoute }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <li className="nav-item dropdown" ref={dropdownRef}>
      <a
        className={`nav-link dropdown-toggle text-${profileColor || defaultTextColor}`}
        href="#"
        id="navbarDropdown"
        role="button"
        onClick={toggleDropdown}
      >
        <i className="fas fa-user mx-1"></i>
        {username}
      </a>
      {/* Dropdown menu */}
      <ul className={`dropdown-menu dropdown-menu-end ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
        <li>
          <Link className="dropdown-item" to={profileRoute}>My account</Link>
        </li>
        <li>
          {/* @auth('donors') */}
          <Link className="dropdown-item" to="/">Log out</Link>
          {/* @endauth */}
        </li>
      </ul>
    </li>
  );
}

export default Dropdown;
