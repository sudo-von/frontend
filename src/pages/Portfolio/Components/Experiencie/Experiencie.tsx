import Timeline from '@mui/lab/Timeline';
import { Grid } from '@mui/material';
import ExperiencieTimeLineItem from './Components/ExperiencieJob/ExperiencieJob';
import { job, jobs } from './data';

const Experiencie = (): JSX.Element => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Timeline position="alternate">
          {jobs.map(({ companyName, role, date }: job) => (
            <ExperiencieTimeLineItem
              companyName={companyName}
              role={role}
              date={date}
            />
          ))}
        </Timeline>
      </Grid>
    </Grid>
  );
};

export default Experiencie;
