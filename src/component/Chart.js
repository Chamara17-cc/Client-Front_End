import React, { useState } from 'react';
import './Chart.css';

const Chart = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
    { id: 'analytics', icon: 'fas fa-chart-line', label: 'Analytics' },
    { id: 'sales', icon: 'fas fa-dollar-sign', label: 'Sales' },
    { id: 'customers', icon: 'fas fa-users', label: 'Customers' },
    { id: 'inventory', icon: 'fas fa-boxes', label: 'Inventory' },
    { id: 'settings', icon: 'fas fa-cog', label: 'Settings' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="https://via.placeholder.com/50" alt="Logo" className="logo" />
        <h2>Company Name</h2>
      </div>
      <div className="user-info">
        <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
        <div className="user-details">
          <h3>John Doe</h3>
          <p>Admin</p>
        </div>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => setActiveItem(item.id)}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="sidebar-footer">
        <a href="#logout" className="logout-btn">
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Chart;
