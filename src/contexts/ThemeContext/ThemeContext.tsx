import React, { createContext } from 'react'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { useTheme } from 'src/hooks/useTheme'
import { lightTheme, darkTheme } from 'src/constants/themes'

const ThemeContext = createContext({})

interface IThemeStore {
  children: React.ReactNode,
}

const ThemeStore = ({ children }:IThemeStore) => {
  
    const { theme, toggleTheme } = useTheme()
    const themeMode = theme === 'light' ? darkTheme : lightTheme 

    return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <StyledComponentsProvider theme={themeMode}>
          <GlobalStyles/>
          {children}
        </StyledComponentsProvider>
      </ThemeContext.Provider>
    )
}

export {
    ThemeContext,
    ThemeStore
}