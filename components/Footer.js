'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {year} MSD. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/Dinesh9831" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/moturi-sai-dinesh-68572a291/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <a href="#home" className="scroll-top"><i className="fa-solid fa-chevron-up"></i></a>
      </div>
    </footer>
  );
}
