import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], offset: number = 150): string => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // Using document.getElementById because refs for every section might be overkill for scroll spy list
      // But preserving strict typing and pure output.
      const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      let current = '';
      const pageYOffset = window.scrollY;

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - offset) {
          current = section.getAttribute('id') || '';
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};
