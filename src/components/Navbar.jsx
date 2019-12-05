import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    console.log("before");
    setDarkMode(!darkMode);
    console.log("after");
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="toggle-area">
        <span className="toggle-label">Dark Mode</span>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
