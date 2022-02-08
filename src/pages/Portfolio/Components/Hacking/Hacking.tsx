import { Grid } from '@mui/material';
import { Container } from 'src/components';
import HackingCards from './Components/HackingCards/HackingCards';
import HackingDescription from './Components/HackingDescription/HackingDescription';
import { hackingCards } from './data';

const Hacking = (): JSX.Element => {
  return (
    <Container>
      <Grid item xs={12} md={6}>
        <HackingDescription />
      </Grid>
      <Grid item xs={12} md={6}>
        <HackingCards data={hackingCards} />
      </Grid>
    </Container>
  );
};

export default Hacking;
