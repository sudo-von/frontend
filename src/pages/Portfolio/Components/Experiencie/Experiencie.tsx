import { Grid } from '@mui/material';
import { Container } from 'src/components';
import ExperiencieDescription from './Components/ExperiencieDescription/ExperiencieDescription';
import ExperiencieTimeline from './Components/ExperiencieTimeline/ExperiencieTimeline';
import { jobs } from './data';

const Experiencie = (): JSX.Element => {
  return (
    <Container>
      <Grid item xs={12} md={6}>
        <ExperiencieDescription />
      </Grid>
      <Grid item xs={12} md={6}>
        <ExperiencieTimeline jobs={jobs} />
      </Grid>
    </Container>
  );
};

export default Experiencie;
