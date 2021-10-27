import styled from 'styled-components'

interface IH2 {
  fontSize?: string;
  bold?: string;
}

const H2 = styled.h2<IH2>`
  color: ${({ theme: { colors : { primary } } }) => primary };
  font-size: ${props => props.fontSize ? props.fontSize  : '48'}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  padding: 0;
  margin: 0;
`

export default H2
