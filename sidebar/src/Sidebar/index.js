import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#" id="sidebar-monitoring" className="sidebar-link" >Monitoring</a>
        </li>
        <li>
          <a href="#" id="sidebar-dashboard" className="sidebar-link">Dashboard</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
