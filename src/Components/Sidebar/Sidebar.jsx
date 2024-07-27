import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Sidebar/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project-request"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Project Request
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
