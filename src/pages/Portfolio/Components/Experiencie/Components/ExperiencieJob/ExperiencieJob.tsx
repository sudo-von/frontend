import { job } from 'src/pages/Portfolio/Components/Experiencie/data';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Bold, H5, H6, Small } from 'src/components';

const ExperiencieTimeLineItem = ({ companyName, role, date }: job) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <H5>
          <Bold>{companyName}</Bold>
        </H5>
        <H6>{role}</H6>
        <Small>{date}</Small>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExperiencieTimeLineItem;
