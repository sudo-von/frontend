import styled from 'styled-components';

type H1Props = {
  fontSize?: string;
  bold?: string;
};

const H1 = styled.h1<H1Props>`
  color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
  font-size: ${({ fontSize }) => fontSize || '72'}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  padding: 0;
  margin: 0;
`;

export default H1;
