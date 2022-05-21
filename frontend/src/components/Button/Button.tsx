import { Button as MaterialButton } from '@mui/material';
import styled from 'styled-components';

const Button = styled(MaterialButton)`
  color: ${({
    theme: {
      colors: { primary },
    },
  }) => `${primary} !important`};
`;

export default Button;
