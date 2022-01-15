import { Grid } from '@mui/material';
import { styles } from './Container.styles';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={styles.grid}
    >
      {children}
    </Grid>
  );
};

export default Container;
