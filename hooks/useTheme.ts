import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isLight, setIsLight] = useState<boolean>(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    const lightTheme = currentTheme === 'light';
    setIsLight(lightTheme);
    if (lightTheme) {
      document.body.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsLight((prev) => {
      const newValue = !prev;
      if (newValue) {
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
      }
      return newValue;
    });
  };

  return { isLight, toggleTheme };
};
