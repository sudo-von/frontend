import React, { createContext } from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { useTheme } from 'src/hooks/useTheme';
import { lightTheme, darkTheme } from 'src/constants/themes';
import { GlobalStyles } from './GlobalStyles';

export interface IThemeContext {
  theme: string;
  toggleTheme?: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
});

interface IThemeStore {
  children: React.ReactNode;
}

const ThemeStore = ({ children }: IThemeStore) => {
  const { theme, toggleTheme } = useTheme();
  const themeMode = theme === 'light' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentsProvider theme={themeMode}>
        <GlobalStyles />
        {children}
      </StyledComponentsProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeStore };
