type DefaultTheme = {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  background: string;
};

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#000000',
    secondary: '#0D0536',
    accent: '#727272',
  },
  background: '#EAEDF5',
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#05CD54',
    accent: '#AEAEAE',
  },
  background: '#0F0F26',
};
