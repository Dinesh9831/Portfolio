'use client';

import { useState, useEffect, useRef } from 'react';

export default function Cursor() {
  const [isMobile, setIsMobile] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

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

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    let outerX = 0, outerY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px';
        dotRef.current.style.top = mouseY + 'px';
        dotRef.current.style.transform = `translate(-50%, -50%)`;
      }

      if (glowRef.current) {
        glowRef.current.style.left = mouseX + 'px';
        glowRef.current.style.top = mouseY + 'px';
      }

      // Handle hover effect using event delegation
      const target = e.target as HTMLElement;
      const isHovering = !!target.closest('a, button, .btn, .social-icon, .nav-link, .interactive-name, .about-tab-btn');
      
      const setHoverClass = (el: HTMLElement | null, add: boolean) => {
        if (!el) return;
        if (add) el.classList.add('active-hover');
        else el.classList.remove('active-hover');
      };

      setHoverClass(dotRef.current, isHovering);
      setHoverClass(outlineRef.current, isHovering);
      setHoverClass(outerRef.current, isHovering);
    };

    const animateCursor = () => {
      if (outlineRef.current) {
        outlineX += (mouseX - outlineX) * 0.2;
        outlineY += (mouseY - outlineY) * 0.2;
        outlineRef.current.style.left = outlineX + 'px';
        outlineRef.current.style.top = outlineY + 'px';
        outlineRef.current.style.transform = `translate(-50%, -50%)`;
      }

      if (outerRef.current) {
        outerX += (mouseX - outerX) * 0.1;
        outerY += (mouseY - outerY) * 0.1;
        outerRef.current.style.left = outerX + 'px';
        outerRef.current.style.top = outerY + 'px';
      }

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div ref={glowRef} className="cursor-glow"></div>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline"></div>
      <div ref={outerRef} className="cursor-outer"></div>
    </>
  );
}
