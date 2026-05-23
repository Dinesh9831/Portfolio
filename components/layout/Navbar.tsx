'use client';

import { useState, useEffect } from 'react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useTheme } from '../../hooks/useTheme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLight, toggleTheme } = useTheme();

  const sectionIds = ['home', 'about', 'internship', 'skills', 'projects', 'certifications', 'achievements', 'education', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`glass-nav ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <h2 className="logo">MSD<span>.</span></h2>
        <div className="theme-switch" onClick={toggleTheme}>
          <i className={isLight ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {sectionIds.map((id) => (
            <li key={id}>
              <a 
                href={`#${id}`} 
                className={`nav-link ${activeSection === id ? 'active-section' : ''}`} 
                onClick={closeMenu}
              >
                {id === 'home' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
