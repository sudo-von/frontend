import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#000000',
    secondary: '#0D0536',
    accent: '#727272',
  },
  background: '#EAEDF5',
  blog: {
    category: {
      hacking: '#0D0536',
    },
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#05CD54',
    accent: '#AEAEAE',
  },
  background: '#0F0F26',
  blog: {
    category: {
      hacking: '#05CD54',
    },
  },
};
