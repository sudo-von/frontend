import { useState } from 'react';
import { IThemeContext } from 'src/contexts/ThemeContext/ThemeContext';

export const useTheme = (): IThemeContext => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'light',
  );

  const handleStorage = (selectedTheme: string): void => {
    window.localStorage.setItem('theme', selectedTheme);
    setTheme(selectedTheme);
  };

  const toggleTheme = (): void => {
    if (theme === 'dark') {
      handleStorage('light');
    } else {
      handleStorage('dark');
    }
  };

  return { theme, toggleTheme };
};
