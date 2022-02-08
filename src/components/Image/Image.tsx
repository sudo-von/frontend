import styled from 'styled-components';

type ImageProps = {
  width?: string;
  borderRadius?: string;
};

const Image = styled.img<ImageProps>`
  width: ${({ width }) => width || '100%'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'}px;
`;

export default Image;
