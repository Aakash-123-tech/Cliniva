import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon">✚</div>
        <div className="logo-text">Cliniva</div>
      </div>

      <div className="doctor-profile">
        <img 
          src="https://i.pravatar.cc/150?img=12" 
          alt="Doctor" 
          className="doctor-avatar"
        />
        <div className="doctor-name">Ashton Cox</div>
        <div className="doctor-role">DOCTOR</div>
      </div>

      <div className="sidebar-menu">
        <div className="menu-section">
          <div className="menu-label">MAIN</div>
          <Link 
            to="/" 
            className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}
            title="Appointments"
          >
            <div className="menu-icon">📋</div>
            <div className="menu-text">Appointments</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;