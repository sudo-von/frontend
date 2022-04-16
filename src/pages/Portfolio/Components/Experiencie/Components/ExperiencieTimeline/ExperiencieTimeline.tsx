import Timeline from '@mui/lab/Timeline';
import ExperiencieTimelineItem from '../ExperiencieTimelineItem/ExperiencieTimelineItem';
import { job } from '../../data';

interface ExperiencieTimelineProps {
  jobs: job[];
}

const ExperiencieTimeline = ({
  jobs,
}: ExperiencieTimelineProps): JSX.Element => {
  return (
    <Timeline position="alternate">
      {jobs.map(({ companyName, role, date }: job) => (
        <ExperiencieTimelineItem
          key={`${companyName}-${role}-${date}`}
          companyName={companyName}
          role={role}
          date={date}
        />
      ))}
    </Timeline>
  );
};

export default ExperiencieTimeline;
