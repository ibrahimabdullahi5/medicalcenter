import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/departments" activeClassName="active">
            Departments
          </NavLink>
        </li>
        <li>
          <NavLink to="/ConsultantClinics" activeClassName="active">
            Consultant Clinics
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;





