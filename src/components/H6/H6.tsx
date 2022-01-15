import styled from 'styled-components'

interface H6Props {
  fontSize?: string;
  bold?: string;
  theme?: string;
  colors?: string;
  primary?: string;
}

const H6 = styled.h6<H6Props>`
  color: ${({ theme: { colors : { primary } } }) => primary };
  font-size: ${props => props.fontSize ? props.fontSize  : '14'}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  padding: 0;
  margin: 0;
`;

export default H6;
