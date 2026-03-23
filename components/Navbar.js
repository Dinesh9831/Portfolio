'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="glass-nav">
      <nav className="navbar">
        <h2 className="logo">MSD<span>.</span></h2>
        <div className="theme-switch" id="theme-toggle">
          <i className="fa-solid fa-moon"></i>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="#internship" className="nav-link" onClick={closeMenu}>Internship</a></li>
          <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
          <li><a href="#certifications" className="nav-link" onClick={closeMenu}>Certifications</a></li>
          <li><a href="#achievements" className="nav-link" onClick={closeMenu}>Achievements</a></li>
          <li><a href="#education" className="nav-link" onClick={closeMenu}>Education</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
