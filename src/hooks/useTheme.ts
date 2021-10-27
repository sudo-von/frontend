import { useState } from 'react'

interface IUseTheme {
  theme: string;
  toggleTheme: () => void;
}


export const useTheme = ():IUseTheme => {

  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light');

  const setStorage = (theme:string) : void => {
    window.localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  const toggleTheme = ():void => {
    if (theme === 'dark') {
      setStorage('light')
    } else {
      setStorage('dark')
    }
  }

  return { theme, toggleTheme }
}  