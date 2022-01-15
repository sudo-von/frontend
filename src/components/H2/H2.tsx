import styled from 'styled-components';

type H2Props = {
  fontSize?: string;
  bold?: string;
};

const H2 = styled.h2<H2Props>`
  color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
  font-size: ${({ fontSize }) => fontSize || '48'}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  padding: 0;
  margin: 0;
`;

export default H2;
