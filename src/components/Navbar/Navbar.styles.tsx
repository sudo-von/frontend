import { DefaultTheme } from 'styled-components';

export const styles = ({ background, colors }: DefaultTheme) =>
  ({
    appBar: {
      color: colors.secondary,
      backgroundColor: background,
      boxShadow: 'none',
      paddingTop: 15,
      paddingBottom: 15,
    },
    toolbar: {
      padding: 0,
    },
  } as const);
