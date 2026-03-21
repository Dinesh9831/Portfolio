'use client';

import { useState, useEffect } from 'react';

export default function Cursor() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const cursorOuter = document.querySelector('.cursor-outer');
    const cursorGlow = document.querySelector('.cursor-glow');

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    let outerX = 0, outerY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
        cursorDot.style.transform = `translate(-50%, -50%)`;
      }

      if (cursorGlow) {
        cursorGlow.style.left = mouseX + 'px';
        cursorGlow.style.top = mouseY + 'px';
      }
    };

    const animateCursor = () => {
      if (cursorOutline) {
        outlineX += (mouseX - outlineX) * 0.2;
        outlineY += (mouseY - outlineY) * 0.2;

        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        cursorOutline.style.transform = `translate(-50%, -50%)`;
      }

      if (cursorOuter) {
        outerX += (mouseX - outerX) * 0.1;
        outerY += (mouseY - outerY) * 0.1;

        cursorOuter.style.left = outerX + 'px';
        cursorOuter.style.top = outerY + 'px';
      }

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    // Hover Effect
    const handleMouseEnter = () => {
      if (cursorDot) cursorDot.classList.add('active-hover');
      if (cursorOutline) cursorOutline.classList.add('active-hover');
      if (cursorOuter) cursorOuter.classList.add('active-hover');
    };

    const handleMouseLeave = () => {
      if (cursorDot) cursorDot.classList.remove('active-hover');
      if (cursorOutline) cursorOutline.classList.remove('active-hover');
      if (cursorOuter) cursorOuter.classList.remove('active-hover');
    };

    const interactiveElements = document.querySelectorAll('a, button, .btn, .social-icon, .nav-link, .interactive-name, .about-tab-btn');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <div className="cursor-glow"></div>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
      <div className="cursor-outer"></div>
    </>
  );
}
