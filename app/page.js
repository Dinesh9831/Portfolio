'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Internship from '../components/Internship';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import ResumeSection from '../components/ResumeSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import BackgroundEffects from '../components/BackgroundEffects';

export default function Home() {
  useEffect(() => {
     // --- Scroll Progress Bar ---
     const progressBar = document.createElement('div');
     progressBar.className = 'scroll-progress';
     document.body.appendChild(progressBar);

     const handleScroll = () => {
         const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
         const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
         const scrolled = (winScroll / height) * 100;
         progressBar.style.width = scrolled + "%";
         
         // Header Scrolled effect
         const header = document.querySelector('header');
         if (header) {
             if (window.scrollY > 50) header.classList.add('scrolled');
             else header.classList.remove('scrolled');
         }
         
         // Scroll Spy
         const sections = document.querySelectorAll('section[id]');
         const navLinks = document.querySelectorAll('.nav-link');
         let current = "";
         sections.forEach(section => {
             const sectionTop = section.offsetTop;
             if (window.pageYOffset >= (sectionTop - 150)) {
                 current = section.getAttribute('id');
             }
         });
         navLinks.forEach(link => {
             link.classList.remove('active-section');
             if (link.getAttribute('href').includes('#' + current)) link.classList.add('active-section');
         });
     };

     window.addEventListener('scroll', handleScroll);

     // --- Scroll Reveal ---
     const revealObserver = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) entry.target.classList.add('active');
         });
     }, { threshold: 0.1 });

     document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

     // --- Theme Toggle Init ---
     const currentTheme = localStorage.getItem('theme');
     if (currentTheme === 'light') document.body.classList.add('light-theme');

     const themeToggle = document.getElementById('theme-toggle');
     const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
     if (themeIcon && currentTheme === 'light') themeIcon.classList.replace('fa-moon', 'fa-sun');

     const handleThemeToggle = () => {
         document.body.classList.toggle('light-theme');
         const isLight = document.body.classList.contains('light-theme');
         if (themeIcon) {
             if (isLight) themeIcon.classList.replace('fa-moon', 'fa-sun');
             else themeIcon.classList.replace('fa-sun', 'fa-moon');
         }
         localStorage.setItem('theme', isLight ? 'light' : 'dark');
     };

     if (themeToggle) themeToggle.addEventListener('click', handleThemeToggle);

     return () => {
         window.removeEventListener('scroll', handleScroll);
         if (progressBar.parentNode) progressBar.parentNode.removeChild(progressBar);
         if (themeToggle) themeToggle.removeEventListener('click', handleThemeToggle);
         revealObserver.disconnect();
     };
  }, []);

  return (
    <main>
      <BackgroundEffects />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Internship />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <ResumeSection />
      <Contact />
      <Footer />
    </main>
  );
}
