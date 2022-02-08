import styled from 'styled-components';

type IconProps = {
  size?: string;
  svg?: React.ReactNode;
};

const Wrapper = styled.div<IconProps>`
  display: flex;
  align-items: center;
  svg {
    width: ${({ size }) => size ?? '24'}px;
    height: ${({ size }) => size ?? '24'}px;
    fill: ${({
      theme: {
        colors: { secondary },
      },
    }) => secondary};
  }
`;

const Icon = ({ size, svg }: IconProps): JSX.Element => {
  return <Wrapper size={size}>{svg}</Wrapper>;
};

Icon.defaultProps = {
  size: '',
  svg: '',
};

export default Icon;
