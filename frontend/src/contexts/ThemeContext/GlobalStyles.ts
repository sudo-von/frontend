import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme: { background } }) => background};
    color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
    margin: 0;
    font-family: 'Roboto';
  }

  a{
    color: ${({
      theme: {
        colors: { secondary },
      },
    }) => secondary};
  }

  .primary{
    color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  }

  .secondary{
    color: ${({
      theme: {
        colors: { secondary },
      },
    }) => secondary};
  }

  .accent{
    color: ${({
      theme: {
        colors: { accent },
      },
    }) => accent};
  }

  .bg-primary{
    background-color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  }

  .bg-secondary{
    background-color: ${({
      theme: {
        colors: { secondary },
      },
    }) => secondary};
  }

  .bg-accent{
    background-color: ${({
      theme: {
        colors: { accent },
      },
    }) => accent};
  }

  p{
    font-size: 14px;
  }

`;
