import { Typography } from '@mui/material';
import { useTheme } from 'styled-components';
import { styles } from './Subtitle.styles';

interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle = ({ children }: SubtitleProps) => {
  const theme = useTheme();
  const subtitleStyles = styles(theme.colors.accent);
  return (
    <Typography
      variant="subtitle1"
      display="block"
      gutterBottom
      style={subtitleStyles.subtitle}
    >
      {children}
    </Typography>
  );
};

export default Subtitle;
