import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { Container } from 'src/components';
import HackingCards from './Components/HackingCards/HackingCards';
import HackingDescription from './Components/HackingDescription/HackingDescription';
import { hackingCards } from './data';

const Hacking = (): JSX.Element => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Container justifyContent="space-between">
      <Grid item xs={12} md={4}>
        <HackingDescription textAlign={matches ? 'left' : 'center'} />
      </Grid>
      <Grid item xs={12} md={6}>
        <HackingCards data={hackingCards} />
      </Grid>
    </Container>
  );
};

export default Hacking;
