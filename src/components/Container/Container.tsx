import { Grid } from '@mui/material';
import { styles } from './Container.styles';

type ContainerProps = {
  children: React.ReactNode;
  spacing?: number;
};

const Container = ({ children, spacing }: ContainerProps): JSX.Element => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={spacing}
      style={styles.grid}
    >
      {children}
    </Grid>
  );
};

Container.defaultProps = {
  spacing: 0,
};

export default Container;
