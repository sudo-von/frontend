import { Button as MaterialButton } from '@mui/material';
import styled from 'styled-components';

type ButtonProps = {
  backgroundColor?: string;
};

const Button = styled(MaterialButton)<ButtonProps>`
  color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
  background: ${({
    backgroundColor,
    theme: {
      colors: { secondary },
    },
  }) => backgroundColor ?? secondary};
`;

export default Button;
