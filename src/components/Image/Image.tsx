import styled from 'styled-components';

interface IImage {
    width? : string;
    borderRadius? : string;
}
 
const Image = styled.img<IImage>`
    width: ${({ width }) => width ? width : '100%'};
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '0'}px;
`;

export default Image