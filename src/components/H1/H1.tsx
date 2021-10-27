import styled from 'styled-components'

interface IH1 {
  fontSize?: string;
  bold?: string;
}

const H1 = styled.h1<IH1>`
  color: ${({ theme: { colors : { primary } } }) => primary };
  font-size: ${props => props.fontSize ? props.fontSize  : '72'}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  padding: 0;
  margin: 0;
`

export default H1