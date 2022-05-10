import { Grid } from '@mui/material';
import { styles } from './Container.styles';

export type ContainerProps = {
  children: React.ReactNode;
  spacing?: number;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
};

const Container = ({
  children,
  spacing = 0,
  direction = 'row',
  justifyContent = 'center',
  alignItems = 'center',
}: ContainerProps): JSX.Element => {
  return (
    <Grid
      container
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      spacing={spacing}
      style={styles.grid}
    >
      {children}
    </Grid>
  );
};

export default Container;
