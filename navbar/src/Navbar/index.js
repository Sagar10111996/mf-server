// Navbar.js
import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MyApp</h2>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}>
        <li>
          <a id="navbar-monitoring" href="#">Monitoring</a>
        </li>
        <li>
          <a id="navbar-dashboard" href="#">Dashboard</a>
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;